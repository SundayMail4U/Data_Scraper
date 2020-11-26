#! python3

# ITMS 5/448 - Fall 2020 - IIT
# Professor Maurice Dawson
# Team SundayMail

# Desc: this program connects to the Reddit api to discover other topics
# of interest for users who post in a user-specified subreddit.
# 1) scrapes the usernames of post authors in a user-specified subreddit.
# 2) scrapes posts of those authors

# imports
import praw
import pandas as pd
import datetime as dt

# method to convert "created" timestamp from UNIX format to readable format 
def get_date(created):
    return dt.datetime.fromtimestamp(created)

# method to count comments on a post 
def count_comments(comments):
    count = 0
    for comment in comments:
        count+=1
    return count


# !!! TO RUN, REPLACE ALL VALUES IN REDDIT INSTANCE BELOW !!!
# create instance of the Reddit API,
# - uses OAuth credentials to connect to your Reddit developer application
reddit = praw.Reddit(client_id='YOUR_PERSONAL_USE_SCRIPT_HERE', \
                     client_secret='YOUR_SECRET_HERE', \
                     user_agent='YOUR_API_APPLICATION_NAME_HERE', \
                     username='YOUR_USERNAME_HERE', \
                     password='YOUR_PASSWORD_HERE')


# get user-specified subreddit title 
subreddit_title = input('Enter name of subreddit (excluding "r/"): ')

# create instance of subreddit 
subreddit = reddit.subreddit(subreddit_title)

# get a thread of posts in the subreddit. 
# - can retrieve by: .top(), .new(), .hot(), .controversial(), or .gilded()
num = int(input("Enter number of posts to scrape from the subreddit specifed above: "))
print("Scraping " + subreddit_title + " subreddit thread...")
subreddit_thread = subreddit.new(limit=num) # max limit is 1000

# dictionary to hold posts 
users_subreddits_dict = {"author":[],
                         "subreddit":[],
                         "upvote_ratio":[],
                         "18+":[],
                         "title":[],
                         "post_id":[],
                         "body":[],
                         "url":[],
                         "comments":[],
                         "timestamp":[]}

num = int(input("Enter number of posts to scrape from each author: "))
print("Scraping authors' posts...") 
# loop through posts in first subreddit 
for post in subreddit_thread:
    print("Scraping user: " + str(post.author))
    # loop through other posts by authors from first subreddit 
    for post in reddit.redditor(str(post.author)).submissions.new(limit=num):
        users_subreddits_dict["author"].append(post.author)
        users_subreddits_dict["subreddit"].append(post.subreddit)
        users_subreddits_dict["upvote_ratio"].append(post.upvote_ratio)
        users_subreddits_dict["18+"].append(post.over_18)
        users_subreddits_dict["title"].append(post.title)
        users_subreddits_dict["post_id"].append(post.id)
        users_subreddits_dict["body"].append(post.selftext)
        users_subreddits_dict["url"].append(post.url)
        users_subreddits_dict["comments"].append(count_comments(post.comments))
        users_subreddits_dict["timestamp"].append(post.created)

# create data frame with dictionary
users_topics_data = pd.DataFrame(users_subreddits_dict)

print("Formatting dates...")
# format the timestamp in human-readable format and appending to data set as "created"
_timestamp = users_topics_data["timestamp"].apply(get_date)
users_topics_data = users_topics_data.assign(created = _timestamp)

# input filename
filename = input("Enter filename (excluding extension): ")
full_filename = filename + ".csv"

# output data into csv file
users_topics_data.to_csv(full_filename, index=False)

# notify completion
print("Done")


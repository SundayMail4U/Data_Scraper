#! python3

# ITMS 5/448 - Fall 2020 - IIT
# Professor Maurice Dawson
# Team Sunday Mail

# imports
import praw
import pandas as pd
import datetime as dt


# method to create reddit instance
def create_instance(client_id, client_secret, user_agent, username, password):
    reddit = praw.Reddit(client_id = client_id, \
                     client_secret = client_secret, \
                     user_agent = user_agent, \
                     username = username, \
                     password = password)
    return reddit

# method to scrape subreddit for number of posts, then scrape a number
#            of posts from those authors
# paramters:
# - instance of reddit
# - subreddit title excluding "r/"
# - sort type (top, new, hot, controversial, or gilded)
# - num of posts to scrape from initial subreddit
# - num of posts to scrape from each author of initial subreddit's posts
# returns: json? csv?
def scrape_related_subreddits(reddit, subreddit_title, sort, subreddit_posts_num, authors_posts_num):
    subreddit = reddit.subreddit(subreddit_title) # instance of subreddit
    posts = praw.models.ListingGenerator(reddit, "") # empty object to hold posts

    # scraping posts according to specified sort and specified number
    if sort == "top":
        posts = subreddit.top(limit=subreddit_posts_num)
    elif sort == "new":
        posts = subreddit.new(limit=subreddit_posts_num)
    elif sort == "hot":
        posts = subreddit.hot(limit=subreddit_posts_num)
    elif sort == "controversial":
        posts = subreddit.controversial(limit=subreddit_posts_num)
    elif sort == "gilded":
        posts = subreddit.gilded(limit=subreddit_posts_num)

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

    # loop through posts from first subreddit 
    for post in posts:
        # loop through specified number of posts by authors from first subreddit 
        for post in reddit.redditor(str(post.author)).submissions.new(limit=authors_posts_num):
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

    return users_subreddits_dict

# method to create csv ?
def export_data:
    return None

# method to convert "created" timestamp from UNIX format to readable format 
def get_date(created):
    return dt.datetime.fromtimestamp(created)

# method to count comments of a post 
def count_comments(comments):
    count = 0
    for comment in comments:
        count+=1
    return count

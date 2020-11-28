#! python3

# ITMS 5/448 - Fall 2020 - IIT
# Professor Dr. Maurice Dawson
# Team Sunday Mail

# imports
import praw
import pandas as pd
import datetime as dt

# credential dictionary
cred = {"id":"cCBmjeLvTHnp0w",
        "secret":"qVZTZFVfTbS8JzHr825Rljkd7vTFFQ",
        "agent":"SundayMail4U",
        "username":"Vagos699",
        "password":""}

# dictionary to hold posts 
data_dict = {"author":[],
             "subreddit":[],
             "upvote_ratio":[],
             "18+":[],
             "title":[],
             "post_id":[],
             "body":[],
             "url":[],
             "comments":[],
             "timestamp":[]}

# method to populate authorization variables
def auth(client_id, client_secret, user_agent, username, password):
    cred["id"] = client_id
    cred["secret"] = client_secret
    cred["agent"] = user_agent
    cred["username"] = username
    cred["password"] = password


# method to scrape subreddit for number of posts, then scrape a number
# of posts from those authors.
# paramters:
# - subreddit_title: string (optional "r/" at beginning)
# - sort_type (top, new, hot, controversial, or gilded): string
# - subreddit_posts_num: int (num of posts to scrape from initial subreddit)
# - authors_posts_num: int (num of posts to scrape from each author of initial subreddit's posts)
# returns data_dict dictionary 
def scrape(subreddit_title, sort, subreddit_posts_num, authors_posts_num):
    reddit = init()

    # removing "r/" if present
    if "r/" in subreddit_title:
        subreddit_title = subreddit_title[2:]
    
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

    # loop through posts from first subreddit 
    for post in posts:
        # loop through specified number of posts by authors from first subreddit 
        for post in reddit.redditor(str(post.author)).submissions.new(limit=authors_posts_num):
            data_dict["author"].append(post.author)
            data_dict["subreddit"].append(post.subreddit)
            data_dict["upvote_ratio"].append(post.upvote_ratio)
            data_dict["18+"].append(post.over_18)
            data_dict["title"].append(post.title)
            data_dict["post_id"].append(post.id)
            data_dict["body"].append(post.selftext)
            data_dict["url"].append(post.url)
            data_dict["comments"].append(count_comments(post.comments))
            data_dict["timestamp"].append(post.created)

    return data_dict


# method to save data dictionary to csv file.
# required parameters:
# - filename: string (".csv" file extension is optional)
# optional parameters:
# - path: string (defaults to same location as reddit.py file)
# - data: dictionary (defaults to global data_dict dictionary
# example calls:
# - save_csv("myfile")
# - save_csv("myfile.csv", data=mydata)
# - save_csv("myfile", path="/Users/hannah/Desktop/")
# - save_csv("myfile.csv", path="C:\\Users\\hannah\\Desktop\\", data=mydata)
def save_csv(filename, path=None, data=None):
    # ensuring file extension
    if filename[-4:].lower() != ".csv":
        filename = filename + ".csv"

    # create data frame with dictionary
    if data == None:
        # using default global dictionary
        data_frame = pd.DataFrame(data_dict) 
    else:
        # using data parameter
        data_frame = pd.DataFrame(data)
    
    # format the timestamp in human-readable format and appending to data set as "created"
    _timestamp = data_frame["timestamp"].apply(get_date)
    data_frame = data_frame.assign(created = _timestamp)

    # output data into csv file
    if path == None:
        # saving to default location (same folder as reddit.py)
        data_frame.to_csv(filename, index=False)
    else:
        # saving to provided path location 
        filename = path + filename
        print(filename)
        data_frame.to_csv(filename, index=False) 


# 
# Helper Methods. Do not call from GUI.
# 

# creates and returns Reddit instance
def init():
    reddit = praw.Reddit(client_id = cred["id"], \
                         client_secret = cred["secret"], \
                         user_agent = cred["agent"], \
                         username = cred["username"], \
                         password = cred["password"])
    return reddit

# converts "created" timestamp from UNIX format to readable format 
def get_date(created):
    return dt.datetime.fromtimestamp(created)

# counts comments of a post 
def count_comments(comments):
    count = 0
    for comment in comments:
        count+=1
    return count


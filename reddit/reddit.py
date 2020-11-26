#! python3

# ITMS 5/448 - Fall 2020 - IIT
# Professor Dr. Maurice Dawson
# Team Sunday Mail

# imports
import praw
import pandas as pd
import datetime as dt

# credential dictionary
cred = {"id":"",
        "secret":"",
        "agent":"",
        "username":"",
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
# - subreddit title excluding "r/"
# - sort type (top, new, hot, controversial, or gilded)
# - num of posts to scrape from initial subreddit
# - num of posts to scrape from each author of initial subreddit's posts
# returns data_dict dictionary 
def scrape(subreddit_title, sort, subreddit_posts_num, authors_posts_num):
    reddit = init()
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


# 
# Helper Methods. Do not call from GUI.
# 

# creates and returns reddit instance
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


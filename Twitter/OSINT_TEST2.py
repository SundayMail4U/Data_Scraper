
import tweepy
from tweetutilites import print_tweets
import csv

# Authenticate to Twitter
#auth = tweepy.OAuthHandler("consumer_key", "consumer_secret")
#auth.set_access_token("access_token","access_secret")
#api = tweepy.API(auth, wait_on_rate_limit=True, wait_on_rate_limit_notify=True)# test authentication
#testFollowers = []
#testlist = []
auth = tweepy.OAuthHandler("I4FG9W75ksdK5gab2nvqHCiGS", "RPi8gP934dKFoi3EBdIc0sg1J34cePfHaNcGbiaaXoB58QwygW")
auth.set_access_token("1323701164685303808-3rypDaJ75lso6AEhyaRGA1xGrp2Q7y","QeXluDEXdvH6qwwFEzWBtLOMGbv0OvG6PVtg9aDudw3re")
api = tweepy.API(auth, wait_on_rate_limit=True, wait_on_rate_limit_notify=True)# test authentication
testFollowers = []
testlist = []


def get_followers(user_name, num_of_fol): ##gets targeted users followers
    cursor = tweepy.Cursor(api.followers, screen_name= user_name, count=200)
    for i in cursor.items(num_of_fol): ##defines the number of users
        testFollowers.append(i.screen_name)

    test_file = open('testfile.csv', 'w', newline='') ##

    with test_file:

        writer = csv.writer(test_file)

        for row in testFollowers:
            writer.writerow([row])
    
    test_file.close()

    keyword = input("Please enter the keyword or hashtag you will look for with these followers:\nKeyword: ")
    get_info(keyword)


def get_info(keyword):

    csv_list = []
    userlist = []

    test_file = open('testfile.csv', 'r', newline='')
    with test_file:
     reader = csv.reader(test_file)

     for line in reader:
         csv_list.append(line)
     test_file.close()

     for i in csv_list:
         csv_object = str(i)
         csv_format_object = csv_object.strip("['']")
         userlist.append(csv_format_object)

     


    

    userInfoFile = open('user_info.csv', 'w', newline='')
    with userInfoFile:

        writer = csv.writer(userInfoFile)
        for i in userlist:
            try:
                user_info = api.get_user(i)
                hashtags = api.search(q='from:' + i + '' + keyword, count=1)
                if hashtags:
                    try:
                        writer.writerow([user_info.name, user_info.screen_name, user_info.description, user_info.id, user_info.followers_count, user_info.friends_count, 'Yes'])
                        print("Found")
                    except:
                        print("couldn't format data")
                else:
                    try:
                        writer.writerow([user_info.name, user_info.screen_name, user_info.description, user_info.id, user_info.followers_count, user_info.friends_count, 'No'])
                        print("Not Found")
                    except:
                        print("couldn't format data")
            except:
                print("User not found.")

    userInfoFile.close()

    



    
def test_auth():    
    try:
        api.verify_credentials()
        print("Authentication OK")
    except:
        print("Error during authentication")


def main():
    test_auth()
    while True:
        try:
            twitter_name = input("Please enter the twitter username you would like to extract from:\nTwitter Name:")
            u=api.get_user(twitter_name)
            print("User " + u.screen_name + " exists.")
        except:
            print("User doesn't exist please try again:")
            continue
        break
    while True:
        try:
            followers_number = int(input("Please enter the number of followers you would like extracted.\nFollowers:"))
        except:
            print("Your input is invalid please try again.\n")
            continue
        break
    get_followers(twitter_name, followers_number)

get_info()

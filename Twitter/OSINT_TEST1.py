import tweepy
# from tweetutilites import print_tweets
import csv

# Authenticate to Twitter
auth = tweepy.OAuthHandler("consumer_key", "consumer_secret")
auth.set_access_token("access_token","access_secret")
api = tweepy.API(auth, wait_on_rate_limit=True, wait_on_rate_limit_notify=True)# test authentication
testFollowers = []
testlist = []


def get_followers():
    cursor = tweepy.Cursor(api.followers, screen_name= 'realDonaldTrump', count=200)
    for i in cursor.items(50000):
        testFollowers.append(i.screen_name)

    test_file = open('testfile.csv', 'w', newline='')

    with test_file:

        writer = csv.writer(test_file)

        for row in testFollowers:
            writer.writerow([row])
    
    test_file.close()


def get_info():

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
                hashtags = api.search(q='from:' + i + ' maga', count=1)
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

    



    
try:
    api.verify_credentials()
    print("Authentication OK")
except:
    print("Error during authentication")

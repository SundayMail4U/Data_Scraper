from flask import Flask, request, render_template, send_file
import Twitter.OSINT_TEST2
import Reddit.reddit

app = Flask(__name__, template_folder='./templates')

@app.route("/")
def index():
    return render_template('index.html')

@app.errorhandler(404)
def not_found_error(error):
    return render_template('index.html')


@app.route("/getTwitterData", methods=['GET'])
def getTwitterData():
    user_name = request.args['user_name']
    num_of_fol = request.args['num_of_fol']
    keyword = request.args['keyword']

    Twitter.OSINT_TEST2.get_followers(user_name=user_name, num_of_fol=int(num_of_fol), keyword=keyword)

    return 'Success'

@app.route("/downloadTwitter", methods=['GET'])
def downloadTwitter():
    return send_file('user_info.csv',
                     mimetype='text/csv',
                     attachment_filename='user_info.csv',
                     as_attachment=True)

@app.route("/getRedditData", methods=['GET'])
def getRedditData():
    subreddit_title = request.args['subreddit_title']
    sort = request.args['sort']
    subreddit_posts_num = request.args['subreddit_posts_num']
    authors_posts_num = request.args['authors_posts_num']
    global filename
    filename = request.args['filename']

    Reddit.reddit.scrape(subreddit_title=subreddit_title, sort=sort, subreddit_posts_num=int(subreddit_posts_num), authors_posts_num=int(authors_posts_num))
    Reddit.reddit.save_csv(filename=filename, path=None, data=None)

    return "Success"

@app.route("/downloadReddit", methods=['GET'])
def downloadReddit():
    attachmentFilename=filename + '.csv'

    return send_file(filename + '.csv',
                     mimetype='text/csv',
                     attachment_filename=attachmentFilename,
                     as_attachment=True)


app.run(debug=True)

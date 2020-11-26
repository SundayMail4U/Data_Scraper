from flask import Flask, request, render_template
import subprocess
import Twitter.OSINT_TEST2

# import Twitter.OSINT_TEST1
# import reddit.reddit_api

app = Flask(__name__, template_folder='./templates')

@app.route("/")
def index():
    return render_template('index.html')

@app.route("/auth", methods=['GET'])
def echo():

    user_name = request.args['user_name']
    num_of_fol = request.args['num_of_fol']
    keyword = request.args['keyword']


    # credentials = request.form['text']
    # return request.form['text'] + " Sent for authentication"

    Twitter.OSINT_TEST2.get_followers(user_name=user_name, num_of_fol=int(num_of_fol), keyword=keyword)

    return "Hello"

@app.route("/reddit", methods=['POST'])
def reddit():
    # reddit.reddit_api
    return index()

# if __name__ == "__main__":
#     app.run(debug='True')

app.run(debug=True)

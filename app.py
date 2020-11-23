from flask import Flask, request, render_template
import subprocess

# import Twitter.OSINT_TEST1
# import reddit.reddit_api

app = Flask(__name__, template_folder='./templates')

@app.route("/")
def index():
    return render_template('index.html')

# @app.route("/auth", methods=['GET'])
# def echo():
#     # credentials = request.form['text']
#     # return request.form['text'] + " Sent for authentication"
#
#     return "Hello"

@app.route("/twitter", methods=['POST'])
def twitter():
    # Twitter.OSINT_TEST1.get_followers()
    return index()

@app.route("/reddit", methods=['POST'])
def reddit():
    # reddit.reddit_api
    return index()

# if __name__ == "__main__":
#     app.run(debug='True')

app.run(debug=True)

from flask import Flask, request, render_template
import subprocess

# import reddit.reddit_api

app = Flask(__name__, template_folder='./templates')

@app.route("/")
def index():
    return render_template('index.html')

@app.route("/auth", methods=['GET'])
def echo():
    # credentials = request.form['text']
    # return request.form['text'] + " Sent for authentication"

    return "Hello"

@app.route("/Reddit", methods=['POST'])
def reddit():
    # reddit.reddit_api
    return index()

@app.route("/test", methods=['POST'])
def test():
    while True:
        subprocess.call('calc.exe')

# if __name__ == "__main__":
#     app.run(debug='True')

app.run(debug=True)

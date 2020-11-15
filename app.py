from flask import Flask, request, render_template
import subprocess
import Twitter.OSINT_TEST1

app = Flask(__name__, template_folder='./templates')

@app.route("/")
def index():
    return render_template('index.html')

@app.route("/auth", methods=['POST'])
def echo():
    credentials = request.form['text']
    return request.form['text'] + " Sent for authentication"
    # return 200

@app.route("/reddit", methods=['POST'])
def calc():
    subprocess.call('calc.exe')
    return index()

@app.route("/test", methods=['POST'])
def test():
    while True:
        subprocess.call('calc.exe')

if __name__ == "__main__":
    app.run(debug='True')
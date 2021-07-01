from flask import Flask, render_template, request

app=Flask(__name__)

@app.route("/", methods=["GET"])
def index():
    if request.method=="GET":
        return render_template("index.html")

@app.route("/I", methods=["GET"])
def I():
    if request.method=="GET":
        return render_template("I.html")

@app.route("/II", methods=["GET"])
def II():
    if request.method=="GET":
        return render_template("II.html")        

if __name__=="__main__":
    app.run(debug=True)
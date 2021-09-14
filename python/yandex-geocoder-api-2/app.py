import requests
import json
from flask import Flask
from flask import jsonify
from flask import request
from flask import render_template
from flask import redirect
from flask import url_for
from api.requests_api import RequestsApi

app=Flask(__name__)
app.secret_key = "823764c6-f937-43cb-a80d-1d8118746554"

@app.route('/view')
def view():
    res = RequestsApi.get_coordinate_by_address()
    point = res['response']['GeoObjectCollection']['featureMember'][0]['GeoObject']['Point']['pos']
    return render_template('view.html', point=point)

if __name__ == '__main__':
    app.run(debug=True)
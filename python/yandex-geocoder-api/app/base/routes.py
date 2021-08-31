from flask import Flask
from flask import render_template
from flask import url_for
from flask import request
import requests
from . import base

@base.route('/search-by-address')
def search_by_address():
    addres = 'territoriya Sportivny klub Romashkovo'    
    try:
        response = requests.request("GET", "https://geocode-maps.yandex.ru/1.x/?apikey=823764c6-f937-43cb-a80d-1d8118746554&format=json&geocode=" +addres+ "&lang=en-US")
        if response.status_code != 200:
            return None
        else:
            return render_template('map.html', response.json())
    except:
        return False
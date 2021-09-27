import requests

class RequestsApi:

    @staticmethod
    def get_coordinate_by_address(addres):
        try:
            response = requests.request("GET", "https://geocode-maps.yandex.ru/1.x/?apikey=823764c6-f937-43cb-a80d-1d8118746554&format=json&geocode=" +addres+ "&lang=en-US")
            if response.status_code != 200:
                return None
            else:
                return response.json()
        except:
            return False
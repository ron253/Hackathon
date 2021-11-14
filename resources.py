from flask_restful import Resource
import requests
from flask import request 
import http.client, urllib.parse
import json
 
class Home(Resource):
    def get(self):
        address = request.args.get("address")

        try:
            serveraddress="http://api.positionstack.com/v1/forward?access_key=49cbf7e7bc77b113aa57561c1c2c459f&query=" + address
            lat_long_response = requests.get(serveraddress).json()   

            latitude = lat_long_response['data'][0]['latitude']
            longitude = lat_long_response['data'][0]['longitude']

            str_lat = str(latitude)
            str_lon = str(longitude)
            token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhcHBJZCI6Im96cXJxcjBvcGkiLCJ0b2tlbiI6eyJpdiI6IjZlNDgxNzk1YWNjMDJmMWJjODdlY2Q1NjhkYTYzZjcyIiwiY29udGVudCI6IjYyYTAwODljMWQwMTI2NzEyZmRiODcxZTM2YzA2YmRlMDRhZTU5ZTY5MzE0ZWMyYzQwMDhiODkzMDg1MzFiZGNmOTgyNmEwM2MzMTZmYjEzNTRjOWMxMWJiMmU2NjE0YTM0NTNiMDc4YmRlZDYzMDUwMDc1YTI3YjU2ZDFmMjI3NDlhMzc1Y2NlY2FiYzZjNzFlYjQwYjQyNTVlZjcxZTk4N2Y5ODE5OTY0MjAwYzA2ZDhjNTQxYjM2YzgxOGUyZTcyYTYyNGQyNDViZDRmNzM4MTM2MjNiZmNkNzc3OTMyMGM2NzM3ODI3MmRlMWZmYmZjMTc5NWI2NGY0YzhhY2I0ODAxMGRlYWVlYmNhMGRiNDZhM2Y3YmJmMjJlYzcwNmYzNjZhZTJkZWQxNDc2ZmMxYzI2NWQ2YjBkOTFmMTI1ZjQxMmY3NjljMjQ3YzJhMjdjZmFkYzE1ODVkM2JhYzlhMTJjYTBiOGZjODBhYWNhMDRiOTkzMzhhOWEzMDE5YTk0YjAwZTZjMTljNGZhNWQ5MWVlMDVkZjNjNDgzYWQ1NzU5MWI1Y2RhMGVhODVmNTYyNWU2MDY2NTNiNDdlZjdkODVmMzljM2E0Zjg5OGNkMGQ4MGE0N2U2MDU2NjE5YmNmYzA0MGUzYWFjNTY4NzBmNDMyNDFmNzRjOTM5YWNhMGVlZjdmMjJlNDRlODkwNDAwZTExNThiNjZmZTYyMGI0MzNiNDAyODcxMmU4MzlkMjNjNTNjOGI0Y2U1MTEyMzA5MTg3N2MxMDFhY2RhNGM5NGIyYTg5Y2Q1YTdjN2QyY2ZhM2NjYmU5MTI1ZmY3MTE0NWQ4MzE4MjczMTNmNjQ3NWFmZWU1NDFmN2JlNWQ0ZWUifSwic2VjdXJpdHlUb2tlbiI6eyJpdiI6IjZlNDgxNzk1YWNjMDJmMWJjODdlY2Q1NjhkYTYzZjcyIiwiY29udGVudCI6IjcxOTA3M2RlMzIxMTExNmQ1ODg0YWUzNjI4ODM0Njk5N2NhZDY0ZDQ4ZjUwZTQ0OTZiM2I4N2M2MTU1MDIwZWVkN2IzMGQ3NTg4MTdiMDZkNzVmZmRjMjUifSwianRpIjoiMDMwZDgwOTYtOThiZS00NzA1LWFmNjYtOTgyNjlhM2RkN2U3IiwiaWF0IjoxNjM2OTA0Mzc1LCJleHAiOjE2MzY5MDc5NzV9.KxgHuGQRWtl7S6HEh6ODhLnqs-Y5hy_xNh_Uk9usNLw"
            # INRIX's Off Street Parking API
            url = "https://api.iq.inrix.com/lots/v3?point=" + str_lat + "%7C" + str_lon + "&radius=300&accesstoken=" + token

            response = requests.get(url).json()
            print(f'response data {response}')
            return json.dumps({
                "success":response
            }), 200
        except Exception as e:
            print(f'Error {e}')
            return {"error": e}, 400

       

     
       
        
   
    def post(self):
        data = request.get_json(force=True)
        print(f'Data {data}')
        
        return {
        'message': f'New website details created'
            }, 200

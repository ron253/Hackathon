from flask import Flask, request, jsonify
from flask_cors import CORS
import requests
from flask_restful import Api
from app import resources

app = Flask(__name__)
CORS(app)
api = Api(app)

api.add_resource(resources.Home, '/search')

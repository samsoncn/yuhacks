import time
from flask import Flask
from flask import request
from flask_cors import CORS, cross_origin


app = Flask(__name__)
cors = CORS(app)

@app.route('/api/questions')
@cross_origin()
def questions():
    print(request.get_json())
    json_data = request.get_json()
    url = json_data.get('url')
    return jsonify({"key": "Hello World"})

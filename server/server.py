import time
from flask import Flask
from flask_cors import CORS, cross_origin


app = Flask(__name__
    ,static_folder='client/build',static_url_path='')
cors = CORS(app)

@app.route('/api/questions')
@cross_origin()
def questions():
    print(request.get_json())
    json_data = request.get_json()
    url = json_data.get('url')

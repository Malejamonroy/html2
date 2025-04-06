from flask import Flask, jsonify, request ,  send_from_directory
from flask_cors import CORS

app = Flask(__name__, static_folder='.', static_url_path='')
CORS(app)  # Para permitir peticiones desde el frontend

@app.route('/')
def index():
    return send_from_directory('.', 'index.html')

@app.route('/calculadora.css')
def css():
    return send_from_directory('.', 'calculadora.css')

@app.route('/login', methods=['POST'])
def login():
    datos = request.json
    if datos['usuario'] == 'admin' and datos['clave'] == 'admin':
        return jsonify({"mensaje": "Login correcto"}), 200
    return jsonify({"mensaje": "Credenciales incorrectas"}), 401


if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True)
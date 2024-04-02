import joblib
from flask import Flask, request, jsonify
import os
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS

# Get the current directory of this script
current_dir = os.path.dirname(os.path.abspath(__file__))
# Specify the absolute path to crop_app.joblib
model_path = os.path.join(current_dir, 'crop_app.joblib')

@app.route('/form', methods=["POST"])
def brain():
    print('Received Form Data:', request.form)
    try:
        Nitrogen = float(request.form['Nitrogen'])
        Phosphorus = float(request.form['Phosphorus'])
        Potassium = float(request.form['Potassium'])
        Temperature = float(request.form['Temperature'])
        Humidity = float(request.form['Humidity'])
        Ph = float(request.form['ph'])
        Rainfall = float(request.form['Rainfall'])
        
        values = [Nitrogen, Phosphorus, Potassium, Temperature, Humidity, Ph, Rainfall]

        if 0 < Ph <= 14 and Temperature < 100 and Humidity > 0:
            model = joblib.load(model_path)
            arr = [values]
            acc = model.predict(arr)
            return jsonify({"prediction": str(acc[0])})  # Return prediction as JSON
        else:
            return jsonify({"error": "Invalid input values. Please check the values and fill it again."})
    except Exception as e:
        return jsonify({"error": str(e)})

if __name__ == '__main__':
    app.run(debug=True)

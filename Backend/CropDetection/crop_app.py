import joblib
import sys
import json
import os

# Get the current directory of this script
current_dir = os.path.dirname(os.path.abspath(__file__))
# Specify the absolute path to crop_app.joblib
model_path = os.path.join(current_dir, 'crop_app.joblib')

def predict(Nitrogen, Phosphorus, Potassium, Temperature, Humidity, Ph, Rainfall):
    values = [Nitrogen, Phosphorus, Potassium, Temperature, Humidity, Ph, Rainfall]
    
    if 0 < Ph <= 14 and Temperature < 100 and Humidity > 0:
        model = joblib.load(model_path)
        arr = [values]
        acc = model.predict(arr)
        return json.dumps({"prediction": str(acc[0])})
    else:
        return json.dumps({"error": "Invalid input values. Please check the values and fill it again."})

if __name__ == "__main__":
    try:
        Nitrogen = float(sys.argv[1])
        Phosphorus = float(sys.argv[2])
        Potassium = float(sys.argv[3])
        Temperature = float(sys.argv[4])
        Humidity = float(sys.argv[5])
        Ph = float(sys.argv[6])
        Rainfall = float(sys.argv[7])
        
        result = predict(Nitrogen, Phosphorus, Potassium, Temperature, Humidity, Ph, Rainfall)
        print(result)
    except Exception as e:
        print(json.dumps({"error": str(e)}))

const express = require('express');
const app = express();
const cropPriceRoutes = require('./routes/cropPriceRoutes');
const mongoose = require('mongoose');
const cors = require('cors');
const { execFile } = require('child_process');
const path = require('path');

app.use(cors());

const mongoURI = "mongodb+srv://vibhuchauhan37:AFeuKnd5Xu2FX45w@cluster0.jpb6sag.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
// console.log(mongoURI);

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

app.use(express.json());

// Use cropPriceRoutes for /proposeCropPrice route
app.use('/v1', cropPriceRoutes);

// Define the new route for crop prediction
app.post('/predict', (req, res) => {
  const { Nitrogen, Phosphorus, Potassium, Temperature, Humidity, ph, Rainfall } = req.body;

  // Specify the path to the Python script
  const scriptPath = path.join(__dirname, 'CropDetection/crop_app.py');
  const args = [Nitrogen, Phosphorus, Potassium, Temperature, Humidity, ph, Rainfall];

  execFile('python', [scriptPath, ...args], (error, stdout, stderr) => {
    if (error) {
      res.status(500).json({ error: error.message });
      return;
    }

    try {
      const result = JSON.parse(stdout);
      res.json(result);
    } catch (e) {
      res.status(500).json({ error: 'Failed to parse prediction result' });
    }
  });
});

// Define the port number your server will listen on
const port = 3737;

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

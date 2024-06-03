const { execFile } = require('child_process');
const express = require('express');
const router = express.Router();
const path = require('path');

router.post('/predict', (req, res) => {
  const { Nitrogen, Phosphorus, Potassium, Temperature, Humidity, ph, Rainfall } = req.body;

  // Specify the path to the Python script
  const scriptPath = path.join(__dirname, 'crop_app.py');
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

module.exports = router;

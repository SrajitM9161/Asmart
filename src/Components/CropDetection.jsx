import React, { useState } from 'react';
import axios from 'axios';
import "../CSS/CropDetection.css";

const CropDetection = () => {
  const [formData, setFormData] = useState({
    Nitrogen: '',
    Phosphorus: '',
    Potassium: '',
    Temperature: '',
    Humidity: '',
    ph: '',
    Rainfall: '',
  });
  const [prediction, setPrediction] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formattedFormData = new URLSearchParams(formData).toString();
    console.log('Formatted Form Data:', formattedFormData);  // Log formatted form data
    try {
      const res = await axios.post('https://asmart-n4tm-srajitm9161s-projects.vercel.app/', formattedFormData, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });
      if (res.status === 200) {
        if (res.data.prediction) {
          setPrediction(res.data.prediction);
          setError('');
        } else if (res.data.error) {
          setError(res.data.error);
          setPrediction('');
        }
      } else {
        setError('Error predicting crop. Please try again.');
      }
    } catch (err) {
      console.error('Error predicting crop:', err);
      setError('Error predicting crop. Please try again.');
    }
  };


  return (
    <div>
      <h2 className='crop-heading'>Grow the Crop Best Suited for your Enviroment.</h2>
      <div className="crop-detection">
        <form onSubmit={handleSubmit} className='crop-detection-form'>
          <div className='form-text1'>Fill the details:</div>
          <div className="detail-form">
            {/* Input fields */}
            <div className="detail-box">
              <label htmlFor="Nitrogen">Nitrogen:</label>
              <input
                type="text"
                id="Nitrogen"
                name="Nitrogen"
                min="0"
                max="100"
                placeholder="Nitrogen"
                required
                value={formData.Nitrogen}
                onChange={handleChange}
              />
            </div>
            <div className="detail-box">
              <label htmlFor="Phosphorus">Phosphorus:</label>
              <input
                type="text"
                id="Phosphorus"
                name="Phosphorus"
                min="0"
                max="100"
                placeholder="Phosphorus"
                required
                value={formData.Phosphorus}
                onChange={handleChange}
              />
            </div>
            <div className="detail-box">
              <label htmlFor="Potassium">Potassium:</label>
              <input
                type="text"
                id="Potassium"
                name="Potassium"
                min="0"
                max="100"
                placeholder="Potassium"
                required
                value={formData.Potassium}
                onChange={handleChange}
              />
            </div>
            <div className="detail-box">
              <label htmlFor="Temperature">Temperature:</label>
              <input
                type="text"
                id="Temperature"
                name="Temperature"
                placeholder="Temperature in Degree Celcius"
                required
                value={formData.Temperature}
                onChange={handleChange}
              />
            </div>
            <div className="detail-box">
              <label htmlFor="Humidity">Humidity:</label>
              <input
                type="text"
                id="Humidity"
                name="Humidity"
                placeholder="Relative Humidity in Percentage"
                required
                value={formData.Humidity}
                onChange={handleChange}
              />
            </div>
            <div className="detail-box">
              <label htmlFor="ph">pH:</label>
              <input
                type="text"
                id="ph"
                name="ph"
                min="0"
                max="14"
                placeholder="pH should be in between 0-14"
                required
                value={formData.ph}
                onChange={handleChange}
              />
            </div>
            <div className="detail-box">
              <label htmlFor="Rainfall">Rainfall:</label>
              <input
                type="text"
                id="Rainfall"
                name="Rainfall"
                placeholder="Rainfall in MM"
                required
                value={formData.Rainfall}
                onChange={handleChange}
              />
            </div>
          </div>
          <input type="submit" id="submit" name="submit" value="RECOMMEND" className='prediction-btn' />
          <div className='form-text2'>Learn more about <a href='https://www.manage.gov.in/publications/farmerbook.pdf'>Harvesting</a></div>
        </form >
        {/* Display prediction or error message */}
        <div className="prediction-output">
          <h1>Crop Recommended</h1>
          {prediction && <h4 className='prediction-output-text'>The best crops for this season are: <br/><br/>{prediction}</h4>}
          {error && <p className="error">{error}</p>}
        </div >
      </div>
    </div >
  );
};

export default CropDetection;

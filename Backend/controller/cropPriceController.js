const CropPrice = require('../model/CropModels');

// Controller function to propose a crop price
const proposeCropPrice = async (req, res) => {
  try {
    // Extract data from the request body
    const { userName, cropName, userAddress, proposedPrice, userPhoneNum } = req.body;

    // Validate the data
    if (!cropName || !proposedPrice || !userName || !userAddress || !userPhoneNum) {
      return res.status(400).json({ error: 'User name, address, phone number and crop name, proposed price are required' });
    }

    // Create a new CropPrice document
    const cropPrice = new CropPrice({ cropName, proposedPrice, userName, userAddress, userPhoneNum});

    // Save the document to the database
    await cropPrice.save();

    // Send a success response
    res.status(201).json({ message: 'Crop price proposed successfully' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = { proposeCropPrice };

const CropPrice = require('../model/CropModels');

// Controller function to propose a crop price
const getAllCropPrice = async (req, res) => {
  try {
    // Extract data from the request body
    const data = await CropPrice.find({});
    console.log("data is ", data);

    // Send a success response
    res.status(200).json({ data });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = { getAllCropPrice };

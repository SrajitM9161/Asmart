const mongoose = require('mongoose');

// Define a CropPrice schema
const cropPriceSchema = new mongoose.Schema({
  userName:String,
  cropName: String,
  userAddress: String,
  proposedPrice: Number,
  userPhoneNum:Number  
});

// Create a CropPrice model
const CropModels = mongoose.model('CropModels', cropPriceSchema);

module.exports = CropModels;

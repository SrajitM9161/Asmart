const express = require('express');
const router = express.Router();
const cropPriceController = require('../controller/cropPriceController');
const allCropPriceController = require('../controller/getData');

// Define route for proposing a crop price
router.post('/proposeCropPrice', cropPriceController.proposeCropPrice);
router.get('/proposeCropPrice', allCropPriceController.getAllCropPrice )

module.exports = router;
    
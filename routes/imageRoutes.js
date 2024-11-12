const express = require('express');
const router = express.Router();
const { addImage, getAllImages, uploadImage } = require('../controller/imageController');

router.post('/upload', uploadImage, addImage);
router.get('/images', getAllImages);

module.exports = router;

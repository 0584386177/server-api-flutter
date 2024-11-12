const Image = require('../models/imageModel');
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: './uploads',
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    },
});

const upload = multer({ storage: storage });

exports.uploadImage = upload.single('image');

exports.addImage = async (req, res) => {
    try {
        const newImage = new Image({
            filename: req.file.filename,
            path: req.file.path,
            size: req.file.size
        });
        await newImage.save();
        res.status(201).json(newImage);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getAllImages = async (req, res) => {
    try {
        const images = await Image.find();
        res.json(images);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

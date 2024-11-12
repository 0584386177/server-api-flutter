const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const imageRoutes = require('./routes/imageRoutes');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));
app.get('/', (req, res) => {
    res.send('Huynh Khanh Hoa');
});
connectDB();

app.use('/api', imageRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

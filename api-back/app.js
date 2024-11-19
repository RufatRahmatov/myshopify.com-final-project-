require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Importing Routes
const authRoutes = require('../api-back/routers/authRoutes');
const shopCardRoutes = require('./routers/shopCardRoutes');
const productRoutes = require('./routers/productRouter');
const eyeframesRoutes = require('./routers/eyeframRouter');
const addToRoutes = require('./routers/addToRoutes'); // New route

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB
mongoose
    .connect(process.env.DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.log('MongoDB connection error', err));

// Static Files
app.use('/uploads', express.static('uploads'));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/shop-cards', shopCardRoutes);
app.use('/api/products', productRoutes);
app.use('/api/eyeframes', eyeframesRoutes);
app.use('/api/add-to', addToRoutes); // New route endpoint

// Default route
app.get('/', (req, res) => {
    res.send('API is running...');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

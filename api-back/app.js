require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('../api-back/routers/authRoutes');
const shopCardRoutes = require('./routers/shopCardRoutes');
const productRoutes = require('./routers/productRouter'); // Doğru isimlendirme yapıldı
const eyeframesRoutes = require('./routers/eyeframRouter'); // Yeni eyeframes router'ı eklendi

const app = express();
const PORT = process.env.PORT || 3001;


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB bağlantısı
mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.log('MongoDB connection error', err));


app.use('/uploads', express.static('uploads'));


app.use('/api/auth', authRoutes);
app.use('/api/shop-cards', shopCardRoutes);
app.use('/api/products', productRoutes);
app.use('/api/eyeframes', eyeframesRoutes);


app.get('/', (req, res) => {
    res.send('API is running...');
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

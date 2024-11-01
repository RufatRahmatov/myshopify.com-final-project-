require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');


const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express());

mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.log('MongoDB connection error', err));

app.use('')

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
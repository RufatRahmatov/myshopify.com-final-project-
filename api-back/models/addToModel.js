
const mongoose = require('mongoose');

const colorSchema = new mongoose.Schema({
    name: String,
    price: Number,
    image: String,
    hoverImage: String,
});

const addToSchema = new mongoose.Schema({
    title: String,
    category: String,
    basePrice: Number,
    colors: [colorSchema],
    onSale: Boolean,
});

module.exports = mongoose.model('AddTo', addToSchema);

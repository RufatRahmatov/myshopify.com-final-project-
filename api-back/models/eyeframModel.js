const mongoose = require("mongoose");


const colorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    hoverImage: { type: String, required: true },
});


const eyeframeSchema = new mongoose.Schema({
    title: { type: String, required: true },
    category: { type: String, required: true },
    basePrice: { type: Number, required: true },
    colors: { type: [colorSchema], required: true },
});


const Eyeframe = mongoose.model("Eyeframe", eyeframeSchema);

module.exports = Eyeframe;

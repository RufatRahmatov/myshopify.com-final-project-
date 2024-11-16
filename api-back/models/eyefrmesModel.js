const mongoose = require("mongoose");

const EyeframeSchema = new mongoose.Schema({
    title: { type: String, required: true },
    category: { type: String, required: true },
    basePrice: { type: Number, required: true },
    colors: [
        {
            name: { type: String, required: true },
            price: { type: Number, required: true },
            image: { type: String, required: true },
            hoverImage: { type: String, required: true },
        },
    ],
    onSale: { type: Boolean, default: false },
});

module.exports = mongoose.model("Eyeframe", EyeframeSchema);

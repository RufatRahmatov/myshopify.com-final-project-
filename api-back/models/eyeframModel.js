const mongoose = require("mongoose");


const colorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    hoverImage: { type: String, required: true },
});


const eyeframeSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    category: { type: String, required: true },
    basePrice: { type: Number, required: true },
    colors: { type: [colorSchema], required: true },
    availableSizes: { type: [String], default: [] },
    isFeatured: { type: Boolean, default: false },
    stock: { type: Number, default: 0 },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});


eyeframeSchema.pre("save", function (next) {
    this.updatedAt = Date.now();
    next();
});


const Eyeframe = mongoose.model("Eyeframe", eyeframeSchema);

module.exports = Eyeframe;

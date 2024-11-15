const mongoose = require("mongoose");

const shopCardSchema = new mongoose.Schema({
    product: {
        type: String,
        required: [true, "Product name is required"],
        trim: true,
    },
    category: {
        type: String,
        required: [true, "Category is required"],
        trim: true,
    },
    addedDate: {
        type: Date,
        default: Date.now,
    },
    price: {
        type: Number,
        required: [true, "Price is required"],
        min: [0, "Price must be a positive number"],
    },
    quantity: {
        type: Number,
        required: [true, "Quantity is required"],
        min: [0, "Quantity must be a positive number"],
    },
    status: {
        type: String,
        enum: ["active", "inactive", "sold"],
        default: "active",
    },
    image: {
        type: String,
    },
});

module.exports = mongoose.model("ShopCard", shopCardSchema);

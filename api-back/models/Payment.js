const mongoose = require("mongoose");

const PaymentSchema = new mongoose.Schema({
    items: [
        {
            id: { type: Number, required: true },
            title: { type: String, required: true },
            price: { type: Number, required: true },
            quantity: { type: Number, required: true },
            image: { type: String, required: true },
        },
    ],
    totalPrice: { type: Number, required: true },
});

module.exports = mongoose.model("Payment", PaymentSchema);

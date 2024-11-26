const Payment = require("../models/Payment");


exports.getPayments = async (req, res) => {
    try {
        const payment = await Payment.findOne();
        if (!payment) return res.status(404).json({ message: "No payment data available" });
        res.status(200).json(payment);
    } catch (err) {
        res.status(500).json({ message: "Error fetching payment data", error: err });
    }
};


exports.updatePayment = async (req, res) => {
    const { items, totalPrice } = req.body;
    try {
        let payment = await Payment.findOne();
        if (!payment) {
            payment = new Payment({ items, totalPrice });
        } else {
            payment.items = items;
            payment.totalPrice = totalPrice;
        }
        await payment.save();
        res.status(200).json({ message: "Payment data updated successfully", payment });
    } catch (err) {
        res.status(500).json({ message: "Error updating payment data", error: err });
    }
};


exports.clearPayment = async (req, res) => {
    try {
        await Payment.deleteMany();
        res.status(200).json({ message: "Payment data cleared successfully" });
    } catch (err) {
        res.status(500).json({ message: "Error clearing payment data", error: err });
    }
};

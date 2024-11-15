const ShopCard = require("../models/shopCardModel");

// Get all shop cards
exports.getAllShopCards = async (req, res) => {
    try {
        const shopCards = await ShopCard.find();
        res.status(200).json({ success: true, data: shopCards });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Get a single shop card by ID
exports.getShopCardById = async (req, res) => {
    try {
        const shopCard = await ShopCard.findById(req.params.id);
        if (!shopCard) {
            return res.status(404).json({ success: false, message: "Shop card not found" });
        }
        res.status(200).json({ success: true, data: shopCard });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Create a new shop card
exports.createShopCard = async (req, res) => {
    try {
        const data = req.body;

        // Eğer resim yüklendiyse, dosya yolunu veriye ekleyin
        if (req.file) {
            data.image = req.file.path;
        }

        const shopCard = await ShopCard.create(data);
        res.status(201).json({ success: true, data: shopCard });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// Update a shop card
exports.updateShopCard = async (req, res) => {
    try {
        const data = req.body;

        // Eğer resim yüklendiyse, dosya yolunu veriye ekleyin
        if (req.file) {
            data.image = req.file.path;
        }

        const shopCard = await ShopCard.findByIdAndUpdate(req.params.id, data, {
            new: true,
            runValidators: true,
        });
        if (!shopCard) {
            return res.status(404).json({ success: false, message: "Shop card not found" });
        }
        res.status(200).json({ success: true, data: shopCard });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// Delete a shop card
exports.deleteShopCard = async (req, res) => {
    try {
        const shopCard = await ShopCard.findByIdAndDelete(req.params.id);
        if (!shopCard) {
            return res.status(404).json({ success: false, message: "Shop card not found" });
        }
        res.status(200).json({ success: true, message: "Shop card deleted successfully" });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

const AddTo = require('../models/addToModel');
const mongoose = require('mongoose');


exports.addProduct = async (req, res) => {
    try {
        const { title, category, basePrice, colors, onSale } = req.body;


        if (!title || !category || !basePrice || !Array.isArray(colors)) {
            return res.status(400).json({ error: 'Missing or invalid fields' });
        }

        const newProduct = new AddTo({
            title,
            category,
            basePrice,
            colors,
            onSale,
        });

        const savedProduct = await newProduct.save();
        res.status(201).json(savedProduct);
    } catch (error) {
        res.status(500).json({ error: 'Failed to add product', details: error.message });
    }
};


exports.getAllProducts = async (req, res) => {
    try {
        const products = await AddTo.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch products', details: error.message });
    }
};


exports.getProductById = async (req, res) => {
    try {
        const productId = req.params.id;

        if (!mongoose.Types.ObjectId.isValid(productId)) {
            return res.status(400).json({ error: 'Invalid product ID' });
        }

        const product = await AddTo.findById(productId);

        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }

        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch product', details: error.message });
    }
};


exports.updateProduct = async (req, res) => {
    try {
        const productId = req.params.id;

        if (!mongoose.Types.ObjectId.isValid(productId)) {
            return res.status(400).json({ error: 'Invalid product ID' });
        }

        const updates = req.body;
        const updatedProduct = await AddTo.findByIdAndUpdate(productId, updates, {
            new: true,
            runValidators: true,
        });

        if (!updatedProduct) {
            return res.status(404).json({ error: 'Product not found or could not be updated' });
        }

        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update product', details: error.message });
    }
};


exports.deleteProduct = async (req, res) => {
    try {
        const productId = req.params.id;

        if (!mongoose.Types.ObjectId.isValid(productId)) {
            return res.status(400).json({ error: 'Invalid product ID' });
        }

        const deletedProduct = await AddTo.findByIdAndDelete(productId);

        if (!deletedProduct) {
            return res.status(404).json({ error: 'Product not found or could not be deleted' });
        }

        res.status(200).json({ message: 'Product deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete product', details: error.message });
    }
};

const express = require('express');
const router = express.Router();

const {
    addProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct,
} = require('../controllers/addToController');


router.post('/', addProduct);
router.get('/', getAllProducts);
router.get('/:id', getProductById); // Get a single product by ID
router.put('/:id', updateProduct); // Update a product by ID
router.delete('/:id', deleteProduct); // Delete a product by ID

module.exports = router;

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
router.get('/:id', getProductById);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

module.exports = router;

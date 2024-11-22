const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const {
    getAllShopCards,
    getShopCardById,
    createShopCard,
    updateShopCard,
    deleteShopCard,
} = require("../controllers/productController");


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });


router.get("/", getAllShopCards);
router.get("/:id", getShopCardById);
router.post("/", upload.single('image'), createShopCard);
router.put("/:id", upload.single('image'), updateShopCard);
router.delete("/:id", deleteShopCard);

module.exports = router;

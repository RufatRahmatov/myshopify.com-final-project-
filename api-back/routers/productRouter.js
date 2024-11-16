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

// Multer Storage Ayarları
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); // Dosyaların kaydedileceği klasör
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname)); // Dosya ismi
    }
});

const upload = multer({ storage: storage });

// Routes
router.get("/", getAllShopCards);
router.get("/:id", getShopCardById);
router.post("/", upload.single('image'), createShopCard); // Multer middleware'ini ekledik
router.put("/:id", upload.single('image'), updateShopCard); // Güncelleme için de ekledik
router.delete("/:id", deleteShopCard);

module.exports = router;

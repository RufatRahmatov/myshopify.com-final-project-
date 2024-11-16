const express = require("express");
const multer = require("multer");
const path = require("path");
const router = express.Router();
const Eyeframe = require("../models/eyefrmesModel")
const {
    getEyeframes,
    createEyeframe,
    deleteEyeframe,
} = require("../controllers/eyeframsController");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads/"); // Dosyaların kaydedileceği klasör
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname)); // Benzersiz dosya ismi
    },
});

const upload = multer({ storage });


router.post(
    "/",
    upload.fields([
        { name: "image", maxCount: 1 },
        { name: "hoverImage", maxCount: 1 },
    ]),
    async (req, res) => {
        try {
            const { title, category, basePrice, colors, onSale } = req.body;


            const imagePath = req.files["image"]?.[0]?.path;
            const hoverImagePath = req.files["hoverImage"]?.[0]?.path;


            const eyeframe = new Eyeframe({
                title,
                category,
                basePrice,
                colors: JSON.parse(colors).map(color => ({
                    ...color,
                    image: imagePath,
                    hoverImage: hoverImagePath,
                })),
                onSale: onSale || false,
            });

            await eyeframe.save();
            res.status(201).json({ message: "Eyeframe created successfully", eyeframe });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Failed to create eyeframe", error: error.message });
        }
    }
);


router.get("/", getEyeframes);


router.delete("/:id", deleteEyeframe);

module.exports = router;
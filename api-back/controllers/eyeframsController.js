const Eyeframe = require("../models/eyefrmesModel");

// Get all eyeframes with filters
exports.getEyeframes = async (req, res) => {
    try {
        const { color, priceRange, category } = req.query;

        let query = {};

        if (color) {
            query["colors.name"] = color;
        }

        if (priceRange) {
            const [min, max] = priceRange.split("-");
            query.basePrice = { $gte: Number(min), $lte: Number(max) };
        }

        if (category) {
            query.category = category;
        }

        const eyeframes = await Eyeframe.find(query);
        res.status(200).json(eyeframes);
    } catch (error) {
        res.status(500).json({ message: "Error fetching eyeframes", error });
    }
};

// Create a new eyeframe
exports.createEyeframe = async (req, res) => {
    try {
        // Loglama
        console.log("Request Body:", req.body);
        console.log("Type of colors:", typeof req.body.colors);
        console.log("Colors Raw Value:", req.body.colors);

        let colors;

        // Gelen colors verisini kontrol et ve düzelt
        if (typeof req.body.colors === "string") {
            try {
                colors = JSON.parse(req.body.colors);
            } catch (error) {
                return res.status(400).json({ message: "Colors field must be a valid JSON string" });
            }
        } else if (Array.isArray(req.body.colors)) {
            colors = req.body.colors; // Zaten bir array
        } else if (typeof req.body.colors === "object") {
            colors = Object.values(req.body.colors); // Object'ten array'e dönüştür
        } else {
            return res.status(400).json({ message: "Colors field must be a JSON string, array, or object" });
        }

        // Dosyaları ilişkilendir
        const files = req.files.reduce((acc, file) => {
            acc[file.fieldname] = file.path;
            return acc;
        }, {});

        const colorsWithFiles = colors.map((color, index) => {
            const imagePath = files[`colors[${index}][image]`];
            const hoverImagePath = files[`colors[${index}][hoverImage]`];

            if (!imagePath || !hoverImagePath) {
                throw new Error(`Missing image or hoverImage for color at index ${index}`);
            }

            return {
                ...color,
                image: imagePath,
                hoverImage: hoverImagePath,
            };
        });

        const { title, category, basePrice, onSale } = req.body;

        const eyeframe = new Eyeframe({
            title,
            category,
            basePrice,
            colors: colorsWithFiles,
            onSale: onSale || false,
        });

        await eyeframe.save();
        res.status(201).json({ message: "Eyeframe created successfully", eyeframe });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ message: "Failed to create eyeframe", error: error.message });
    }
};


// Delete an eyeframe by ID
exports.deleteEyeframe = async (req, res) => {
    try {
        const { id } = req.params;
        await Eyeframe.findByIdAndDelete(id);
        res.status(200).json({ message: "Eyeframe deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting eyeframe", error });
    }
};

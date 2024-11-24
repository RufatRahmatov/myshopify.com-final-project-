const Eyeframe = require("../models/eyeframModel");


const getAllEyeframes = async (req, res) => {
    try {
        const eyeframes = await Eyeframe.find();
        res.status(200).json(eyeframes);
    } catch (error) {
        console.error("Error fetching eyeframes:", error);
        res.status(500).json({ message: "Error fetching eyeframes" });
    }
};


const addEyeframe = async (req, res) => {
    try {
        const { title, category, basePrice } = req.body;


        if (!title || !category || !basePrice) {
            return res.status(400).json({
                message: "All fields (title, category, basePrice) are required.",
            });
        }

        const newEyeframe = new Eyeframe(req.body);
        await newEyeframe.save();
        res.status(201).json(newEyeframe);
    } catch (error) {
        console.error("Error adding eyeframe:", error);
        res.status(400).json({
            message: "Failed to create eyeframe. Check the required fields.",
            error: error.message,
        });
    }
};


const deleteEyeframe = async (req, res) => {
    try {
        const eyeframe = await Eyeframe.findById(req.params.id);

        if (!eyeframe) {
            return res.status(404).json({ message: "Eyeframe not found" });
        }

        await eyeframe.remove();
        res.status(200).json({ message: "Eyeframe deleted successfully" });
    } catch (error) {
        console.error("Error deleting eyeframe:", error);
        res.status(500).json({ message: "Error deleting eyeframe", error });
    }
};


const updateEyeframe = async (req, res) => {
    try {
        const { title, category, basePrice } = req.body;


        if (!title || !category || !basePrice) {
            return res.status(400).json({
                message: "All fields (title, category, basePrice) are required.",
            });
        }

        const updatedEyeframe = await Eyeframe.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!updatedEyeframe) {
            return res.status(404).json({ message: "Eyeframe not found" });
        }

        res.status(200).json(updatedEyeframe);
    } catch (error) {
        console.error("Error updating eyeframe:", error);
        res.status(500).json({ message: "Error updating eyeframe", error });
    }
};

module.exports = {
    getAllEyeframes,
    addEyeframe,
    deleteEyeframe,
    updateEyeframe,
};

const express = require("express");
const {
    getAllEyeframes,
    addEyeframe,
    deleteEyeframe,
    updateEyeframe,
} = require("../controllers/eyeframController");

const router = express.Router();

// Get All Eyeframes
router.get("/", getAllEyeframes);

// Add New Eyeframe
router.post("/", addEyeframe);

// Delete Eyeframe by ID
router.delete("/:id", deleteEyeframe);

// Update Eyeframe by ID
router.put("/:id", updateEyeframe);

module.exports = router;

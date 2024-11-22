const express = require("express");
const {
    getAllEyeframes,
    addEyeframe,
    deleteEyeframe,
    updateEyeframe,
} = require("../controllers/eyeframController");

const router = express.Router();


router.get("/", getAllEyeframes);


router.post("/", addEyeframe);


router.delete("/:id", deleteEyeframe);


router.put("/:id", updateEyeframe);

module.exports = router;

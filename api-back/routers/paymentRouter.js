const express = require("express");
const { getPayments, updatePayment, clearPayment } = require("../controllers/paymentController");
const router = express.Router();

router.get("/", getPayments);
router.post("/", updatePayment);
router.delete("/", clearPayment);

module.exports = router;

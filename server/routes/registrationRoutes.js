const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");
const { registerEvent, getRegistrations } = require("../controllers/registrationController");

router.post("/:id", protect, registerEvent);
router.get("/", protect, getRegistrations);

module.exports = router;

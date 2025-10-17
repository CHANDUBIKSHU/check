const express = require("express");
const router = express.Router();
const { login } = require("../controllers/usercontroller");

// POST /api/login
router.post("/login", login);

module.exports = router;

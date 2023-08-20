const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");

const registercontroller = require("../controllers/registerController");

router.post(
  "/createAdmin",
  [
    body("email", "invalid email").isEmail(),
    body("password", "invalid password"),
  ],
  registercontroller.handleAdminRegistration
);

module.exports = router;

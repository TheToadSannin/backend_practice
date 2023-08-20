const express = require("express");
const router = express.Router();

const authcontroller = require("../controllers/auth");

const { body } = require("express-validator");

router.post(
  "/loginAdmin",
  [
    body("email", "invalid email").isEmail(),
    body("password", "invalid password"),
  ],
  authcontroller.handleAdminLogin
);

module.exports = router;

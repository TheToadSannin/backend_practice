const express = require("express");
const Admin = require("../models/admin");
const { validationResult } = require("express-validator");

const handleAdminRegistration = async (req, res) => {
  const errors = validationResult(req);
  console.log(errors);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    await Admin.create({
      email: req.body.email,
      password: req.body.password,
    });
    res.json({ success: true });
  } catch (error) {
    console.log(error);
    res.json({ success: false });
  }
};

module.exports = { handleAdminRegistration };

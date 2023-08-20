const admin_collection = require("../models/admin");
const { validationResult } = require("express-validator");

const handleAdminLogin = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.json({ msg: errors.array()[0].msg, success: false });
  }

  const { email, password } = req.body;

  try {
    const admin_data = await admin_collection.findOne({ email: email });

    if (admin_data === null) {
      return res.json({ msg: "invalid email/password", success: false });
    }
    if (admin_data.password === password) {
      admin_data.password = "";
      return res.json({
        msg: "login successful",
        success: true,
        admin: admin_data,
      });
    }
    return res.json({
      msg: "password and email doesn't match",
      success: false,
    });
  } catch (error) {
    res.json({ errors: error, success: false });
  }
};

module.exports = { handleAdminLogin };

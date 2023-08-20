const mongoose = require("mongoose");

const { Schema } = mongoose;

const adminSchema = new Schema(
  {
    email: {
      type: String,
    },
    password: {
      type: String,
    },
  },
  {
    collection: "admin",
  }
);

module.exports = mongoose.model("application", adminSchema);

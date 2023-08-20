const mongoose = require("mongoose");

const mongoUri =
  // "mongodb+srv://gauxrav:<pssword>g@cluster0.lctxgaw.mongodb.net/auto_applica";

const mongodb = async () => {
  await mongoose
    .connect(mongoUri)
    .then(() => {
      console.log("connect successfully");
    })
    .catch((err) => {
      console.error(err);
    });
};

module.exports = mongodb;

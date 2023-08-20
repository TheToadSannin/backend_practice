const mongodb = require("./db");
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.use(express.json()); // this is used to parse only the json from the request

mongodb();

// app.use("/api", require("./routes/admin"));
app.use("/api", require("./routes/loginauth.js"));
app.use("/api", require("./routes/register.js"));

app.listen(5000, () => {
  console.log("listening on the port 5000");
});

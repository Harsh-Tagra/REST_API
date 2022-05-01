const mongoose = require("mongoose");
mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log("connected sucees to db");
  })
  .catch((err) => {
    console.log("connection failed to db", process.env.DB_URL);
  });

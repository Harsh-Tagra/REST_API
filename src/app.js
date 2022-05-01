const express = require("express");
const res = require("express/lib/response");
const env = require("dotenv");
const { routes } = require("./routes");

env.config();
require("./connection");
const app = express();
app.use(express.json());
Port = process.env.PORT;
routes(app);
app.listen(Port, () => {
  console.log(`localhost:${Port}`);
});

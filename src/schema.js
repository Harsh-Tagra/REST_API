const { urlencoded } = require("express");
const mongoose = require("mongoose");
const { required } = require("nodemon/lib/config");
const { stringify } = require("nodemon/lib/utils");
const validator = require("validator");
const userschema = mongoose.Schema({
  name: {
    type: String,
    unique: true,
  },

  email: {
    type: String,
    unique: true,
  },
  usertype: String,
  number: {
    type: String,
    minLength: 10,

    unique: true,
    maxLength: 10,
  },
});
const schema = mongoose.model("curd", userschema);
module.exports = schema;

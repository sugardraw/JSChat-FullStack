const mongoose = require("mongoose");

/**
 * registration schema
 */

let registrationSchema = mongoose.Schema({
  city: { type: String, required: true },
  email: { type: String, required: true },
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  password: { type: String, required: true },
  password_confirmation: { type: String, required: true },
  postcode: { type: String, required: true },
  street: { type: String, required: true }
});

let Registration = (module.exports = mongoose.model("Registration", registrationSchema));

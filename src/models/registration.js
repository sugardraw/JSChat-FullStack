const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

/**
 * registration schema
 */

let registrationSchema = mongoose.Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  street: { type: String, required: true },
  postcode: { type: String, required: true },
  city: { type: String, required: true },
  email: { type: String, default: "", required: true },
  password: { type: String, default: "", required: true },
  isDeleted: { type: Boolean, default: false },
  signUpDate: { type: Date, default: Date.now() }
});

registrationSchema.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};
registrationSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};

let Registration = (module.exports = mongoose.model(
  "registerList",
  registrationSchema
));

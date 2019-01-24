const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

/**
 * registration schema
 * tutorial for the authentication. https://medium.com/@Keithweaver_/building-a-log-in-system-for-a-mern-stack-39411e9513bd
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

registrationSchema.methods.validPassword = function(candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, function(err, res) {
      if (err) return cb(err);
      cb(null, res);
  });
};


let Registration = (module.exports = mongoose.model(
  "registerList",
  registrationSchema
));

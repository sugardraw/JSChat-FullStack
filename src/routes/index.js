const router = require("express").Router();
const fs = require("fs");
const mongoose = require("mongoose");

/**
 * Registration Route
 */

/**
 * bringing the model
 */
let Registration = require("../models/registration");

router.post("/registration", (req, res) => {
  console.log("body:__", req.body);
  if (req.body.email != "" && req.body.password != "") {
    if (req.body.password === req.body.password_confirmation) {
      let userData = new Registration(req.body);
      userData.save();
    } else {
      res.send("please, repeat the same password");
      return "please, repeat the same password";
    }
  } else {
    res.send(
      "registration failed. Make sure you write a valid email and password"
    );
    return "registration failed. Make sure you write a valid email and password";
  }
  res.send("Congratulations!, registration success");
});

router.get("/registration/usersList", (req, res) => {
  Registration.find({}, function(err, data) {
    res.send(data);
  });
});

module.exports = router;

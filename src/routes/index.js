const router = require("express").Router();
const fs = require("fs");
const path = require("path");
const mongoose = require("mongoose");

/**
 * Registration Route
 */

/**
 * bringing the model
 */
let Registration = require("../models/registration");

router.post("/registration", (req, res) => {
  console.log("body:__", req.body.email);

  if (req.body.email != undefined && req.body.password != undefined) {
    Registration.find({ email: req.body.email }, (err, previousUsers) => {
      if (err) {
        res.send("Registration failed. Server error");
      } else if (previousUsers.length > 0) {
        res.send("Registration failed. Email already exists");
      } else {
        let userData = new Registration(req.body);
        userData.save();
        res.send("Registration succeeded!!!");
      }
    });
  } else {
    res.send(
      "Registration failed. Make sure You fulfilled correctly all fields"
    );
  }
});
router.post("/login", (req, res) => {
  // 1. Receive email id and password
  let password = req.body.password;
  let email = req.body.email;

  // if (req.body.password != undefined && req.body.email != undefined) {
  //   Registration.find({}, (err, data) => {
  //     if (err) {
  //       throw err;
  //     } else {
  //       data.forEach(user => {
  //         console.log(user.password, user.email);
  //       });
  //     }
  //   });
  // } else {
  //   res.send("write something, baby");
  // }
  res.send("write something, baby");
});

module.exports = router;

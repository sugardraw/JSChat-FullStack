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
let UserSession = require("../models/userSession");

router.post("/registration", (req, res) => {
  if (req.body.email != undefined && req.body.password != undefined) {
    Registration.find({ email: req.body.email }, (err, previousUsers) => {
      if (err) {
        return res.send("Registration failed. Server error");
      } else if (previousUsers.length > 0) {
        return res.send("Registration failed. Email already exists");
      } else {
        /**
         * we kill the unnecessary object properties
         */
        delete req.body["errors"];
        delete req.body["password_confirmation"];
        let userData = new Registration(req.body);
        userData.password = userData.generateHash(req.body.password);

        userData.save();
        return res.send("Registration succeeded!!!!");
      }
    });
  } else {
    res.send(
      "Registration failed. Make sure You fulfilled correctly all fields"
    );
  }
});
router.post("/login", (req, res) => {
  delete req.body["errors"];
  delete req.body["token"];
  // 1. Receive email id and password

  let { email, password } = req.body;

  console.log("####:", email, password);

  Registration.findOne({ email: email }, function(err, user) {
    console.log("user:", user);
    if (err) {
      console.log(err);
    } else if (user != null) {
      // test a matching password
      console.log("(((((:", user);
      user.validPassword(password, function(err, isMatch) {
        if (err) throw err;
        console.log(password, isMatch);
        if (isMatch) {

          const userSession = new UserSession();
          userSession.userId = user._id;
          userSession.save((err, doc) => {
            if (err) {
              console.log(err);
              return res.send({
                success: false,
                message: "Error: server error"
              });
            }

            return res.send({
              success: true,
              message:
                "Congratulations!, you will access your Chatroom in few seconds",
              token: doc._id,
              userName:user.first_name
            });
          });
        } else {
          return res.send({
            success: false,
            message:
              "Sorry, you can't access the Chatroom. Make sure you give the correct Email and Password"
          });
        }
      });
    } else {
      return res.send({
        success: false,
        message:
          "Sorry, you can't access your Chatroom. Are you already registered?"
      });
    }
  });

  /**
   * fetch user and test password verification
   *  */
});

module.exports = router;

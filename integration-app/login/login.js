//this file used to develop the login rest api  (POST)
// const express = require("express");
// const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//import mongodb module
let mongodb = require("mongodb");

//create the client
//mongodb follows the "client server" architecture
let client = mongodb.MongoClient;
//where "nareshIT" is the client

//import token.js file
//token.js file used to save the server side token
let obj = require("../config/token.js");

//generate the token
let generateToken = require("../config/generateToken");

//create and export the "module"
let login = require("express")
  .Router()
  .post("/", (req, res) => {
    client.connect("mongodb://localhost:27017/shoppingCart", (err, db) => {
      if (err) throw err;
      else {
        db.collection("userDetails")
          .find({ userEmail: req.body.email, userPassword: req.body.password })
          .toArray((err, array) => {
            if (err) throw err;
            else {
              if (array.length > 0) {
                //console.log(array);
                var name = null;
                var email = null;
                var id = null;
                array.forEach((arr) => {
                  name = arr.userName;
                  email = arr.userEmail;
                  id = arr._id;
                });

                // let token = generateToken(
                //   {
                //     userEmail: req.body.email,
                //     userPassword: req.body.password, //line no 43-46 is data line no 47 is password to generate token
                //   },
                //   "a@A.bcde"
                // );
                const token = jwt.sign(
                  {
                    userEmail: req.body.email,
                    userPassword: req.body.password,
                  },
                  "a@A.bcde",
                  {
                    expiresIn: "9h",
                  }
                );
                obj.token = token;
                res.send({
                  login: "success",
                  token: token,
                  name: name,
                  email: email,
                  id: id,
                });
              } else {
                res.send({ login: "fail" });
              }
            }
          });
      }
    });
  });
module.exports = login;

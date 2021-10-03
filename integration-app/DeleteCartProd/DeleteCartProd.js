let mongodb = require("mongodb");
let client = mongodb.MongoClient;
const jwt = require("jsonwebtoken");
//var ObjectId = require("mongodb").ObjectID;
let DeletCarteProd = require("express")
  .Router()
  .delete("/", (req, res) => {
    const token = req.headers["x-access-token"];
    if (!token) {
      return res.status(403).send({
        addCart: "A token is required for authentication",
      });
    } else {
      //console.log(token);
      try {
        ////////
        //user encoded token dycrypted
        console.log(token);
        const decoded = jwt.verify(token, "a@A.bcde");
        console.log(decoded);
        var email = decoded.userEmail;
        var password = decoded.userPassword;
        console.log(email);
        console.log(password);
        //connecting to mongodb
        client.connect(
          "mongodb://localhost:27017/shoppingCart",
          async (err, db) => {
            if (err) throw err;
            else {
              //checking the user in user details table based on req.user = decoded;
              console.log("user" + email);
              console.log("password" + password);
              await db
                .collection("userDetails")
                .find({
                  userEmail: email,
                  userPassword: password,
                })

                .toArray((err, array) => {
                  console.log("err" + err);

                  if (err) throw err;
                  else {
                    console.log("array" + array);
                    if (array.length > 0) {
                      console.log("array.length" + array.length);
                      ///databasr start
                      client.connect(
                        "mongodb://localhost:27017/shoppingCart",
                        (err, db) => {
                          if (err) throw err;
                          else {
                            db.collection("cart").deleteOne(
                              { _id: req.body.id },
                              {
                                upsert: true,
                              },
                              (err, result) => {
                                if (err) throw err;
                                else {
                                  console.log(result.deletedCount);
                                  if (result.deletedCount == 0) {
                                    res.send({ delete: "fail" });
                                  } else {
                                    res.send({ delete: "success" });
                                  }
                                }
                              }
                            );
                          }
                        }
                      );
                      ////database part end
                    }
                  }
                });
            }
          }
        );

        ///////
      } catch (err) {
        return res.status(401).send({
          deleteCart: "Invalid token",
        });
      }
    }
  });
module.exports = DeletCarteProd;

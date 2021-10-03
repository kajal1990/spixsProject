let mongodb = require("mongodb");
let client = mongodb.MongoClient;
const jwt = require("jsonwebtoken");

let Edit = require("express")
  .Router()
  .put("/", (req, res) => {
    const token = req.headers["x-access-token"];
    if (!token) {
      return res.status(403).send({
        addCart: "A token is required for authentication",
      });
    } else {
      try {
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

                  //database start
                  client.connect(
                    "mongodb://localhost:27017/shoppingCart",
                    (err, db) => {
                      if (err) throw err;
                      else {
                        db.collection("productDetails").updateOne(
                          // { _id: ObjectID(req.body.id) },
                          { _id: req.body.id },
                          {
                            $set: {
                              productName: req.body.productName,
                              productId: req.body.productId,
                              productImage: req.body.productImage,
                              productPrice: req.body.productPrice,
                              productDescription: req.body.productDescription,
                            },
                          },
                          {
                            upsert: true,
                          },
                          (err, result) => {
                            if (err) throw err;
                            else {
                              res.send({ update: "success" });
                            }
                          }
                        );
                      }
                    }
                  );
                  ////databse end
                });
            }
          }
        );

        /////
      } catch (err) {
        return res.status(401).send({
          addCart: "Invalid token",
        });
      }
    }
  });
module.exports = Edit;

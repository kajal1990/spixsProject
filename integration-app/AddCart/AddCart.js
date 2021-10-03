let mongodb = require("mongodb");
let client = mongodb.MongoClient;
const jwt = require("jsonwebtoken");
let AddCart = require("express")
  .Router()
  .post("/", (req, res) => {
    const token = req.headers["x-access-token"];
    if (!token) {
      return res.status(403).send({
        addCart: "A token is required for authentication",
      });
    } else {
      //console.log(decoded);
      try {
        //user encoded token dycrypted
        const decoded = jwt.verify(token, "a@A.bcde");

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
              console.log("user" + email.email);
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
                      //database connection start
                      client.connect(
                        "mongodb://localhost:27017/shoppingCart",
                        async (err, db) => {
                          if (err) throw err;
                          else {
                            await getNextSequence(
                              db,
                              "counterCartDetail",
                              function (err, result) {
                                if (!err) {
                                  db.collection("cart").insertOne(
                                    {
                                      _id: result,
                                      userId: req.body.userId,
                                      productId: req.body.productId,
                                      quantity: req.body.quantity,
                                    },
                                    (err, result) => {
                                      if (err) throw err;
                                      else {
                                        // console.log(result.insertedId);
                                        // console.log(result.ops[0]._id);
                                        res.send({
                                          item: " 1 product added to cart ",
                                          id: result.insertedId,
                                        });
                                      }
                                    }
                                  );
                                }
                              }
                            );
                          }
                        }
                      );
                      /////
                    }
                  }
                });
            }
          }
        );
      } catch (err) {
        return res.status(401).send({
          addCart: "Invalid token",
        });
      }
    }

    ///
  });
function getNextSequence(db, name, callback) {
  db.collection("cartCounter").findAndModify(
    { _id: name },
    null,
    { $inc: { seq: 1 } },
    function (err, result) {
      if (err) callback(err, result);
      callback(err, result.value.seq);
    }
  );
}
module.exports = AddCart;

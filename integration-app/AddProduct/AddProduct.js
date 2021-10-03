let mongodb = require("mongodb");
let client = mongodb.MongoClient;
const jwt = require("jsonwebtoken");
let AddProduct = require("express")
  .Router()
  .post("/", (req, res) => {
    const token = req.headers["x-access-token"];
    if (!token) {
      return res.status(403).send({
        addProduct: "A token is required for authentication",
      });
    } else {
      try {
        console.log(token);
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

                      //add product
                      getNextSequence(
                        db,
                        "productDetailId",
                        function (err, result) {
                          console.log("err" + err);
                          console.log("result" + result);
                          if (!err) {
                            db.collection("productDetails").insertOne(
                              {
                                _id: result,
                                productName: req.body.productName,
                                productId: req.body.productId,
                                productImage: req.body.productImage,
                                productPrice: req.body.productPrice,
                                productDescription: req.body.productDescription,
                              },
                              (err, result) => {
                                if (err) throw err;
                                else {
                                  // console.log(result.insertedId);
                                  console.log(result.ops[0]._id);
                                  res.send({
                                    addProduct: "success",
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
                });

              ////
            }
          }
        );
      } catch (err) {
        return res.status(401).send({
          addProduct: "Invalid token",
        });
      }
    }
  });
function getNextSequence(db, name, callback) {
  db.collection("productCounter").findAndModify(
    { _id: name },
    null,
    { $inc: { seq: 1 } },
    function (err, result) {
      if (err) callback(err, result);
      callback(err, result.value.seq);
    }
  );
}
module.exports = AddProduct;

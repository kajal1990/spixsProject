let mongodb = require("mongodb");
let client = mongodb.MongoClient;
let Registration = require("express")
  .Router()
  .post("/", (req, res) => {
    client.connect("mongodb://localhost:27017/shoppingCart", (err, db) => {
      if (err) throw err;
      else {
        db.collection("userDetails")
          .find({ userEmail: req.body.email })
          .toArray((err, array) => {
            if (err) throw err;
            else {
              var userList = array;
              if (userList.length > 0) {
                console.log(userList);
                res.send({ registration: "failed" });
              } else {
                console.log(userList);
                getNextSequence(db, "userid", function (err, result) {
                  if (!err) {
                    console.log("the output is" + result);
                    db.collection("userDetails").insert(
                      {
                        _id: result,
                        userName: req.body.userName,
                        userEmail: req.body.userEmail,
                        userPassword: req.body.userPassword,
                      },
                      //database name userName
                      (err, result) => {
                        if (err) throw err;
                        else {
                          res.send({ registration: "success" });
                        }
                      }
                    );
                  }
                });
              }
            }
          });
      }
    });
  });
function getNextSequence(db, name, callback) {
  db.collection("counters").findAndModify(
    { _id: name },
    null,
    { $inc: { seq: 1 } },
    function (err, result) {
      if (err) callback(err, result);
      callback(err, result.value.seq);
    }
  );
}
module.exports = Registration;

//
//
//
//
//
//
//
//
//
//
//
//
//
//
// let mongodb = require("mongodb");
// let client = mongodb.MongoClient;
// let Registration = require("express")
//   .Router()
//   .post("/", (req, res) => {
//     client.connect("mongodb://localhost:27017/shoppingCart", (err, db) => {
//       if (err) throw err;
//       else {
//         db.collection("userDetails")
//           .find({ userEmail: req.body.email })
//           .toArray((err, array) => {
//             if (err) throw err;
//             else {
//               var userList = array;
//               if (userList.length > 0) {
//                 console.log(userList);
//                 res.send({ registration: "failed" });
//               } else {
//                 console.log(userList);
//                 db.collection("userDetails").insertOne(
//                   {
//                     userName: req.body.name,
//                     userEmail: req.body.email,
//                     userPassword: req.body.password,
//                   },
//                   //database name userName
//                   (err, result) => {
//                     if (err) throw err;
//                     else {
//                       res.send({ registration: "success" });
//                     }
//                   }
//                 );
//               }
//             }
//           });
//       }
//     });
//   });
// module.exports = Registration;

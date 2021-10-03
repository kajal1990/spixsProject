let express = require("express");
let app = express();
let cors = require("cors");
let bodyparser = require("body-parser");
app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

app.use("/registration", require("./Registration/Registration"));
app.use("/editproduct", require("./Edit/Edit"));
app.use("/deleteProduct", require("./deleteproduct/deleteproduct"));
app.use("/login", require("./login/login"));
app.use("/addProduct", require("./AddProduct/AddProduct"));

app.use("/editCart", require("./EditCart/EditCart"));
app.use("/deletcart", require("./DeleteCartProd/DeleteCartProd"));
app.use("/addcart", require("./AddCart/AddCart"));

app.listen(8080);
console.log("server listening the port no.8080");

//this file used to generate the token by using jwt-simple module

//require() function used to import the modules in nodejs
let jwt = require("jwt-simple");

let getnerateToken = (data, password) => {
  return jwt.encode(data, password);
};
// let decryptToken = (data, password) => {
//   return jwt.decode(data, password);
// };
module.exports = getnerateToken;
// module.exports = decryptToken;

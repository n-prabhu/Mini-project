const Mongoose = require("mongoose");
const db = {};

db.mongoose = Mongoose;
db.users = require("./userAccountModel")(Mongoose);

module.exports = db;
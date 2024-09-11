var DataTypes = require("sequelize").DataTypes;
var _login = require("./login");
var _users = require("./users");
var _tikets = require("./Tickets");

function initModels(sequelize) {
  var login = _login(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);
  var tikets = _tikets(sequelize, DataTypes);


  return {
    login,
    users,
    tikets,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;

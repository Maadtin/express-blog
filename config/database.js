const Sequelize = require("sequelize");
const db = new Sequelize("blog", "root", "", {
  dialect: "mysql",
  operatorsAliases: false
});

module.exports = {
  Sequelize,
  db
};

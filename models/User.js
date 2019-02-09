const { Sequelize, db } = require("../config/database");

const User = db.define("user", {
  nombre: {
    type: Sequelize.STRING,
    required: true
  },
  email: {
    type: Sequelize.STRING,
    required: true
  },
  password: {
    type: Sequelize.STRING,
    required: true
  }
});

module.exports = User;

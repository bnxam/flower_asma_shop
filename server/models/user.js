const { DataTypes } = require("sequelize");
const sequelize = require("./config");

const User=sequelize.define('User', {
    
  login:{
    type:DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password:{
    type:DataTypes.STRING,
    allowNull:false,
  },
  nomUser:{
    type:DataTypes.STRING,
    allowNull:false,
  }
});
module.exports = User;

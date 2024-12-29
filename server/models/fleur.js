const { DataTypes } = require("sequelize");
const sequelize = require("./config");

const Fleur = sequelize.define("Fleur", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nom: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descr: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING, // Type pour les chemins ou URLs d'images
    allowNull: true,
  },
  prix: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
});

module.exports = Fleur;

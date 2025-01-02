const Bouquet = require('./bouquet');
const Fleur = require('./fleur');
const User = require('./user');
const sequelize=require('./config');
const { DataTypes }=require('sequelize');

// Relation: Fleur dans un Bouquet (plusieurs genres de fleurs avec une quantité)
const BouquetFleur = sequelize.define('BouquetFleur', {
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

Bouquet.belongsToMany(Fleur, { through: BouquetFleur });
Fleur.belongsToMany(Bouquet, { through: BouquetFleur });

// Relation: User peut liker des Bouquets
User.belongsToMany(Bouquet, { through: 'Likes' });
Bouquet.belongsToMany(User, { through: 'Likes' });  

// Relation: Transactions
const Achat = sequelize.define('Achat', {
  date: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
});

User.hasMany(Achat);
Achat.belongsTo(User);
 
Achat.belongsToMany(Bouquet, { through: 'AchatBouquets' });
Bouquet.belongsToMany(Achat, { through: 'AchatBouquets' });

module.exports = { Bouquet, Fleur, User, BouquetFleur, Achat  };

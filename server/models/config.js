const { Sequelize } = require('sequelize');
 
// Configuration de la base de données SQLite
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite',
});
sequelize.sync({ force: false })  // `force: false` pour ne pas supprimer les données existantes
  .then(() => {
    console.log('La base de données est synchronisée');
  })
  .catch((error) => {
    console.error('Erreur lors de la synchronisation de la base de données:', error);
  });
module.exports = sequelize;

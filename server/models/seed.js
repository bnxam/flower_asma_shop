const { Bouquet, Fleur, User} = require('./indexdb');
const sequelize =require('./config');

async function seedDatabase() {
  await sequelize.sync({ force: true }); 

  // Utilisateurs
  await User.findOrCreate({
    where: { login: 'asma@gmail.com' },
    defaults: { password: 'asma2002', nomUser: 'asma' },
  });
  await User.findOrCreate({
    where: { login: 'sissi@gmail.com' },
    defaults: { password: 'sissi2003', nomUser: 'sissi' },
  });

  // Fleurs
  const rose = await Fleur.findOrCreate({
    where: { nom: 'Rose' },
    defaults: { 
      descr: 'Symbole de passion, avec des couleurs variées pour chaque émotion.', 
      prix: 90.00, 
      image: '/assets/f1.jpg' 
    },
  });
  
  const tulipe = await Fleur.findOrCreate({
    where: { nom: 'Tulipe' },
    defaults: { 
      descr: 'Élégante fleur de printemps, symbole de renouveau et de déclaration d\'amour.', 
      prix: 200.00, 
      image: '/assets/f2.jpg' 
    },
  });
  
  const lys = await Fleur.findOrCreate({
    where: { nom: 'Lys' },
    defaults: { 
      descr: 'Fleur majestueuse et parfumée, associée à la pureté et à la royauté.', 
      prix: 200.00, 
      image: '/assets/f3.jpg' 
    },
  });
  
  const orchidee = await Fleur.findOrCreate({
    where: { nom: 'Orchidée' },
    defaults: { 
      descr: 'Exotique et sophistiquée, elle incarne le luxe et la rareté.', 
      prix: 170.00, 
      image: '/assets/f4.jpg' 
    },
  });
  
  const marguerite = await Fleur.findOrCreate({
    where: { nom: 'Marguerite' },
    defaults: { 
      descr: 'Simple et fraîche, symbole d\'innocence et d\'amitié.', 
      prix: 150.00, 
      image: '/assets/f5.jpg' 
    },
  });
  
  const jasmin = await Fleur.findOrCreate({
    where: { nom: 'Jasmin' },
    defaults: { 
      descr: 'Fleur parfumée, évocatrice de sensualité et de sérénité.', 
      prix: 100.00, 
      image: '/assets/f6.jpg' 
    },
  });
  const bouquet1 = await Bouquet.findOrCreate({
    where: { nom: 'Bouquet de Tunis' },
    defaults: {
      descr: 'Un dosage parfait de jasmins et de tulipes, des couleurs éclatantes et du soleil toute l’année chez vous',
      image: '/assets/b1.jpg',
      prix: 1500.00,
      liked: false,
      nblikes : 2 ,
    },
  });
  
  const bouquet2 = await Bouquet.findOrCreate({
    where: { nom: 'Bouquet d’Alger' },
    defaults: {
      descr: 'Un mélange merveilleux de jasmins et de senteurs méditerranéennes, des odeurs éclatantes pour égayer votre bureau',
      image: '/assets/b2.jpg',
      prix: 2000.00,
      liked: false,
      nblikes : 0 ,
    },
  });
  
  const bouquet3 = await Bouquet.findOrCreate({
    where: { nom: 'Bouquet d’Oran' },
    defaults: {
      descr: 'Un mélange merveilleux de roses et de lys, des odeurs et des couleurs',
      image: '/assets/b3.jpg',
      prix: 2000.00,
      liked: false,
      nblikes : 0 ,
    },
  });
  

 


  // Relation fleurs-bouquets
  await bouquet1[0].addFleur(rose[0], { through: { quantity: 10 } });
  await bouquet1[0].addFleur(tulipe[0], { through: { quantity: 5 } });
  await bouquet1[0].addFleur(lys[0], { through: { quantity: 30} });
  await bouquet2[0].addFleur(jasmin[0], { through: { quantity: 20} });
  await bouquet2[0].addFleur(marguerite[0], { through: { quantity: 3 } });
  await bouquet2[0].addFleur(tulipe[0], { through: { quantity: 10 } });
  await bouquet3[0].addFleur(orchidee[0], { through: { quantity: 25} });
  await bouquet3[0].addFleur(tulipe[0], { through: { quantity: 8 } });
  await bouquet3[0].addFleur(marguerite[0], { through: { quantity: 23} });
  

  console.log('Database seeded successfully!');
}

module.exports = seedDatabase;

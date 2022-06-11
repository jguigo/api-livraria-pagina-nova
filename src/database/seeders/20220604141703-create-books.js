"use strict";

module.exports = {
   async up(queryInterface, Sequelize) {
      await queryInterface.bulkInsert(
         "Books",
         [
            {
              title:'Meu deus meu senhor me ajuda pff',
              edition_year:2022,
              author:'Guilherme',
              pages: 220,
              stock: 100,
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              title:'Meu deus meu senhor me ajuda pff2',
              edition_year:2022,
              author:'Guilherme',
              pages: 220,
              stock: 100,
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              title:'Meu deus meu senhor me ajuda pff3',
              edition_year:2022,
              author:'Guilherme',
              pages: 220,
              stock: 100,
              createdAt: new Date(),
              updatedAt: new Date()
            },
         ],
         {}
      );
   },

   async down(queryInterface, Sequelize) {
      await queryInterface.bulkDelete("Books", null, {});
   },
};

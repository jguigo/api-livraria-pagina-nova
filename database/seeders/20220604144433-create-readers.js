"use strict";

module.exports = {
   async up(queryInterface, Sequelize) {
      await queryInterface.bulkInsert(
         "People",
         [
            {
   
name: 'Guilherme Melo',
email:'email@emaail.com',
password:'a1a3a1a2a3a2a1a3',
createdAt: new Date(),
updatedAt: new Date(),
            },
         ],
         {}
      );
   },

   async down(queryInterface, Sequelize) {
      await queryInterface.bulkDelete("People", null, {});
   },
};

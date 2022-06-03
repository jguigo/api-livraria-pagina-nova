"use strict";

module.exports = {
   async up(queryInterface, Sequelize) {
      await queryInterface.bulkInsert(
         "Readers",
         [
            {
              name: 'Seeders Seed',
              email:'seeders@seed.com',
              password: 'seedseedseed',
              createdAt: new Date(),
              updatedAt: new Date()
            },
         ],
         {}
      );
   },

   async down(queryInterface, Sequelize) {
      await queryInterface.bulkDelete("Readers", null, {});
   },
};

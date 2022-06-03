'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
     await queryInterface.bulkInsert(
        "Books",
        [
           {
            title: 'Seed, the story',
            edition_year: 2022,
            author: 'Seeders Seed',
            pages: 221,
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

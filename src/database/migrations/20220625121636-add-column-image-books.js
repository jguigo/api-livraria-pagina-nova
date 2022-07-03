"use strict";

module.exports = {
   async up(queryInterface, Sequelize) {
      await queryInterface.addColumn("books", "image", {
         type: Sequelize.STRING(500),
      });
   },

   async down(queryInterface, Sequelize) {
      await queryInterface.removeColumn("books", "image");
   },
};

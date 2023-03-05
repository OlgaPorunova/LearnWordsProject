/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Themes', [{
      tittle: 'Sport',
      createdAt: new Date(),
      updatedAt: new Date(),

    },

    {
      tittle: 'Food',
      createdAt: new Date(),
      updatedAt: new Date(),

    },
    {
      tittle: 'Transport',
      createdAt: new Date(),
      updatedAt: new Date(),

    },

    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Themes', null, {});
  },
};

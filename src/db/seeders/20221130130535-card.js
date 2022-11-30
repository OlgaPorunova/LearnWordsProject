/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Cards', [{
      ruName: 'Шахматы',
      enName: 'Chess',
      link: '/sport/153867-serveware-igry_v_pomeshhenii_i_sporta-shahmaty-otdyx-temnota-1920x1080 (1).jpg',
      userId: null,
      themeId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),

    },

    {
      ruName: 'Мяч',
      enName: 'Ball',
      link: '/sport/136028-myach-komandnyj_vid_sporta-basketbol-basketbol_kolledzha-zanyatie_sportom-1920x1080.jpg',
      userId: null,
      themeId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),

    },
    {
      ruName: 'Лыжи',
      enName: 'Ski',
      link: '/sport/136212-zanyatie_sportom-lyzhnik-lyzhnya-dvoebore-lyzhi-1920x1080.jpg',
      userId: null,
      themeId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),

    },

    {
      ruName: 'Клубника',
      enName: 'Strawberry',
      link: '/food/129862-frukty-zavod-pishha-fruktovyj_salat-prirodnye_produkty-1920x1080.jpg',
      userId: null,
      themeId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),

    },

    {
      ruName: 'Яблоко',
      enName: 'Apple',
      link: '/food/146803-derevo-boyaryshnik-tsvetok-cvetkovoe_rastenie-frukty-1920x1080.jpg',
      userId: null,
      themeId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),

    },

    {
      ruName: 'Пицца',
      enName: 'Pizza',
      link: '/food/4674-restoran-pishha-picca-vynut-evropejskaya_kuhnya-1920x1080.jpg',
      userId: null,
      themeId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),

    },

    {
      ruName: 'Автобус',
      enName: 'Bus',
      link: '/transport/89360-stolica-big_ben-ulica-gorod-avtobus-1920x1080.jpg',
      userId: null,
      themeId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),

    },
    {
      ruName: 'Самолет',
      enName: 'Plane',
      link: '/transport/24842-avialajner-aerobus-boeing_777-samolet-aviaciya-1920x1080.jpg',
      userId: null,
      themeId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),

    },
    {
      ruName: 'Грузовик',
      enName: 'Truck',
      link: '/transport/1572-avtomobilnyj_dizajn-napitok-gazirovannyye_bezalkogolnyye_napitki-kommunalnoe_predpriyatie-gruzovik-1920x1080.jpg',
      userId: null,
      themeId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),

    },

    ], {});

    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Cards', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};

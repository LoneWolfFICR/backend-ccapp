module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.addColumn('evento', 'status', {
      type: Sequelize.BOOLEAN,
      defaultValue: 0,
      allowNull: true,
    });
  },

  async down(queryInterface) {
    return queryInterface.removeColumn('evento', 'status');
  },
};

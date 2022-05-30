module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.addColumn('usuario', 'sys_admin', {
      type: Sequelize.BOOLEAN,
      defaultValue: 0,
      allowNull: true,
    });
  },

  async down(queryInterface) {
    return queryInterface.removeColumn('usuario', 'sys_admin');
  },
};

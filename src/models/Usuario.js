const { Model, DataTypes } = require('sequelize');

class Usuario extends Model {
  static init(sequelize) {
    super.init({
      nome: DataTypes.STRING,
      email: DataTypes.STRING,
      senha: DataTypes.STRING,
      token: DataTypes.STRING,
      is_admin: DataTypes.BOOLEAN,
      sys_admin: DataTypes.BOOLEAN,
    }, {
      sequelize,
      freezeTableName: true,
      tableName: 'usuario',
      createdAt: true,
      updatedAt: true,
    });
  }
}

module.exports = Usuario;

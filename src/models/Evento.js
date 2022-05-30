const { Model, DataTypes } = require('sequelize');

class Evento extends Model {
  static init(sequelize) {
    super.init({
      titulo: DataTypes.STRING,
      descricao: DataTypes.STRING,
      local: DataTypes.STRING,
      media: DataTypes.STRING,
      status: DataTypes.BOOLEAN,
    }, {
      sequelize,
      freezeTableName: true,
      tableName: 'evento',
      createdAt: true,
      updatedAt: true,
    });
  }

  static associate(models) {
    this.belongsTo(models.Usuario, {
      foreignKey: 'id_usuario',
      as: 'usuario',
    });
  }
}

module.exports = Evento;

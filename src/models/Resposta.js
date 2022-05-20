const { Model, DataTypes } = require('sequelize');

class Resposta extends Model {
  static init(sequelize) {
    super.init({
      descricao: DataTypes.STRING,
      media: DataTypes.STRING,
    }, {
      sequelize,
      freezeTableName: true,
      tableName: 'resposta',
      createdAt: true,
      updatedAt: true,
    });
  }

  static associate(models) {
    this.belongsTo(models.Evento, {
      foreignKey: 'id_evento',
      as: 'evento',
    });
    this.belongsTo(models.Usuario, {
      foreignKey: 'id_usuario',
      as: 'usuario',
    });
  }
}

module.exports = Resposta;

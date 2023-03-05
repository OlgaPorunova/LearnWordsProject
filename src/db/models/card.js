const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Card extends Model {
    static associate(models) {
      this.belongsTo(models.User, {
        foreignKey: 'userId',
      });
      this.belongsTo(models.Theme, {
        foreignKey: 'themeId',
      });
    }
  }
  Card.init({
    ruName: DataTypes.STRING,
    enName: DataTypes.STRING,
    link: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    themeId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Card',
  });
  return Card;
};

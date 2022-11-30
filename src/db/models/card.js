const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Card extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User, {
        foreignKey: 'userId',
      });
      this.belongsTo(models.Theme, {
        foreignKey: 'themeId',
      });
      // define association here
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

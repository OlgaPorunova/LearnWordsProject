const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Score extends Model {
    static associate(models) {
      this.belongsTo(models.User, {
        foreignKey: 'userId',
      });
      this.belongsTo(models.Theme, {
        foreignKey: 'themeId',
      });
    }
  }
  Score.init({
    count: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    themeId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Score',
  });
  return Score;
};

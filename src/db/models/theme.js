const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Theme extends Model {
    static associate(models) {
      this.hasMany(models.Card, {
        foreignKey: 'themeId',
      });
      this.hasMany(models.Score, {
        foreignKey: 'themeId',
      });
    }
  }
  Theme.init({
    tittle: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Theme',
  });
  return Theme;
};

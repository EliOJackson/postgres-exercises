'use strict';
module.exports = (sequelize, DataTypes) => {
  var Tool = sequelize.define('Tool', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    tool_rating: DataTypes.INTEGER
  }, { tableName: "tools", timestamps: false});
  Tool.associate = function(models) {
    Tool.belongsToMany(models.Castle, {
      as: 'Tool Used',
      through: 'castle_tools'
    });
  };
  return Tool;
};
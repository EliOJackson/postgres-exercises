'use strict';
module.exports = (sequelize, DataTypes) => {
  var Castle = sequelize.define('Castle', {
    description: DataTypes.STRING
  }, { tableName: "castles", timestamps: false});
  Castle.associate = function(models) {
    Castle.belongsTo(models.Beach, {
      foreignKey: "beach_id",
      onDelete: "CASCADE"
    });
    Castle.belongsToMany(models.Tool, {
      through: 'castle_tools'
    })
  };
  return Castle;
};
'use strict';
module.exports = (sequelize, DataTypes) => {
  var Beach = sequelize.define('Beach', {
    name: DataTypes.STRING,
    location: DataTypes.STRING,
    sand_rating: DataTypes.INTEGER
  }, {});
  Beach.associate = function(models) {
    // associations can be defined here
  };
  return Beach;
};
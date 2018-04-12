'use strict';
module.exports = (sequelize, DataTypes) => {
  var Lifeguard = sequelize.define('Lifeguard', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING
  }, {});
  Lifeguard.associate = function(models) {
    // associations can be defined here
  };
  return Lifeguard;
};
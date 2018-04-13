'use strict';
module.exports = (sequelize, DataTypes) => {
  var Lifeguard = sequelize.define('Lifeguard', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING
  }, { tableName: "lifeguards", timestamps: false });
  Lifeguard.associate = function(models) {
     Lifeguard.belongsToMany(models.Beach, {
      as: "LifeguardOnDuty",
      through: "beach_lifeguards"
     })
  };
  return Lifeguard;
};
'use strict';

const express = require("express");
const bodyParser = require("body-parser");
const app = express();

module.exports = (sequelize, DataTypes) => {
  var Beach = sequelize.define('Beach', {
    name: DataTypes.STRING,
    location: DataTypes.STRING,
    sand_rating: DataTypes.INTEGER
  }, { tableName: "beaches", timestamps: false });
  Beach.associate = function(models) {
    Beach.belongsToMany(models.Lifeguard, {
      through: 'beach_lifeguards'
    });
    Beach.hasMany(models.Castle, {
      foreignKey: 'beach_id'
    });
  };
  return Beach;
};




'use strict';
module.exports = (sequelize, DataTypes) => {
  var revenue_collector = sequelize.define('revenue_collector', {
    revcollector_name: DataTypes.STRING,
    revcollector_phonenumber: DataTypes.INTEGER,
    revcollector_total_collection: DataTypes.STRING
  }, {});
  revenue_collector.associate = function(models) {
    // associations can be defined here
  };
  return revenue_collector;
};
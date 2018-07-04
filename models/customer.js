'use strict';
module.exports = (sequelize, DataTypes) => {
  var Customer = sequelize.define('Customer', {
    customer_name: DataTypes.STRING,
    customer_number: DataTypes.INTEGER,
    customer_code: DataTypes.STRING,
    customer_payment: DataTypes.STRING,
    customer_payment_total: DataTypes.STRING
  }, {});
  Customer.associate = function(models) {
    // associations can be defined here
  };
  return Customer;
};
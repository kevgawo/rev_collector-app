'use strict';
module.exports = (sequelize, DataTypes) => {
  var transactions = sequelize.define('transactions', {
    transaction_id: DataTypes.STRING,
    transaction_amount: DataTypes.STRING,
    transaction_status: DataTypes.BOOLEAN,
    revcollector_phone_number: DataTypes.INTEGER,
    customer_code: DataTypes.STRING,
    transaction_date: DataTypes.DATE
  }, {});
  transactions.associate = function(models) {
    // associations can be defined here
  };
  return transactions;
};
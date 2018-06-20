module.exports = function(sequelize, DataTypes) {
    var Customer = sequelize.define('Customer', {
      customer_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      customer_code: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      customer_payment: {
        type: DataTypes.STRING,
        allowNull: false
      },
      customer_payment_total: {
        type: DataTypes.STRING,
        allowNull: false
      },
      customer_phoneNumber: {
        type: DataTypes.STRING,
        unique: true
      }
    });
    return Customer;
  };

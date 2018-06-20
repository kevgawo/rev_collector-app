const Customer = require ('./customers')
const RevenueCollector = require ('./revenue_collector')

module.exports = function(sequelize, DataTypes) {
    var Transactions = sequelize.define('Transactions', {
      transaction_id: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
      },
       date_transacted: {
        type: DataTypes.NOW,
        allowNull: false,

      },
       amount_collected: {
        type: DataTypes.STRING,
        allowNull: false
      },
      revcollector_phoneNumber: {
        type: DataTypes.STRING,
        allowNull: false,
        foreignKey : true,
        references: {
            model: "Customer",
            key:"revcollector_phoneNumber"
        }

      },
      customer_phoneNumber: {
        type: DataTypes.STRING,
        unique: true,
        foreignKey: true,
        references: {
            model: "Customer",
            key:"custpmer_code"
        }
        
      },

      customer_code:{
        type: DataTypes.STRING,
        unique: true,
        foreingKey : true,
        references: {
            model: "Customer",
            key:"custpmer_code"
        } 
     },

     transaction_status:{
        type: DataTypes.BOOLEAN,
        allowNull: false,
     },

    });
    return Transactions;
  };
module.exports = function(sequelize, DataTypes) {
    var RevCollector = sequelize.define('RevCollector', {
      revcollector_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      revcollector_total_collection: {
        type: DataTypes.STRING,
        unique: true
      },
      revcollector_phoneNumber: {
        type: DataTypes.STRING,
        unique: true
      }
    });
    return RevCollector;
  };

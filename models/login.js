/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('login', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: sequelize.fn('current_timestamp')
    },
    token: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    is_active: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    }
  }, {
    sequelize,
    timestamps: false,

    tableName: 'login'
  });
};

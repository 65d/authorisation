/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('users', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    firstname: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    secondname: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    creationdate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: sequelize.fn('current_timestamp')
    },
    right_to_validate: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: 1
    },
    email: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    password_not_hashed: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    timestamps: false,

    tableName: 'users'
  });
};

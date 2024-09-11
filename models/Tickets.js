/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Tickets', {
    ticket_id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    event_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    qr_code: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    status: {
      type: DataTypes.ENUM('generated','validated','expired'),
      allowNull: true,
      defaultValue: "generated"
    },
    purchase_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.fn('current_timestamp')
    },
    validation_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    expiration_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    seat_number: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    payment_status: {
      type: DataTypes.ENUM('pending','completed','failed'),
      allowNull: true,
      defaultValue: "pending"
    }
  }, {
    sequelize,
    tableName: 'Tickets',
    timestamps: false,
  });
};

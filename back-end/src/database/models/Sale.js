module.exports = (sequelize, DataTypes) => {
  const Sale = sequelize.define('sale', {
    userId: DataTypes.INTEGER,
    sellerId: DataTypes.INTEGER,
    totalPrice: DataTypes.DECIMAL,
    deliveryAddress: DataTypes.STRING,
    deliveryNumber: DataTypes.STRING,
    saleDate: DataTypes.DATE,
    status: DataTypes.STRING
  }, {
    timestamps: false,
    underscored: true,
  });

  Sale.associate = (models) => {
    Sale.belongsTo(models.user, {
      foreignKey: 'user_id', as: 'user'
    });
    Sale.belongsTo(models.user, {
      foreignKey: 'seller_id', as: 'seller'
    });
  }

  return Sale;
};
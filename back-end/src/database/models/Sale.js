module.exports = (sequelize, DataTypes) => {
  const Sale = sequelize.define('Sale', {
    user_id: DataTypes.INTEGER,
    seller_id: DataTypes.INTEGER,
    total_price: DataTypes.DECIMAL,
    delivery_address: DataTypes.STRING,
    delivery_number: DataTypes.STRING,
    sale_date: DataTypes.DATE,
    status: DataTypes.STRING
  }, {
    timestamps: false
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
const products  = (sequelize, DataTypes) => {
    let Products = sequelize.define('Products', {
        name: DataTypes.STRING,
        url: DataTypes.STRING,
        price: DataTypes.DECIMAL,
        purchaseurl: DataTypes.STRING,
        promocode: DataTypes.STRING,
        description: DataTypes.STRING,
    })
    Products.associate = (models) => {
        Products.belongsTo(models.Users);
    } 
    //console.log(Products);
    return Products;
}

module.exports = products;
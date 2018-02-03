const products  = (sequelize, DataTypes) => {
    let Products = sequelize.define('Products', {
        username: DataTypes.STRING,
        password: DataTypes.STRING,
        firstname: DataTypes.STRING,
        lastname: DataTypes.STRING,
        age: DataTypes.INTEGER,
    })
    /* Products.associate = () => {

    } */
    //console.log(Products);
    return Products;
}

module.exports = products;
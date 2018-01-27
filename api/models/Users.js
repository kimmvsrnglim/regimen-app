const users  = (sequelize, DataTypes) => {
    let Users = sequelize.define('Users', {
        username: DataTypes.STRING,
        password: DataTypes.STRING,
        firstname: DataTypes.STRING,
        lastname: DataTypes.STRING,
        age: DataTypes.INTEGER,
    })
    /* Users.associate = () => {

    } */
    //console.log(Users);
    return Users;
}

module.exports = users;

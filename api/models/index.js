const Sequelize = require('sequelize');
const path  = require('path');
const fs = require('fs');
const basename  = path.basename(__filename);
const config = require('./../config/db.json');

// This will loop through ./models and create and return the db instance for that model
//returning db.
let db = {};

let sequelize = new Sequelize(config.database, config.username, config.password, config);

fs.readdirSync(__dirname).filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file !== "index.js") && (file.slice(-3) === '.js');
}).forEach(file => {
    let model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
});

Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
      db[modelName].associate(db);
    }
  });
  //console.log(db);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports =  db;
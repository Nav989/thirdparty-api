const config = require('../configuration/config')
const { Sequelize,  DataTypes} = require('sequelize');
var sequelizeTransforms = require('sequelize-transforms');


const sequelize = new Sequelize(config.get('mysql.database'), config.get('mysql.username'), config.get('mysql.password'), config.get('mysql'));

sequelizeTransforms(sequelize)

sequelize.authenticate()
    .then(() => {
        console.log("My SQL Database Connection is established Successfully.");
    }).catch(err => {
        console.log("error" + err);
    })


const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.User = require('../model/schema')(sequelize, DataTypes);
db.movieData=require('../model/movieSchema')(sequelize, DataTypes);

module.exports=db
const express = require("express");
const bodyParser = require("body-parser")
const util = require('util')
// var restler = require('restler');
const config = require('./configuration/config');
const db=require('./database/mysql');
const logger= require('./utils/logger')
const route=require('./routes/index')
const app = express();


app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(express.json());


route(app);


db.sequelize.sync({
    force: false
})
.then(() => [
    logger.info(util.format('My SQL Tables Synced Successfully.'))
]).catch(err => {
    logger.error(util.format('Error While Syncing My SQL Tables. Error: %j', err))
})


app.listen(process.env.PORT || config.get('server.port'), () => {
    logger.info(util.format('BASE NODE API Server with pid: %s listening on port: %s', process.pid, config.get('server.port')))
    logger.info(util.format('Environment: %s', config.get('env')))
})



const mongoose = require("mongoose");

const app = require("./app");
const config = require("./config/config");
const winston = require("winston");
const logConfiguration= {
    transports : [new winston.transports.Console()]
}

const logger = winston.createLogger(logConfiguration);



mongoose.connect(config.mongoose.url, config.mongoose.options).then(resp  => {
    logger.info("Data Base connected at:" + config.mongoose.url)
    app.listen(config.port, ()=>{
        logger.info("Backend started at port: " + config.port)
    })
}).catch(err=>{
    logger.info("something went wrong", err)
})
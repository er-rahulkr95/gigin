const dotenv = require("dotenv");
const path =  require("path");
const Joi = require("joi");

dotenv.config({path: path.join(__dirname, "../../.env")});

const envVarSchema = Joi.object().keys({
    NODE_ENV: Joi.string().valid("production", "development", "test").required(),
    PORT:Joi.number().default(3000),
    MONGODB_URL: Joi.string().required(),
}).unknown()

const {value: envVars, error} = envVarSchema.prefs({errors:{label:"key"}}).validate(process.env);
if(error){
    throw new Error('config validation error'+ error.message);
}

module.exports = {
    env: envVars.NODE_ENV,
    port: envVars.PORT,
    mongoose:{
        url: envVars.MONGODB_URL + (envVars.NODE_ENV === 'test' ? "test":""),
        options:{
            useNewUrlParser :true,
            useUnifiedTopology: true
        }
    }
}
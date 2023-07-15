
const mongoose = require("mongoose")


const authorSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
        trim:true,
    },
    name:{
        type: String,
        required:true,
        trim:true,
    },
    phoneNumber:{
        type: Number,
        required: true,
        maxLength:10,
    },
    birthDate :{
        type:Date,
    },
    deathDate:{
        type:Date,
    }
   
},{
    timestamps:true
})



const Author = mongoose.model("authors", authorSchema);

module.exports =  Author;

const mongoose = require("mongoose")
const {ObjecId} = mongoose.Schema

const categorySchema = new mongoose.Schema({
    category: {type: String, required:true}
})

const bookCatalogSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
        trim:true,
    },
    authorId:{
        type: ObjecId,
        ref: "authors"
    },
    publisher:{
        type: String,
        required: true,
        trim:true,
    },
    publishDate :{
        type:Date,
    },
    category:[{type: categorySchema}],
    price: {type: Number, required:true},
    soldCount: { type:Number}
},{
    timestamps:true
})



const bookCatalog = mongoose.model("bookCatlogs", bookCatalogSchema);

module.exports =  bookCatalog;
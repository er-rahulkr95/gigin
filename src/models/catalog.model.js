
const mongoose = require("mongoose")
const { ObjectId } = mongoose.Schema;

// const categorySchema = new mongoose.Schema({
//     category: {type: String, required:true}
// })

const bookCatalogSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
        trim:true,
    },
    authorId:{
        type: ObjectId,
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
    category:[{type: String, required:true}],
    price: {type: Number, required:true},
    soldCount: { type:Number, default:0}
},{
    timestamps:true
})



const bookCatalog = mongoose.model("bookCatlogs", bookCatalogSchema);

module.exports =  bookCatalog;
const Author = require("../models/author.model");



class AuthorService {
    createAuthor = async(authorDetails)=>{
        try {
            const authorCreate = new Author(authorDetails);
            const newAuthor = await authorCreate.save();
            return newAuthor
        } catch (error) {
            throw new Error("Cannot create author entity")
        }
    }


    allAuthors = async()=>{
        try {
            const authors = await Author.find({});
            return authors
        } catch (error) {
            throw new Error("not found author entity")
        }
    }
}


module.exports = AuthorService
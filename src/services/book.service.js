const BookCatalog = require("../models/catalog.model");



class BookCatalogService {
    createCatalog = async(bookDetails)=>{
        try {
            const bookCreate = new Author(bookDetails);
            const newbook = await bookCreate.save();
            return newbook
        } catch (error) {
            throw new Error("Cannot create book entity")
        }
    };

    allCategory = async(bookId) => {
       try {
        const category = await BookCatalog.find({_id:bookId},{category:1})
        return category
       } catch (error) {
        throw new Error("Cannot create book entity")
       }
    };

    categoryList = async()=>{
        try {
            const category = await BookCatalog.distinct("category")
            return category
        } catch (error) {
            throw new Error("Cannot create book entity")
            
        }
    }

    catalogSearch = async(searchTerm)=>{
        try {
            
            const searchResult = await BookCatalog.find({}).populate("authorId").or([{title:{$regex:searchTerm, $options: 'i'}}, {'authorId.name':{$regex:searchTerm, $options: 'i'}}])
            return searchResult
        } catch (error) {
            throw new Error("Cannot search book or author")
            
        }
    }
}




module.exports = BookCatalogService;
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

}




module.exports = BookCatalogService;
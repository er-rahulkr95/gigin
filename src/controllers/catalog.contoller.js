const Catalog = require("../services/book.service");
const CatalogServiceInstance = new Catalog();


const addCatalog = async(req, res)=>{
        try {

            const catalogAdd = await CatalogServiceInstance.createCatalog(req.body);
            if(catalogAdd){
                res.status(201).send({message: "catalog Created success", success:true})
            }else{
                res.status(500).send({message: "catalog not Created ", success:false})
            }
            
        } catch (error) {
            throw new Error(" Cannot Create catalog", {cause:error})
        }
}

const listOfCategory = async(req,res)=>{
    try {
        const {bookId} = req.params;
        const categories = await  CatalogServiceInstance.allCategory(bookId)
        if(categories.length){
            res.status(200).send({message: "categories fetched success", success:true,  data:categories})
        }else{
            res.status(404).send({message: "categories Not Found", success:false})

        }
    } catch (error) {
        throw new Error(" Cannot fetch categories", {cause:error})
    }
}

const allCategoryList = async(req,res)=>{
    try {
        
        const categories = await CatalogServiceInstance.categoryList();
        if(categories.length){
            res.status(200).send({message: "categories fetched success", success:true,  data:categories})
        }else{
            res.status(404).send({message: "categories Not Found", success:false})
        }

    } catch (error) {
        throw new Error(" Cannot fetch all categories",{cause:error})
        
    }
}


const searchCatalog = async(req,res) =>{
    try {
        const searchTerm = req.query.term
        const searchResult = await CatalogServiceInstance.catalogSearch(searchTerm);
        if(searchResult.length){
            res.status(200).send({message: "Book catalog record found", success:true,  data:searchResult})
        }else{
            res.status(404).send({message: "Book catalog record Not Found", success:false})
        }
    } catch (error) {
        throw new Error(" Cannot search",{cause:error})
        
    }
}

const getMostSoldBookInCategory = async(req,res)=>{
    try {
        const mostSoldBook = await CatalogServiceInstance.mostSoldBookByCategory(req.body.category)
        if(searchResult){
            res.status(200).send({message: "Most sold book found", success:true,  data:mostSoldBook})
        }else{
            res.status(404).send({message: "Most sold book not found", success:false})
        }
    } catch (error) {
        throw new Error(" Cannot find book", {cause:error})
        
    }
}

module.exports  = {addCatalog, listOfCategory, allCategoryList, searchCatalog, getMostSoldBookInCategory}
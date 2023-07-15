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
            throw new Error(" Cannot Create catalog", error)
        }
}

const listOfCategory = async(req,res)=>{
    try {
        const {bookId} = req.params;
        const categories = await  CatalogServiceInstance.allCategory(bookId)
        if(categories.length){
            res.status(200).send({message: "categories fetched success", success:true,  data:categories})
        }else{
            res.status(500).send({message: "categories Not Found", success:false})

        }
    } catch (error) {
        throw new Error(" Cannot fetch categories", error)
    }
}




module.exports  = {addCatalog, listOfCategory}
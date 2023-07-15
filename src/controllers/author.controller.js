const Author = require("../services/author.service");
const AuthorServiceInstance = new Author();


const addAuthor = async(req, res)=>{
        try {

            const authorAdd = await AuthorServiceInstance.createAuthor(req.body);
            if(authorAdd){
                res.status(201).send({message: "Author Created success", success:true})
            }else{
                res.status(500).send({message: "Author not Created ", success:false})
            }
            
        } catch (error) {
            throw new Error(" Cannot Create author", error)
        }

}


const authorsList = async(req,res)=>{
    try {

        const authors = await AuthorServiceInstance.allAuthors();
        if(authors.length){
            res.status(200).send({message: "authors fetched success", success:true,  data:authors})
        }else{
            res.status(500).send({message: "Author not fetched ", success:false})
        }
        
    } catch (error) {
        throw new Error(" Cannot fetch author", error)
    }
}

module.exports = {addAuthor,authorsList};
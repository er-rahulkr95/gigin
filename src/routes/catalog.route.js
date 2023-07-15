const router = require("express").router;
const {addAuthor, authorsList} = require("../controllers/author.controller")
const {addCatalog, listOfCategory} = require("../controllers/catalog.contoller")




router.post("/author/add", addAuthor)

router.post("/catalog/add", addCatalog)

router.get("/author/all",authorsList)

router.get("/catalog/:bookId/category",listOfCategory )


module.exports = router;
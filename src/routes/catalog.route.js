const router = require("express").Router();
const {addAuthor, authorsList} = require("../controllers/author.controller")
const {addCatalog, listOfCategory,allCategoryList, searchCatalog} = require("../controllers/catalog.contoller")




router.post("author/add", addAuthor)

router.post("catalog/add", addCatalog)

router.get("author/all",authorsList)

router.get("catalog/:bookId/category",listOfCategory )

router.get("catalog/allCategory", allCategoryList)

// GET request "{{url}}/catalog/search?term=tilte'"
router.get("catalog/search", searchCatalog)

module.exports = router;
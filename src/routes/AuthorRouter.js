const AuthorRouter = require("express").Router()
const AuthorController = require("../controller/AuthorController");

AuthorRouter.get("/author", AuthorController.getAuthor);

AuthorRouter.post("/newAuthor", AuthorController.createAuthor)





module.exports = AuthorRouter;

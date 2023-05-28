const express = require("express");
const Author = require("../models/Author");
const AuthorRouter = express.Router();

//Create
AuthorRouter.post("/author", async (req, res) => {
    try {
        const {name, surname, age} = req.body;
        if(!name || !surname || !age){
            return res.status(400).send({
                success: false,
                message: "Faltan datos por completar"
            })
        }

        let author = new Author({
            name,
            surname,
            age
        });

        await author.save();
        return res.status(200).send({
            success:true,
            message:"Autor creado correctamente.!!!",
            author,
        })
    } catch (error) {
        return res.status(500).send({
            success:false,
            message: error.message
        });

    }
});

//Read
AuthorRouter.get("/", async (req, res) =>{ // read
    let authors = await Author.find({})
    return res.status(200).send({
        success:true,
        authors,
    });
});

//Update
AuthorRouter.put("/update/:id", async(req, res) => {
    const {id} = req.params
    const {age} = req.body

    let author = await Author.findOneAndUpdate(id,{age})
    res.status(200).send({
        success:true,
        message:"El autor fue modificado.!",
        author
    });
});

//Delete
AuthorRouter.delete("/delete/:id", async(req, res)=>{
    try {
        const {id} = req.params
        await Author.findByIdAndDelete(id)
        res.status(200).send({
            success:true,
            message: "Autor eliminado.!"
        });
    } catch (error) {
        res.status(500).send({
            success:false,
            message:error.message
        })
    }
});



module.exports = AuthorRouter;
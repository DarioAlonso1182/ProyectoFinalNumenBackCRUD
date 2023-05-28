const express = require("express");
const logMiddlewares = require('./src/utils/middlewares/logMiddlewares'); 
const mongoose = require("mongoose");
const getExampleService = require("./src/server/exampleService");
const getPriceExample = require("./src/controller/exampleController");
const app = express();
require("dotenv").config();


//const AuthorRouter = require("./src/router/AuthorRouter");
//const BookRouter = require("./src/router/BookRouter");
//const BookRouter = require("./src/router/AuthorRouter");

app.use(express.json({extended: true}))

app.use(express.urlencoded());

// Aca va el Middleware propio.
app.use(logMiddlewares); 
app.get('/',(req,res) =>{
    res.send('Servidor Funcionando Correctamente');
});

app.use(async (req, res, next) => { 
    const response = await axios.get('https://criptoya.com/api/dolar');
    console.log(`El libro más barato cuesta ${response.data.blue}`)
    next();
}); 


// Enrutado
//app.use("/api", AuthorRouter);
//app.use("/api", BookRouter)
app.use("/api", getExampleService);
app.use("/api", getPriceExample);

app.use("/api", require("./src/routes/AuthorRouter"));

//Conexión a Base de Datos.!

const DATABASE = process.env.DATABASE_URL || "";

(async () => {
    try {
        await mongoose.connect(DATABASE);
        console.log("Base de datos conectada :)");
    }   catch (error) {
        console.log(error);
    }
})();
    


app.listen(5000, () => {
    console.log("Servidor funcionando en el puerto 5000");
});


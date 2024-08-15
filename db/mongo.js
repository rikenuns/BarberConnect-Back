//renomeando arquivo que vai se conectar com a node_modules 
//required = importar uma lib(arquivo da biblioteca) da node mudules
const mongoose = require("mongoose");

async function mongoDB() {
   try {
        await mongoose.connect(process.env.mongo )
        console.log("MongoDB conectado!")
    
   } catch (error) {
    console.error("deu merda",error)
   }
}

module.exports= mongoDB //importando a funcão feita acima
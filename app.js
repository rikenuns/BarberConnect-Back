require("dotenv").config();
const express = require("express")

const app = express()

app.use(express.json())

app.get("/deivid",(req,res)=>{
    res.send("Hello World")

})

app.listen(process.env.port,()=>{
    
    console.log("CONECTADO: http://localhost:5000")
 
})




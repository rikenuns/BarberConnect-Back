const express  = require("express")
const { validate } = require("../schema/schema")
const router = express.Router()

//rota para criação de usuário ↓	

router.post('/register' ,ValidationUser , Check ,createUser)

//rota para login de usuário

router.post('/login', LoginUser)

module.exports = router
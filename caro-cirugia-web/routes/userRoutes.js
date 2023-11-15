const express = require("express")
const Router  = express.Router()

const userController = require("../controllers/userController")
Router.get("/", userController.login)

Router.post("/login", userController.storeUser)

module.exports = Router
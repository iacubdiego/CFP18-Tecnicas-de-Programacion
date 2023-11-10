const express = require("express")
const Router  = express.Router()

const userController = require("../controllers/userController")
Router.get("/", userController.login)

module.exports = Router
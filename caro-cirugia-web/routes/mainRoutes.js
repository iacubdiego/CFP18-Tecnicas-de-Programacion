const express = require("express")
const Router  = express.Router()

const mainController = require("../controllers/mainController")

Router.get("/", mainController.index)
Router.get("/about", mainController.about)
Router.get("/gallery", mainController.gallery)


module.exports = Router
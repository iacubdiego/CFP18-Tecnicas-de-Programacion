const express = require("express")
const Router  = express.Router()

const reseniasController = require("../controllers/reseniasController")
Router.get("/", reseniasController.index)

module.exports = Router
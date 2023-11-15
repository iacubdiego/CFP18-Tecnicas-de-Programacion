const express = require("express")
const Router  = express.Router()

const aboutController = require("../controllers/aboutController")
Router.get("/", aboutController.about)

module.exports = Router
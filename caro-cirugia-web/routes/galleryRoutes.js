const express = require("express")
const Router  = express.Router()

const galleryController = require("../controllers/galleryController")
Router.get("/", galleryController.gallery)

module.exports = Router
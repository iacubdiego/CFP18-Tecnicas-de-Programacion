const express = require("express")
const router  = express.Router()

const userController = require("../controllers/userController")

router.get("/:id", userController.getCirugiaById)

router.get("/", userController.createCirugias)

router.post("/", userController.storeCirugias)

module.exports = router
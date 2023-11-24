const express = require("express")
const router  = express.Router()
const multer = require('multer')


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/img')
    },
    filename: function (req, file, cb) {
      cb(null,file.originalname)
    }
  })

const uploadFile = multer({storage})


const userController = require("../controllers/userController")

router.get("/:id", userController.getCirugiaById)

router.get("/", userController.createCirugias)
router.post("/", uploadFile.single('archivo'), userController.storeCirugias)

router.post("/", userController.editCirugias)

router.post("/gallery/delete", userController.deleteCirugias)



module.exports = router
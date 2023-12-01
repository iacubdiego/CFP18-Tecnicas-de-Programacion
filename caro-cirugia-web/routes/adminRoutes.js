const express = require("express")
const router  = express.Router()
const multer = require('multer')

const middleware = require("../middleware/metodo-override")

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/img')
    },
    filename: function (req, file, cb) {
      cb(null,file.originalname)
    }
  })

const uploadFile = multer({storage})


const adminController = require("../controllers/adminController")

router.get("/", adminController.createCirugias)

router.get("/:id", adminController.getCirugiaById)

// router.post("/", uploadFile.single('archivo'), adminController.storeCirugias)
router.post("/", middleware.single('archivo'), adminController.storeCirugias)

router.put("/:id", adminController.uploadCirugias)

router.delete("/:id", adminController.deleteCirugias)

module.exports = router
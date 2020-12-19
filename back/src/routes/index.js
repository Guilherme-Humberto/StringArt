const express = require("express")
const multer = require("multer")
const router = express.Router()
const controller = require("../controllers/JobController")
const multerConfig = require("../config/multer")

router.get("/jobs", controller.index)
router.post("/jobs", multer(multerConfig).single("img"), controller.create)

module.exports = { router }
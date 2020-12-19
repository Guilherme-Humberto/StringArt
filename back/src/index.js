require("dotenv/config")
const express = require("express")
const bodyparser = require("body-parser")
const cors = require("cors")
const path = require("path")
const { router } = require("./routes")
const app = express()
require("./database/index")


app.use(express.json())
app.use(cors())
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: false }))
app.use(router)
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));

module.exports =  { app }
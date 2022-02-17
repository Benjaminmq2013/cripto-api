const express = require("express")
const router = require("./network/routes")
const app = express()
const bodyParser = require("body-parser")
const config = require("./server-config")

// const cors = require("cors")
// app.use(cors()) // Just for development purposes

// settings
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

// app.use(router)
router(app)

// statics 
app.use(express.static("build"))


app.listen((config.api.port), () =>{
    console.log("API listening on http://127.0.0.1:" + config.api.port)
})
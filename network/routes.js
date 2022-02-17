const express = require("express")
const currency = require("./response")

const notes = function (server){
    server.use("/currency", currency)
}

module.exports = notes;
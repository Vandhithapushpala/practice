const express = require("express");
const path = require("path");

const app = express();

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "/rough.html"));
})

const server = app.listen(5009);
const portNumber = server.address().port;
console.log("server: "+ portNumber);
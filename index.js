const express = require("express")
//const bodyParser = require('body-parser')
const cors = require("cors")
const router = require("./routes/routes")
const Products = require("./database/Products")
const app = express()
const http = require("http").createServer(app)
const io = require('socket.io')(http)

require('./modules/socket')(io)

//const urlencodedParser = bodyParser.urlencoded({ extended: true })

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use("/", router)

http.listen(process.env.PORT || "3000", () => {
  console.log("Server is running...")
  Products.io = io;

  setInterval(function () {
    var time = new Date().getTime();

    io.emit("time update", time);

  }, 1000);

});
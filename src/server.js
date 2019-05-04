const express = require("express");
const app = express();
const http = require("http");
const mongoose = require("mongoose");
const socketIo = require("socket.io");

const morgan = require("morgan");
const bodyParser = require("body-parser");

const path = require("path");

const webpackDevMiddleware = require("webpack-dev-middleware");
const webpackConfig = require("../webpack.config");
const webpack = require("webpack");

//setting log colors
var colors = require("colors");

mongoose.connect(process.env.MONGODB_URI ||
  "mongodb://localhost:27017/JSChatDataBase",
  { useNewUrlParser: true }
);
let db = mongoose.connection;


db.once("open", function() {
  console.log("connected to mongoDB".underline.yellow);
});


db.on("error", function(err) {
  console.log(err);
});


const server = http.createServer(app);


const io = socketIo(server);
require("./sockets.js")(io);

app.set("port", process.env.PORT || 8080);
// app.set("port", process.env.PORT);


app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());

app.use(require("./routes/index"));
app.use(morgan("dev"));

app.use(webpackDevMiddleware(webpack(webpackConfig)));
app.use(bodyParser.urlencoded({ extended: true }));



app.use(express.static(path.join(__dirname, "public")));

app.use("/signin", function(req, res, next) {
  res.sendFile("index.html", { root: path.join(__dirname, "public") });
});
app.use("/registration", function(req, res, next) {
  res.sendFile("index.html", { root: path.join(__dirname, "public") });
});
app.use("/signup", function(req, res, next) {
  res.sendFile("index.html", { root: path.join(__dirname, "public") });
});
app.use("/chatroom", function(req, res, next) {
  res.sendFile("index.html", { root: path.join(__dirname, "public") });
});

mongoose.set("useCreateIndex", true);

// starting the server
server.listen(app.get("port"), () => {
  console.log(`server listening on port ${app.get("port")}`);
});

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




mongoose.connect("mongodb://localhost:27017/JSchatDB",{ useNewUrlParser: true });
let db = mongoose.connection;

/**
 * check connection
 */

db.once("open", function() {
  console.log("connected to mongoDB".underline.yellow);
});

/**
 * check for db errors
 */

db.on("error", function(err) {
  console.log(err);
});

/**
 * creating a server from http module
 */
const server = http.createServer(app);

/**
 * implementing socketIo for chat
 *
 */

const io = socketIo(server);
require("./sockets.js")(io);

app.set("port", process.env.PORT || 8080);

/**
 *
 * middlewares
 * */
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

app.use(require("./routes/index"));
app.use(morgan("dev"));


app.use(webpackDevMiddleware(webpack(webpackConfig)));
app.use(bodyParser.urlencoded({ extended: false }));

// set static files
app.use(express.static(path.join(__dirname, "public")));

// starting the server
server.listen(app.get("port"), () => {
  console.log(`server listening on port ${app.get("port")}`);
});

const express = require("express");
const app = express();
const http = require("http");

const morgan = require("morgan");
const bodyParser = require("body-parser");

const path = require("path");

const webpackDevMiddleware = require("webpack-dev-middleware");
const webpackConfig = require("../webpack.config");
const webpack = require("webpack");

const socketIo = require("socket.io");

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
 * middleware
 * */

app.use(webpackDevMiddleware(webpack(webpackConfig)));
app.use(bodyParser.urlencoded({ extended: false }));

// set static files
app.use(express.static(path.join(__dirname, "public")));

// starting the server
server.listen(app.get("port"), () => {
  console.log(`server listening on port ${app.get("port")}`);
});

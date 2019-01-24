var colors = require("colors");

module.exports = function(io) {
  io.on("connection", socket => {
    console.log(
      "new user connected".underline.grey,
      colors.underline.grey(socket.id)
    );
    socket.on("message", body => {
      socket.broadcast.emit("message", {
        body,
        from: socket.id.slice(8)
      });
    });
  });
};

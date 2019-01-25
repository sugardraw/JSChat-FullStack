var colors = require("colors");

module.exports = function(io) {
  io.on("connection", socket => {
    console.log(
      "new user connected".underline.grey,
      colors.underline.grey(socket.id)
    );
    socket.on("message", body => {
      const { msgBody, from } = body;
      io.sockets.emit("message", {
        msgBody,
        from: from
      });
    });
    socket.on("chat:typing", (data)=> {
      socket.broadcast.emit('chat:typing', data)
    });
    socket.on("disconnect", function() {
      console.log("user disconnected");
    });
  });
};

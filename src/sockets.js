var colors = require("colors");

module.exports = function(io) {
  io.on("connection", socket => {
    socket.emit("sender", { senderId: socket.id });
    console.log(
      "new user connected, sender ID".underline.grey,
      colors.underline.grey(socket.id)
    );
    socket.on("message", data => {
      const { timeStamp, body, from } = data;
      console.log(timeStamp, body, from);
      socket.broadcast.emit("message", {
        timeStamp,
        body,
        from: from
      });
    });
    socket.on("chat:typing", data => {
      socket.broadcast.emit("chat:typing", data);
    });
    socket.on("login", data => {
      socket.broadcast.emit("login", data);
    });
    socket.on("disconnect", function(data) {
      console.log("user disconnected");
    });
    socket.on("logout", function(user) {
      socket.broadcast.emit("logout", user);
    });
  });
};

const socket_controller = (socket) => {
  socket.on("disconnect", () => {
    // console.log("Client disconected!");
  });

  socket.on("enviar-mensaje", (payload, callback) => {
    const id = 123456;
    callback(id);
    socket.broadcast.emit("enviar-mensaje", payload);
  });
};

module.exports = socket_controller;

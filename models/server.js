const express = require("express");
const cors = require("cors");
const socket_controller = require("../sockets/controller");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.server = require("http").createServer(this.app);
    this.io = require("socket.io")(this.server);

    this.paths = {};

    //Middlewares
    this.middlewares();

    //Rutas de mi aplicación
    this.routes();

    //Sockets
    this.sockets();
  }

  async conectarDB() {
    await dbConnection();
  }

  middlewares() {
    //Cors
    this.app.use(cors());

    //Directorio publico
    this.app.use(express.static("public"));
  }

  routes() {
    // this.app.use(this.paths.user, require("../routes/user.routes"));
  }

  sockets() {
    this.io.on("connection", socket_controller);
  }

  listen() {
    this.server.listen(this.port, () => {
      console.log("Server corriendo en el puerto: ", this.port);
    });
  }
}

module.exports = Server;

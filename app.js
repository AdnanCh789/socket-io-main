const express = require("express");
const config = require("config");

const app = express();

const httpServer = require("http").createServer(app);
const io = require("socket.io")(httpServer, {
  cors: {
    origin: "http://localhost:3000",
  },
});
require("./startup/sockets")(io);
require("./startup/config")();
require("./startup/logging")();
require("./startup/routes")(app);

const port = config.get("server.port");

httpServer.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

const express = require("express");
const { WebSocketServer, WebSocket } = require("ws");

const app = express();
app.use(express.static("./public"));

setInterval(() => {
  socketServer.clients.forEach(function each(client) {
    if (client.isAlive === false) return client.terminate();

    client.isAlive = false;
    client.ping();
  });
}, 10000);

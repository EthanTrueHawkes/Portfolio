const { WebSocketServer, WebSocket } = require("ws");

function peerProxy(httpServer) {
  // Create a websocket object
  const socketServer = new WebSocketServer({ server: httpServer });

  let ownerSocket = null;

  setInterval(() => {
    socketServer.clients.forEach(function each(client) {
      if (client.isAlive === false) return client.terminate();

      client.isAlive = false;
      client.ping();
    });
  }, 10000);
}

module.exports = { peerProxy };

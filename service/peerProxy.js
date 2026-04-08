const express = require("express");
const { WebSocketServer, WebSocket } = require("ws");

const app = express();
app.use(express.static("./public"));

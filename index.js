const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");



const io = new Server(server, {
    cors: {
        origin: '*'
    }
});


io.on('connection', (socket) => {
  console.log('a user connected', socket.id);
  socket.on('message', (message) => {
      socket.broadcast.emit('new-message', message);
  })
});

server.listen(5000, () => {
  console.log('listening on *:3000');
});
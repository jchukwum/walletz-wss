const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

io.on('connection', socket => {
      console.log('A user connected');

      socket.on('disconnect', () => {
                console.log('User disconnected');
            });

      socket.on('message', message => {
                console.log('Received message:', message);
                io.emit('message', message);
            });
});

const port = 3001;
server.listen(port, () => {
      console.log(`Server started on port ${port}`);
});

const express = require('express');
const cors = require('cors');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
app.use(cors());
const server = http.createServer(app);
//const io = socketIO(server);
const io = require('socket.io')(server, {
    cors: {
      origin: "*"
        }
});

io.on('connection', socket => {
  console.log("User connected");

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

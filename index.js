const express = require('express');
const socketIo = require('socket.io');

const app = express();
const server = app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
const io = socketIo(server);

io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });

  socket.on('chat message', (msg) => {
    console.log('message: ' + msg);
    io.emit('chat message', msg);
  });
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

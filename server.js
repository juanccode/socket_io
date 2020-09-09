const express = require('express');
const path = require('path');
require('dotenv').config();

// app express
const app = express();

//socket_io
const server = require('http').createServer(app);
module.exports.io = require('socket.io')(server);
require('./sockets/socket')

// path publico
const pathPublic = path.resolve(__dirname, 'public')
app.use(express.static(pathPublic));


const PORT = process.env.PORT || 3000

server.listen(PORT, (err) =>{
  if(err) throw new Error('Error al contar')
  console.log(`Server on port ${PORT}`);
})
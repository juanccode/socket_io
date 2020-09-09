const { io } = require('../server')

// Mensaje de sockets
io.on('connection', client => {
  console.log('cliente conectado');

  client.on('disconnect', () =>{
    console.log('cliente desconectado');
  })

  client.on('mensaje', (payload) =>{
    console.log(payload);

    io.emit('mensaje', {user: 'ADMIN'})
  })
})
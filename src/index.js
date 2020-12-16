//Requerimientos
const express = require('express');
const app = express();
const server = require('http').createServer(app);
const ws = require('socket.io')(server);
const path = require('path');
const port = process.env.PORT || 4000;

//Pagina staticas a mostrar
app.use(express.static(path.join(__dirname,'public')));
//console.log(path.join(__dirname,'public'));

// llamo la el archivo ws
require('./ws')(ws); 

//escuchando el servidor
server.listen(port, () => {
    console.log('Servidor en el puerto: ' + port);
});






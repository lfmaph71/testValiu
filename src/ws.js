module.exports = function (io){
    //Vigilando las conecciones
    io.on('connection',(socket) =>{
        //let addedUser = false;
        console.log('nuevo usuario conectado');

        socket.on('nuevo_mensaje', data => {
            console.log(data);
            io.sockets.emit('new message', data);
        }); 
    });
}


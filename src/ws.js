module.exports = function (io){
    //Vigilando las conecciones
    io.on('connection',(socket) =>{
        console.log('nuevo usuario conectado');

        socket.on('nuevo_mensaje', data => {
            console.log("Creada la etiqueta: " + data.valor);
            io.sockets.emit('new message', data);
        }); 

        socket.on('borrar_mensaje', data => {
            console.log('Borrado la etiqueta: ' + data);
            io.sockets.emit('borra_etiqueta', data);
        });

        socket.on('editar_mensaje', data => {
            console.log('Editada la etiqueta: ' + data.name + ' por: ' + data.nomAct);
            io.sockets.emit('editar_etiqueta', data);
        });
    });
}


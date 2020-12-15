const socket = io();

//Elementos del DOM
const mensajeform = document.getElementById('mensajeForm');
const mensajes = document.getElementById('mensajes');
const chat = document.getElementById('chat');

//Eventos
mensajeform.addEventListener('submit', e => {
    e.preventDefault();
    console.log($("#mensajes").val())
    socket.emit('nuevo_mensaje', $("#mensajes").val());
    mensajes.value="";
}); 

socket.on('new message', data => {
    //chat.
    $("#chat").append(data + '<br/>');
});


/*
$(function(){
    const socket = ws();
    //Obteniendo los datos del DOM
    const mensajeform = ('#mensajeForm');
    const mensaje = ('#mensajes');
    const chat = ('#chat');

    //Eventos
    mensajeform.submit( e => {
        e.preventDefault();
        socket.emit('send message', mensaje.val());
        mensaje.val('');
    });



})
*/
const socket = io();

//Elementos del DOM
const mensajeform = document.getElementById('mensajeForm');
const mensajes = document.getElementById('mensajes');
const chat = document.getElementById('chat');

//Eventos
mensajeform.addEventListener('submit', e => {
    e.preventDefault();
    console.log($("#mensajes").val())
    //insertaEtiquetas();
    socket.emit('nuevo_mensaje', $("#mensajes").val());
    mensajes.value="";
}); 

socket.on('new message', data => {
    //chat.
    insertaEtiquetas(data);
    $("#chat").append(data + '<br/>');
});

//Des aqui los eventos para las etiquetas

function insertaEtiquetas(datos){
    //var mensajevalor = $("#mensajes").val();
    const etiquetas = document.getElementById('etiquetas');
    const etiqueta = document.createElement("div");
    etiqueta.innerHTML = `
    <div>
        <p>${datos}
            <button type="button" onclick="fnEditar()">Editar</button>
            <button type="button" onclick="fnBorrar()" >Borrar</button>
        </p>
    </div>`;
    etiquetas.appendChild(etiqueta);
}

function fnEditar(){
    alert("dieron click")
}

function fnBorrar(){
    alert("dieron click")
}


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
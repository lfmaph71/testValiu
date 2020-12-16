const socket = io();

//Eventos
function crearEtiquetas(){
    //console.log($("#nomEtiqueta").val())
    socket.emit('nuevo_mensaje', $("#nomEtiqueta").val());
    $("#nomEtiqueta").prop('value',"")
}

socket.on('new message', data => {
    insertaEtiquetas(data);
});

socket.on('borra_etiqueta', data => {
    BorraEtiq(data);
});

//Des aqui los eventos para las etiquetas

function insertaEtiquetas(datos){
    const etiquetas = document.getElementById('etiquetas');
    const etiqueta = document.createElement("div");
    etiqueta.innerHTML = `
    <div id = ${datos}>
        <input id = ${datos} type="text" value=${datos} >
        <button type="button" name=${datos} onclick="fnEditar(name)">Editar</button>
        <button type="button" name =${datos} onclick="fnBorrar(name)" >Borrar</button>
    </div>`;
    etiquetas.appendChild(etiqueta);
}

function fnEditar(name){
    console.log($("#" + name + " input").val()); 
    //console.log(document.getElementById('#'+ name)[0]);
   //console.log($("#" + name + " input").val());

   
}

function fnBorrar(name){
  socket.emit('borrar_mensaje', name);
}

function BorraEtiq(name){
    $("#" + name).remove();
};

/*
function dame_color_aleatorio(){
    hexadecimal = new Array("0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F")
    color_aleatorio = "#";
    for (i=0;i<6;i++){
       posarray = aleatorio(0,hexadecimal.length)
       color_aleatorio += hexadecimal[posarray]
    }
    return color_aleatorio
 }

 function generarNuevoColor(){
	var simbolos, color;
	simbolos = "0123456789ABCDEF";
	color = "#";

	for(var i = 0; i < 6; i++){
		color = color + simbolos[Math.floor(Math.random() * 16)];
	}
 */
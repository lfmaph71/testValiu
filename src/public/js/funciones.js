const socket = io();

//Eventos
function crearEtiquetas(){
    let color = generaColor()
    let valor = $("#nomEtiqueta").val()
    socket.emit('nuevo_mensaje', {valor,
        color});
    $("#nomEtiqueta").prop('value',"")
}

socket.on('new message', data => {
    insertaEtiquetas(data);
});

socket.on('borra_etiqueta', data => {
    BorraEtiq(data);
});

socket.on('editar_etiqueta', data => {
    editarEtiq(data);
});

//Des aqui los eventos para las etiquetas

function insertaEtiquetas(datos){
    const etiquetas = document.getElementById('etiquetas');
    const etiqueta = document.createElement("div");
    
    etiqueta.innerHTML = `
    <div id = ${datos.valor} >
        <input id = "input${datos.valor}" type="text" value=${datos.valor} style="background-color:${datos.color}">
        <button type="button" id = ${datos.valor} onclick="fnEditar(id)">Editar</button>
        <button type="button" id = ${datos.valor} onclick="fnBorrar(id)">Borrar</button>
    </div>`;
    etiquetas.appendChild(etiqueta);
}

function fnEditar(name){
    let nomAct = $("#" + name + " input").val(); 
    socket.emit('editar_mensaje', {name, nomAct});    
}

function editarEtiq(dato){
    //console.log(dato.name, dato.nomAct); 
    $("#" + dato.name).attr('id', dato.nomAct);
    $("#input" + dato.name).attr('value',dato.nomAct);
    $("#input" + dato.name).attr('id','input'+ dato.nomAct);
    $("button#" + dato.name).attr('id', dato.nomAct);
    //console.log($("div").html());
};

function fnBorrar(name){
    console.log(name)
    socket.emit('borrar_mensaje', name);
}

function BorraEtiq(name){
    $("#" + name).remove();
};

function generaColor(){
	var numeros, colorg;
	numeros = "0123456789ABCDEF";
	colorg = "#";

	for(let i = 0; i < 6; i++){
		colorg = colorg + numeros[Math.floor(Math.random() * 16)];
    };
    return colorg
};

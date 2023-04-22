document.getElementById("textDinamico").innerHTML = "<h4> !Apresúrese!</h4> El plazo maximo para inscribirse es solo 2 días despúes de la siguiente fecha:"
//fecha actual
let fechaActual = new Date(); //obtener datos 
let dia = fechaActual.getDate(); //dia
let mes = (fechaActual.getMonth() + 1).toString().padStart(2, '0'); //mes
let anio = fechaActual.getFullYear(); //año

//console.log(`${dia}-${mes + 1}-${anio}`) //formato 12/4/2023..
let fecha = document.getElementById("fecha");
fecha.innerText = (`${dia} / ${mes} /${anio}`);
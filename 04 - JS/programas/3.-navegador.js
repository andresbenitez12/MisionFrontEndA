//Encontrar elementos de HTML

const titulo = document.getElementById("titulo"); //Se recomienda siempre usar por ID
const parrafo = document.getElementsByTagName("p");
const links = document.getElementsByClassName("links");

console.log(parrafo)

//Cambiar valores de HTML
titulo.innerHTML = "Titulo cambiado";
// parrafo[0].innerHTML = "Parrafo cambiado";

document.getElementById("demo").innerHTML = 
  'The text in first paragraph (index 0) is: ' + parrafo[0].innerHTML;

links[0].href = "google.com";
links[0].target = "_blank";

//Cambiar estilos

titulo.style.color = "red"
 
//Eventos

function cambiarTexto(obj) {
    obj.innerHTML = "Texto clickeado"
}

function mOver(obj) {
    obj.innerHTML = "Mouse over now"
}

function mOut(obj) {
    obj.innerHTML = "Mouse out"
}

function mDown(obj) {
  obj.style.backgroundColor = "#1ec5e5";
  obj.innerHTML = "sueltame";
  
}

function mUp(obj) {
  obj.style.backgroundColor="#D94A38";
  obj.innerHTML="gracias";
}

//addEventListener

const boton = document.getElementById("boton");
boton.addEventListener("click", alerta)

function alerta() {
    alert("Hola Mundo!");
}

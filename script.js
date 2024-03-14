//alert("Hola este es mi Javascript");
/*let nombre ="Yoselin";
const nombre1 = "Yoselin";
var nombre2 = "Yoselin";

console.log(nombre);
console.log(nombre1);
console.log(nombre2);*/

//SELECCONAR ELEMENTO

let contenidoTitulo = "Nombre";

let titulo = document.querySelector(".logo .fuente-acento");
titulo.innerHTML = contenidoTitulo;

//CONDICIONALES
let textoTitulo = titulo.innerText;
console.log(textoTitulo);

if(textoTitulo == "Nombre"){
    titulo.innerHTML = "Otro";
} else {
    console.log("no se cumple")
}

//FUNCIONES

let nombre1 = "Ana";
let ciudad = "Huancayo";
let gusto = "musica y explorar la naturaleza";

let parrafo = document.querySelector(".parrafo2");

function nombredelafuncion(){

};

function cambiarTexto(nombre, ciudad, gusto){
    let contenido = "Mi nombre es ${nombre1}, soy de la ciudad de ${ciudad}, soy una persona apasionada y comprometida con el aprendizaje continuo y el crecimiento personal. Disfruto explorando nuevas ideas y perspectivas, mi curiosidad insaciable me impulsa a buscar nuevas experiencias y desafíos que me ayuden a expandir mis horizontes. En mi tiempo libre, me gusta escuchar ${gusto}Estoy constantemente buscando formas de mejorar y contribuir positivamente al mundo que me rodea.";

    return contenido;
}

parrafo.innerText = cambiarTexto(nombre, ciudad, gusto);

// formulario de contacto

const form = document.getElementById("form");
const nombre = document.getElementById("nombre");
const parrafo = document.getElementById("alertas");

function validarFormulario() {
  let warnings = "";
  let valido = true;
  parrafo.innerHTML = "";

  if (nombre.value.length < 4) {
    warnings += `El nombre debe contener más de 4 carcateres`;
    valido = false;
  }

  if (!valido) {
    parrafo.innerHTML = warnings;
  } else {
    parrafo.innerHTML = "Enviado";
  }
  return valido;
}

form.addEventListener("submit", (e) => {
  if (validarFormulario()) {
    // Si la validación es exitosa, puedes enviar el formulario
    formulario.submit();
  } else {
    e.preventDefault(); // Evita que el formulario se envíe automáticamente
  }
});

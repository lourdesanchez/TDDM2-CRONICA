
function mostrarFeedback() {
  var fondoPopupFeedback = document.getElementById("contenedor-feedback");
  var seccionFormulario = document.getElementById("seccion-4");

  seccionFormulario.classList.add("no-mostrar");
  fondoPopupFeedback.classList.remove("no-mostrar");
  fondoPopupFeedback.classList.add("mostrar");
}

function recolectarDatos() {
  // PASOS 1 y 2: obtenemos los inputs que tienen los datos que nos interesan, y luego obtenemos el valor (los datos). 
  
  // Nombre e email
  var textareaTexto = document.getElementById("texto");
  var texto = textareaTexto.value;

  var inputNombre = document.getElementById("nombre");
  var nombre = inputNombre.value;

  // Select de tema
  var selectTema = document.getElementById("tema");
  var temaElegido = selectTema.value;



  // PASO 3: obtenemos los lugares del html donde nos interesa MOSTRAR los datos que ingresó el usuario
  var spanTexto = document.getElementById("texto-usuario");
  var spanNombre = document.getElementById("nombre-usuario");
  
  // PASO 4: ponemos las variables que obtuvimos en el paso 2, en los elementos html que obtuvimos en el paso 3
  spanTexto.innerText = texto;
  spanNombre.innerText = nombre;
}

function resetearFormulario() {
  var textareaTexto = document.getElementById("texto");
  var inputNombre = document.getElementById("nombre");
  textareaTexto.value = "";
  inputNombre.value = "";
}

function enviarFormulario(e) {
  recolectarDatos();
  mostrarFeedback();
  resetearFormulario();
}

function cerrarFeedback() {
  var seccionFormulario = document.getElementById("seccion-4");
  var fondoPopupFeedback = document.getElementById("contenedor-feedback");

  fondoPopupFeedback.classList.remove("mostrar");
  fondoPopupFeedback.classList.add("no-mostrar");
  seccionFormulario.classList.remove("no-mostrar");
}


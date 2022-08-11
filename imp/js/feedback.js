
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
  var inputNombre = document.getElementById("fname");
  var nombre = inputNombre.value;

  var inputMail = document.getElementById("mail");
  var mail = inputMail.value;

  // Select de autos
  var selectAutos = document.getElementById("fautos");
  var autoElegido = selectAutos.value;

  // Checkbox de vehículos
  var checkboxVehiculo1 = document.getElementById("vehicle1");
  var valorCheckbox1 = checkboxVehiculo1.checked;
  var checkboxVehiculo2 = document.getElementById("vehicle2");
  var valorCheckbox2 = checkboxVehiculo2.checked;
  var checkboxVehiculo3 = document.getElementById("vehicle3");
  var valorCheckbox3 = checkboxVehiculo3.checked;

  // Radio button de lenguajes
  var lenguaje = displayRadioButtonValue();


  // PASO 3: obtenemos los lugares del html donde nos interesa MOSTRAR los datos que ingresó el usuario
  var spanNombre = document.getElementById("nombre-usuario");
  var spanEmail = document.getElementById("mail-usuario");
  var spanAutoElegido = document.getElementById("auto-elegido");
  var spanTieneBici = document.getElementById("tiene-bici");
  var spanTieneAuto = document.getElementById("tiene-auto");
  var spanTieneMoto = document.getElementById("tiene-moto");
  var spanLenguajeFavorito = document.getElementById("lenguaje-favorito");
  
  // PASO 4: ponemos las variables que obtuvimos en el paso 2, en los elementos html que obtuvimos en el paso 3
  spanNombre.innerText = nombre;
  spanEmail.innerText = mail;
  spanAutoElegido.innerText = autoElegido;
  if (valorCheckbox1) {
    spanTieneBici.innerText = "Sí";
  } else {
    spanTieneBici.innerText = "No";
  }
  if (valorCheckbox2) {
    spanTieneAuto.innerText = "Sí";
  } else {
    spanTieneAuto.innerText = "No";
  }
  if (valorCheckbox3) {
    spanTieneMoto.innerText = "Sí";
  } else {
    spanTieneMoto.innerText = "No";
  }
  spanLenguajeFavorito.innerText = lenguaje;
}

function resetearFormulario() {
  var inputNombre = document.getElementById("fname");
  var inputMail = document.getElementById("mail");
  inputNombre.value = "";
  inputMail.value = "";
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

function displayRadioButtonValue() {
  var ele = document.querySelectorAll("#radio-container input");

  for (i = 0; i < ele.length; i++) {
    if ((ele[i].type = "radio")) {
      if (ele[i].checked) {
        return ele[i].value;
      }
    }
  }
}

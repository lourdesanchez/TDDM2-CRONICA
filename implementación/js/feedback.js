function mostrarFeedback() {
    var fondoFeedback = document.getElementById("contenedor-feedback");
    var seccionFormulario = document.getElementById("columna-placas");
  
    /*seccionFormulario.classList.add("no-mostrar");*/
    fondoFeedback.classList.remove("no-mostrar");
    fondoFeedback.classList.add("mostrar");
  }
  
  function recolectarDatos() {

    //le pedimos que eliga un tema
    var selectTemas = document.getElementById("temasPlacas");
    var temaElegido = selectTemas.value;

    //le pedimos que escriba
    var textareaTexto = document.getElementById("texto-form-placa");
    var textoPuesto = textareaTexto.value;

    //le pedimos su nombre
    var imputNombre = document.getElementById("name")
    var nombrePuesto = imputNombre.value; 
  
  
    // PASO 3: obtenemos los lugares del html donde nos interesa MOSTRAR los datos que ingresó el usuario
    var spanTemas = document.getElementById("tema-elegido");
    var spanTexto = document.getElementById("texto-puesto");
    var spanNombre = document.getElementById("nombre-usuario");
    
    // PASO 4: ponemos las variables que obtuvimos en el paso 2, en los elementos html que obtuvimos en el paso 3

    spanTexto.innerText = message;
    spanNombre.innerText = nombre;
  
  }
  
  /*function resetearFormulario() {
    var inputNombre = document.getElementById("nombre");
    var inputMail = document.getElementById("mail");
    inputNombre.value = "";
    inputMail.value = "";
  }*/
  
  function enviarFormulario(e) {
    recolectarDatos();
    mostrarFeedback();
  }
  
  /*function cerrarFeedback() {
    var seccionFormulario = document.getElementById("seccion-form");
    var fondoPopupFeedback = document.getElementById("contenedor-feedback");
  
    fondoPopupFeedback.classList.remove("mostrar");
    fondoPopupFeedback.classList.add("no-mostrar");
    seccionFormulario.classList.remove("no-mostrar");
  }*/
  
  function incrementButton() {
    var element = document.getElementById('increment-text');
    var value = element.innerHTML;
    
    ++value;
    
    console.log(value)
    document.getElementById('increment-text').innerHTML = value;
    
      }
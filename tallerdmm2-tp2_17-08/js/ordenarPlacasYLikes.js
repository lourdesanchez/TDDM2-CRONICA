$(document).ready(function () {

// Esta funcion solo se encarga de que el filtro, al cambiar una opción, ejecute una función de Javascript.
  function agregarListener() {
    console.log("Listener agregado");
    $("#ordenar-por").change(function () {
      filtrarContenido($(this).val());
    });
  }

// Esta funcion se encarga de ver cual es el filtro seleccionado y poner las imagenes que correspondan.
  function filtrarContenido(filtro) {
    console.log(filtro);
    let imgs = $(".contenedor-placas > .contenedor img").remove(); // Primero borramos las imagenes que hayan
    let contenedores = $(".contenedor-placas > .contenedor"); // Obtenemos todos los contenedores
    let contenedores_likes = $(".contenedor-placas > .contenedor .likes span"); // obtenemos todos los contenedeores de likes
    for (let i = 0; i < contenedores.length; i++) { // por cada contenedor
      let img = document.createElement("img"); // Creamos una imagen que por ahora está vacía <img/>
      if (filtro === "mas-recientes") { // Si el filtro es mas-relevantes, sacamos la data del array "orden 1"
        img.setAttribute("src", orden_1_likes[i].img); // Le ponemos la imagen que corresponda quedando el elemento <img src="placaX.jpeg"/>
        contenedores_likes[i].innerText = orden_1_likes[i].likes; // Le ponemos al contenedor de likes el número que corresponda.
        console.log(contenedores_likes[i].innerText);
      } else if (filtro === "mas-megusta") { // Si el filtro es mas-nuevos lo mismo, pero lo sacamos del array "orden 2"
        img.setAttribute("src", orden_2_likes[i].img); 
        contenedores_likes[i].innerText = orden_2_likes[i].likes;
      }
      contenedores[i].appendChild(img); // Acá a cada contenedor, le ponemos la <img src="placaX.jpeg"/> que acabamos de fabricar
    }
    console.log("Filtrando");
  }

  function verMas() {
    // Esta funcion solo le saca la clase "hide" a los contenedores ocultos y luego le agrega "hide" al propio boton para ocultarlo
    $(".contenedores-ver-mas .contenedor").removeClass("hide");
    rellenarVerMas();
    $("#ver-mas").addClass("hide");
  }

  // ESta hace lo mismo que filtrarContenido(); pero saca las imagenes del array cargar_mas_likes 
  function rellenarVerMas() {
    let imgs = $(".contenedores-ver-mas > .contenedor img").remove();
    let contenedores = $(".contenedores-ver-mas > .contenedor");
    let contenedores_likes = $(".contenedores-ver-mas > .contenedor .likes span");
    console.log(contenedores);
    for (let i = 0; i < contenedores.length; i++) {
      let img = document.createElement("img");
      
      img.setAttribute("src", cargar_mas_likes[i].img);
      contenedores_likes[i].innerText = cargar_mas_likes[i].likes;

      contenedores[i].appendChild(img);
    }
  }

  // Esto hace que al hacer click en un elemento con el id ver-mas se ejecute la funcion verMas();
  $("#ver-mas").click(() => {
    verMas();
  });

  // Acá hacemos que al cambiar de opcion en el select de filtros, disparemos la opcion filtrarContenido
  agregarListener();

  // Por una sola vez, llamamos manualmente a la funcion filtrarContenido(); para que cuando el usuario entre, aunque aun no haya seleccionado nada, se vea algo
  filtrarContenido("mas-recientes");

  $(".contenedor button.likear").click((e) => {sumarLike(e)});
  $(".contenedor button.likear").click((e) => {votado(e)});
  /*$(".contenedor button.guardar").click((e) => {guardar(e)});*/
});


// Para sumar likes
// -----------------------------------

function sumarLike(e) {
  botonLike = e.target;
  elementoLikes = botonLike.nextElementSibling;;
  likesActuales = parseInt(elementoLikes.innerText);
  likesNuevos = likesActuales + 1;
  elementoLikes.innerText = likesNuevos;
}

function votado(e) {
  botonGuardar = e.target;
  botonGuardar.innerText = "VOTADO";
  botonGuardar.classList.add("VOTADO");
}

var orden_1_likes = [
  { likes: 0, img: "img/p1.png" },
  { likes: 2, img: "img/p2.png" },
  { likes: 7, img: "img/p3.png" },
  { likes: 4, img: "img/p4.png" },
  { likes: 3, img: "img/p5.png" },
  { likes: 10, img: "img/p6.png" },
  { likes: 5, img: "img/p7.png" },
  { likes: 2, img: "img/p8.png" },
  { likes: 6, img: "img/p9.png" },
  { likes: 1, img: "img/p10.png" },
  { likes: 0, img: "img/p11.png" },
  { likes: 7, img: "img/p12.png" },
  { likes: 4, img: "img/p13.png" },
  { likes: 9, img: "img/p14.png" },
];


/*----------------PLACAS MÁS VOTADOS---------------------*/ 
var orden_2_likes = [
  { likes: 70, img: "img/p15.png" },
  { likes: 62, img: "img/p16(1).png" },
  { likes: 50, img: "img/p17(1).png" },
  { likes: 47, img: "img/p18(1).png" },
  { likes: 36, img: "img/p19(1).png" },
  { likes: 34, img: "img/p20(1).png" },
  { likes: 32, img: "img/p21(1).png" },
  { likes: 27, img: "img/p22(1).png" },
  { likes: 25, img: "img/p23(1).png" },
  { likes: 20, img: "img/p24(1).png" },
  { likes: 15, img: "img/p25(1).png" },
  { likes: 13, img: "img/p26(1).png" },
  { likes: 6, img: "img/p27(1).png" },
  { likes: 2, img: "img/p28(1).png" },
];



var cargar_mas_likes = [
  { likes: 6, img: "img/p1verMas.png" },
  { likes: 1, img: "img/p2verMas.png" },
  { likes: 0, img: "img/p3verMas.png" },
  { likes: 3, img: "img/p4verMas.png" },
  { likes: 8, img: "img/p5verMas.png" },
  { likes: 1, img: "img/p6verMas.png" },
  { likes: 10, img: "img/p7verMas.png" },
];

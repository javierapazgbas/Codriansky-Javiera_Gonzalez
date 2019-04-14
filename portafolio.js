

// PRIMERO CREAMOS UNA VARIABLE QUE CONTIENE TODOS LOS DATOS DE TUS TRABAJOS
var trabajos = [
{
    figure: "media/yum.jpg",
    title: "YUM",
    about: "Proyecto realizado en Taller Identidad UC ",
}, {
    figure: "media/ygn.jpg",
    title: "YGN",
    about: "Proyecto realizado en Taller Producto UC",
}, {
    figure: "media/luminaria.jpg",
    title: "Luminaria de parafina solida",
    about: "Proyecto realizado en Estructuras y Materiales UC",
}, {
    figure: "media/maggi1.jpg",
    title: "Propuesta Maggi 1",
    about: "Propuesta proyecto Taller Producto UC",
}, {
    figure: "media/Luminaria2.jpg",
    title: "Luminaria Ciudad Iluminada",
    about: "Proyecto Iluminación UC",
}, {
    figure: "media/calidad1.jpg",
    title: "Proyecto Contigo para mujeres campesinas de Melipeuco",
    about: "Proyecto realizado en Taller Calidad I UC",
}, {
    figure: "media/Web.jpg",
    title: "Mitos y leyendas",
    about: "Proyecto Web",
}, {
    figure: "media/Web2.jpg",
    title: "Animales exóticos",
    about: "Proyecto Web",
}, {
    figure: "media/Mituticuanti.jpg",
    title: "Proyecto Mituticuanti microemprendimiento",
    about: "Proyecto realizado en Taller Calidad I UC",
}

]
// LUEGO CREAMOS PARTES DEL SITIO CON CADA DATO CONTENIDO EN LA VARIABLE
$.each(trabajos, function(i, val) {
    var uno = '<figure><img src="' + trabajos[i].figure + '"/></figure>';
    var dos = '<h4>' + trabajos[i].title + '</h4>';
    var tres = '<p>' + trabajos[i].about + '</p>';
    $('#portafolio').append('<div class="item">' + uno + dos + tres + '</div>')
});

$(function() {

  $('[data-toggle="modal"]').hover(function() {
    var modalId = $(this).data('target');
    $(modalId).modal('show');

  });

});

//VIDEO DE FONDO

var vid = document.getElementById("bgvid");
var pauseButton = document.querySelector("#polina button");

if (window.matchMedia('(prefers-reduced-motion)').matches) {
    vid.removeAttribute("autoplay");
    vid.pause();
    pauseButton.innerHTML = "Paused";
}

function vidFade() {
  vid.classList.add("stopfade");
}

vid.addEventListener('ended', function()
{
// only functional if "loop" is removed 
vid.pause();
// to capture IE10
vidFade();
}); 


pauseButton.addEventListener("click", function() {
  vid.classList.toggle("stopfade");
  if (vid.paused) {
    vid.play();
    pauseButton.innerHTML = "Pause";
  } else {
    vid.pause();
    pauseButton.innerHTML = "Paused";
  }
})
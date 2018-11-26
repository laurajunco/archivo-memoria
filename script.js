$(document).ready(function(){

  var width = $( window ).width();
  var height = $( window ).height();

  var topMargin = $(".top-menu").height() + 50;
  var numImagenes = 26;
  var cuenta = 1;
  var r = 100;

  setInterval(addImg, 300);

  function addImg() {

    if ( cuenta < numImagenes ) {
    //crear div y obtener dimensiones
     var div = $("<img/>");
     div.attr("src","img/" + cuenta + ".png");

     //variables de posicion aleatoria
     var top =  topMargin + Math.floor(Math.random() * (height - topMargin - div.height()));
     var left =  Math.floor(Math.random() * (width - div.width()));

     //agregar classes y definir posicion
     div.addClass("imagen-archivo");
     div.addClass("drag");
     div.css({top: top, left: left});

     //agregar el elemento al documento
     $("body").append(div);

     //aumenta la cuenta
     cuenta++;

     //activar draggable
     $( ".drag" ).draggable();

     ///poner imagen en primer plano cuando el mouse pasa encima
     $(".imagen-archivo").mouseover(function() {
       $(this).css("z-index", r);
       r += 100;
     });
    }
  }
});

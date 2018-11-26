$(document).ready(function(){

  var width = $( window ).width();
  var height = $( window ).height();

  var numImagenes = 25;
  var cuenta = 0;
  var r = 100;

  setInterval(addImg, 500);

  function addImg() {

    if ( cuenta < numImagenes ) {
      //ancho y alto aleatorios
      w = 50 + Math.floor((Math.random() * 300));
      h = 50 + Math.floor((Math.random() * 300));

    //crear div y obtener dimensiones
     var div = $("<div></div>");
     div.width(w);
     div.height(h);

     //variables de posicion aleatoria
     var top =  Math.floor(Math.random() * (height - div.height()));
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

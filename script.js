$(document).ready(function(){

  var width = $( window ).width();
  var height = $( window ).height();

  var topMargin = $(".top-menu").height() + 50;
  var numImagenes = 51;
  var cuenta = 1;
  var r = 100;

  setInterval(addImg, 300);

  function addImg() {

    //solo mientras se cargan las imagenes
    if ( cuenta < numImagenes ) {

      var src = "img/" + cuenta + ".png"

      var img = new Image();
      img.src = src;

      //cuando carga la imagen
      img.onload = function() {
        var imgWidth = this.width;
        var imgHeight = this.height;

        //crear div y obtener dimensiones
         var div = $("<img/>");
         div.attr("src",src);

         //dividir tamano
         var r = 1 + Math.floor(Math.random() * 4);
         div.width(imgWidth / r);
         div.height(imgHeight / r);

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
  }
});

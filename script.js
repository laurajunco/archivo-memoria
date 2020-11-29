$(document).ready(function(){

  var width = $( window ).width();
  var height = $( window ).height();

  var topMargin = 50;
  var numImagenes = 50;
  var cuenta = 0;
  var r = 100;

  setInterval(addImg, 700);

  function addImg() {

    //solo mientras se cargan las imagenes
    if (cuenta < numImagenes ) {
      console.log(cuenta);

       //aumenta la cuenta
       cuenta++;

      var src = "img/" + cuenta + ".png"

      var img = new Image();
      img.src = src;

      //cuando carga la imagen
      img.onload = function() {
        if (cuenta < numImagenes ) {

          var imgWidth = this.width;
          var imgHeight = this.height;

          //crear div y obtener dimensiones
           var div = $("<div> </div>")
           var img = $("<img/>");
           var marco = $("<div> </div>");

           img.attr("src",src);
           marco.addClass("marco-imagen");

           //dividir tamano
           var r = 1.1 + (Math.random() * 3.5);
           div.width(imgWidth / r);
           div.height((imgHeight / r) + 20);


           //variables de posicion aleatoria
           var top =  topMargin + Math.floor(Math.random() * (height - topMargin - div.height()));

           var left =  topMargin + Math.floor(Math.random() * (width - topMargin - div.width()));

           //agregar classes y definir posicion
           div.addClass("imagen-archivo");
           div.addClass("drag");
           div.css({top: top, left: left});

           div.append(marco);
           div.append(img);

           //agregar el elemento al documento
           $("body").append(div);
         }
      }

      //activar draggable
      $( ".drag" ).draggable();

      ///poner imagen en primer plano cuando el mouse pasa encima
      $(".imagen-archivo").mouseover(function() {
        $(this).css("z-index", r);
        r += 10;
      });
    }
  }
});

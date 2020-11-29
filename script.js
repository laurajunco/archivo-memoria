$(document).ready(function(){

  var margin = 50;
  var numImagenes = 93;
  var r = 100;
  var minWidth = 85;
  var Wwidth = $( window ).width() - margin;
  var Wheight = $( window ).height() - margin;
  var maxWidth = Wwidth/6;
  var cuenta = 0;
  var numbers = [];
  var mostrarCuantas = 30;

  for (var i = 0; i < numImagenes; i++) {
    numbers [i] = i+1;
  }

  shuffleArray(numbers)


  //organizar numeros
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
  }

  setInterval(addImg, 700);

  function addImg() {

    //solo mientras se cargan las imagenes
    if (cuenta < mostrarCuantas ) {

       //aumenta la cuenta
       cuenta++;

      var src = "img/" + numbers[cuenta] + ".jpeg"

      var img = new Image();
      img.src = src;

      //cuando carga la imagen
      img.onload = function() {
        if (cuenta < mostrarCuantas ) {

          var imgWidth = this.width;
          var imgHeight = this.height;

          //crear div y obtener dimensiones
           var div = $("<div> </div>")
           var img = $("<img/>");
           var marco = $("<div> </div>");

           img.attr("src",src);
           marco.addClass("marco-imagen");

           //dividir tamano
           minRatio = 500/minWidth;
           maxRatio = 500/maxWidth;

           var ratio = Math.random() * (minRatio - maxRatio) + maxRatio;

           div.width(Math.floor(imgWidth / ratio));
           div.height(Math.floor(imgHeight / ratio));

           //variables de posicion aleatoria
           var top =  margin + Math.random() * (Wheight - div.height());
           var left =  margin + Math.random() * (Wwidth - div.width());

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

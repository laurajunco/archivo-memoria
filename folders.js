$(document).ready(function(){

  var width = $( window ).width() - $( window ).width()*0.4;
  var height = $( window ).height() ;

  var topMargin = $(".top-menu").height() + 50;

for (var i = 1; i < 14; i++) {
  addImg(i);
}

  function addImg(i) {

    var src = "../img_descargar/" + i + ".png"

    var img = new Image();
    img.src = src;

    var imgWidth = this.width;
    var imgHeight = this.height;

   var div = $("<div> </div>")
   var img = $("<img/>");

   img.attr("src",src);
   img.addClass("img-descargas")

   //variables de posicion aleatoria
   var top =  topMargin + Math.floor(Math.random() * (height - topMargin - div.height()));

   var left =  $( window ).width()*0.2 + Math.floor(Math.random() * (width - div.width()));

   //agregar classes y definir posicion
   div.addClass("file");
   div.css({top: top, left: left});

   div.append(img);

   //agregar el elemento al documento
   $("body").append(div);

  }
});

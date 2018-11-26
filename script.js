$(document).ready(function(){
  var width = $( window ).width();
  var height = $( window ).height();
  var numImagenes = 10;
  var cuenta = 0;

  setInterval(addImg, 500);

  function addImg() {

    if ( cuenta < numImagenes ) {
      w = 50 + Math.floor((Math.random() * 300));
      h = 50 + Math.floor((Math.random() * 300));

     var div = $("<div></div>");
     div.width(w);
     div.height(h);

     var top =  Math.floor(Math.random() * (height - div.height()));
     var left =  Math.floor(Math.random() * (width - div.width()));

     div.addClass("imagen-archivo");
     div.css({top: top, left: left});
     $("body").append(div);

     cuenta++;
     console.log(cuenta);
    }
  }

});

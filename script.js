$(document).ready(function(){
  var width = $( window ).width();
  var height = $( window ).height();

  setInterval(addText, 1000);

  
   var txt = $("<p></p>").text("Test text.");

   var top = Math.floor((Math.random() * width) + 1 - txt.width());
   var left = Math.floor((Math.random() * height) + 1 - txt.height());
   txt.addClass("imagen-archivo");
   txt.css({top: top, left: left});
   $("body").append(txt);

});

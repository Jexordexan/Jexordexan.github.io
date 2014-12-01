$(window).load(function() {
   $("#curtain").fadeOut(1000);
});

$(document).ready(function(){
  
  $("a").click(function() {
    var loc = $(this).attr("data-href");
   var divLoc = $(loc).offset();
   $('html, body').animate({scrollTop: divLoc.top}, "slow");
  });
  
  $(window).scroll(function() {
      var scroll = $(this).scrollTop();
      $(".back, .fore").css({'background-position': '50% -'+scroll/30+'px'});
      
  });
});

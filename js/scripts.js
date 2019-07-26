$(document).ready(function() {
    $(".des").click(function() {
        $(".cal8").toggle();
      $(".cal9").toggle();
   
   
    });
    $(".dev").click(function() {
        $(".cal88").toggle();
      $(".cal99").toggle();
    });

    $(".pro").click(function() {
        $(".cal888").toggle();
      $(".cal999").toggle();
    });
  

    $(".wrd1").hide();
    $("#work1").css({
      opacity:1
    });
    $(".wrd2").hide();
    $("#work2").css({
      opacity:1
    });
    $(".wrd3").hide();
    $("#work3").css({
      opacity:1
    });
    $(".wrd4").hide();
    $("#work4").css({
      opacity:1
    });
    $(".wrd5").hide();
    $("#work5").css({
      opacity:1
    });
    $(".wrd6").hide();
    $("#work6").css({
      opacity:1
    });
    $(".wrd7").hide();
    $("#work7").css({
      opacity:1
    });
    $(".wrd8").hide();
    $("#work8").css({
      opacity:1
    });
 
$("#im1").hover(function(){
  $(this).css({opacity:.3});
  $(".wrd1").fadeIn();
},function(){
  $(this).stop().css({opacity:1})
  $(".wrd1").fadeOut();
});
$("#im2").hover(function(){
  $(this).css({opacity:.3});
  $(".wrd2").fadeIn();
},function(){
  $(this).stop().css({opacity:1})
  $(".wrd2").fadeOut();
});
$("#im3").hover(function(){
  $(this).css({opacity:.3});
  $(".wrd3").fadeIn();
},function(){
  $(this).stop().css({opacity:1})
  $(".wrd3").fadeOut();
});
$("#im4").hover(function(){
  $(this).css({opacity:.3});
  $(".wrd4").fadeIn();
},function(){
  $(this).stop().css({opacity:1})
  $(".wrd4").fadeOut();
});
$("#im5").hover(function(){
  $(this).css({opacity:.3});
  $(".wrd5").fadeIn();
},function(){
  $(this).stop().css({opacity:1})
  $(".wrd5").fadeOut();
});
$("#im6").hover(function(){
  $(this).css({opacity:.3});
  $(".wrd6").fadeIn();
},function(){
  $(this).stop().css({opacity:1})
  $(".wrd6").fadeOut();
});
$("#im7").hover(function(){
  $(this).css({opacity:.3});
  $(".wrd7").fadeIn();
},function(){
  $(this).stop().css({opacity:1})
  $(".wrd7").fadeOut();
});
$("#im8").hover(function(){
  $(this).css({opacity:.3});
  $(".wrd8").fadeIn();
},function(){
  $(this).stop().css({opacity:1})
  $(".wrd8").fadeOut();
});
});



function got(){
  var nn =document.getElementById("nam");
  var ee =document.getElementById("em");
  var com =document.getElementById("comment");
  console.log(nam)
  document.getElementById("sub")
  alert("Hello " + nam.value  + " thank you for contacting us " +","+ "we care about you")
};
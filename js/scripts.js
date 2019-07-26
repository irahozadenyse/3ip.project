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
  });
function got(){
  var nn=document.getElementById("nam").Value;
  var ee=document.getElementById("em").value;
  var cc=document.getElementById("comment").value;


  if(nn===name){
    alert("thank you")
  }
  else if(ee===email ){
    alert("thank you")
}
else if(cc==="Your message here"){
  alert("thank you")
}
else{
  alert("start again")
}
}






$(document).ready(function(){
  $("#work1").click(function(){
    $(".wrd1").hide();
    $("#im1").show();
  });
$("#work1").hover(function(){
  $(this).css({opacity:.3});
  $(this).fadein();
},function(){
  $(this).stop().css({opacity:1})
  $(this).fadeout();
});
$("#work2").hover(function(){
  $(this).css({opacity:.3});
  $(this).fadein();
},function(){
  $(this).stop().css({opacity:1})
  $(this).fadeout();
});
$("#work3").hover(function(){
  $(this).css({opacity:.3});
  $(this).fadein();
},function(){
  $(this).stop().css({opacity:1})
  $(this).fadeout();
});
$("#work4").hover(function(){
  $(this).css({opacity:.3});
  $(this).fadein();
},function(){
  $(this).stop().css({opacity:1})
  $(this).fadeout();
});
$("#work5").hover(function(){
  $(this).css({opacity:.3});
  $(this).fadein();
},function(){
  $(this).stop().css({opacity:1})
  $(this).fadeout();
});
$("#work6").hover(function(){
  $(this).css({opacity:.3});
  $(this).fadein();
},function(){
  $(this).stop().css({opacity:1})
  $(this).fadeout();
});
$("#work7").hover(function(){
  $(this).css({opacity:.3});
  $(this).fadein();
},function(){
  $(this).stop().css({opacity:1})
  $(this).fadeout();
});
$("#work8").hover(function(){
  $(this).css({opacity:.3});
  $(this).fadein();
},function(){
  $(this).stop().css({opacity:1})
  $(this).fadeout();
});
});
/* Prototype of simple mario-like game with jQuery */

var mario_bgd1 = new Audio('Mario_Music/Mario_bgd-music.mp4');
var mario_bgd2 = new Audio('Mario_Music/Mario_bgd-music.ogg');
var mario_bgd3 = new Audio('Mario_Music/Mario_bgd-music.wav');
var mario_music_jump1 = new Audio('Mario_Music/Mario_music_jump.mp4');
var mario_music_jump2 = new Audio('Mario_Music/Mario_music_jump.ogg');
var mario_music_jump3 = new Audio('Mario_Music/Mario_music_jump.wav');
var mario_music_hit1 = new Audio('Mario_Music/Mario_music-Hit.mp4');
var mario_music_hit2 = new Audio('Mario_Music/Mario_music-Hit.ogg');
var mario_music_hit3 = new Audio('Mario_Music/Mario_music-Hit.wav');
var mario_receive_gift_popup1 = new Audio('Mario_Music/Mario_receive_gift_popup.mp4');
//var mario_receive_gift_popup2 = new Audio('Mario_Music/Mario_receive_gift_popup.ogg');
var mario_receive_gift_popup3 = new Audio('Mario_Music/Mario_receive_gift_popup.wav');



var x = 0;
var y = 0;
var mario = $(".mario");
var box = $(".box");
var box2 = $(".box2");
var box3 = $(".box3");

var rightClick = $(".right"); // Match the first div
var leftClick = $(".left"); // Match the first div
var TopClick = $(".top"); // Match the first div
var counter = 0;




$(TopClick).on("click", function () {
  // mario_music_jump1.play();
  // mario_music_jump2.play();
  // mario_music_jump3.play();
  
  
  y = y - 90;
  $(".mario").css("transform", "translate(" + x + "px," + y + "px)");
  var mario_top = mario.offset().top;
  var box_top = box.offset().top;
  var box_top2 = box2.offset().top;
  var box_top3 = box3.offset().top;
  //check for collision with coin box
  if (mario.offset().left + mario.width() / 2 > box.offset().left && mario.offset().top > box.offset().top) {
    if (
      mario.offset().left + mario.width() / 2 < box.offset().left + box.width()
    ) {


      //start box animation after 0.1s (time for mario's jump)
      setTimeout(function () {
        var t = "three";

        Updateds(t);
        mario_music_hit1.play();
        mario_music_hit2.play();
        mario_music_hit3.play();
        

        $("#one").show();
        $(".coin").addClass("coin_animation");
        $(".box").addClass("box_animation");
      }, 100);

      //show the winner title screen
      // setTimeout(function() {
      //   $(".title").removeClass("hide");
      // }, 500);


    }
  }

  //check for collision with coin box
  if (mario.offset().left + mario.width() / 2 > box2.offset().left && mario.offset().top > box2.offset().top) {
    if (
      mario.offset().left + mario.width() / 2 < box2.offset().left + box2.width()
    ) {

      //start box2 animation after 0.1s (time for mario's jump)
      setTimeout(function () {

        var t = "one";

        Updateds(t);
        mario_music_hit1.play();
        mario_music_hit2.play();
        mario_music_hit3.play();

        $("#two").show();
        $(".coin2").addClass("coin_animation");
        $(".box2").addClass("box_animation");
      }, 100);

      //show the winner title screen
      // setTimeout(function() {
      //   $(".title").removeClass("hide");
      // }, 500);
    }
  }

  //check for collision with coin box
  if (mario.offset().left + mario.width() / 2 > box3.offset().left && mario.offset().top > box3.offset().top) {
    if (
      mario.offset().left + mario.width() / 2 < box3.offset().left + box3.width()) {
      // $('#my3').prop('checked', true);


      //start box3 animation after 0.1s (time for mario's jump)
      setTimeout(function () {
        var t = "two";

        Updateds(t);

        mario_music_hit1.play();
        mario_music_hit2.play();
        mario_music_hit3.play();

        $("#three").show();
        $(".coin3").addClass("coin_animation");
        $(".box3").addClass("box_animation");
      }, 100);

      //show the winner title screen
      // setTimeout(function() {
      //   $(".title").removeClass("hide");
      // }, 500);


      
      
    }
  }


  //reset mario jump
  // setTimeout(function () {
  //   y = y + 90;
  //   $(".mario").css("transform", "translate(" + x + "px," + y + "px)");

    
  // }, 200);
});


let valid = [];
function Updateds(t) {

   valid.push(t);
  if (valid.length==3) {
   
    valid=[];

    $('#winner').modal('show');
    mario_bgd1.pause();
    mario_bgd2.pause();
    mario_bgd3.pause();
    mario_receive_gift_popup1.play();
   // mario_receive_gift_popup2.play();
    mario_receive_gift_popup3.play();
  }
}


$(rightClick).on("click", function () {
  mario_bgd1.play();
  mario_bgd1.loop = true;

  x = x + 20;
  $(".mario").css("transform", "translate(" + x + "px," + y + "px)");
});
$(leftClick).on("click", function () {
  mario_bgd1.play();
  mario_bgd1.loop = true;
  x = x - 20;
  if (x >= 0) {
    $(".mario").css("transform", "translate(" + x + "px," + y + "px)");
  } else {
    x = 0;
  }
});



//on keydown event, check if it's left arrow or right arrow
$(document).keydown(function (e,) {
  //console.log(e);


  //if right, translate X +20px to mario
  if (e.keyCode == "39") {
    x = x + 20;
    $(".mario").css("transform", "translate(" + x + "px," + y + "px)");
  }




  //if left, translate X -20px to mario - check to keep mario in the window (> 0px)
  if (e.keyCode == "37") {
    x = x - 20;
    if (x >= 0) {
      $(".mario").css("transform", "translate(" + x + "px," + y + "px)");
    } else {
      x = 0;
    }
  }
  //if up, translate Y -90px to mario





  if (e.keyCode == "38") {

  }








});


//reset game
$(".title a").click(function () {
  x = 0;
  y = 0;
  $(".mario").css("transform", "translate(0px,0px)");
  $(".coin").removeClass("coin_animation");
  $(".box").removeClass("box_animation");
  setTimeout(function () {
    $(".title").addClass("hide");
  }, 100);
});



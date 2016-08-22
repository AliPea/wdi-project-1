// 
// Requirements: (of which I'm usured about!)
//
// 1. Mancala board: picture 
// 2. Animation: stones to move across the board
// 3. Stones: 12 colored pebbles
//----------------------------------------------------------------------------------
// Pseudo code - Mancala
//
// Game logic:
// 1. Player chooses if wants to play single with computer or with a friend
// 2. NEW window loads and board and pebbles pre set up in each pit
// 3. Player chooses a pit on his side to pick up the 4 pebbles from
// 4. Moving in a counter-clockwise direction, player deposits one 
//    stone in each pit.
// 5. IF you run into your own store you keep one pebble
// 6. IF you run into the opponent's store skip it and deposit your stone in your 
//    next hole
// 7. If the last stone you deposit is in your own store, you get a FREE TURN
// 8. if the last stone you deposit is in a empty hole on your side, you win that 
//    stone and any stones on the opponent's side!
// 9. END: the game ends when all the holes on one side are empty. Player with 
//    stones left in any of their holes collects those pebbles
// 10. Winner: count the stones and whomever has got the most wins!
// 11. Winner message: “Great, kid. Don’t get cocky”
// ---------------------------------------------------------------------------------
// Minimum project requirements:
//
// 1. The game must work, 
// 2. Switch turns
// 3. Players must be able to win
// 4. Upload on Heroku and Github
// 5. HTML && CSS 

function randomHex(){
  return '#'+Math.floor(Math.random()*16777215).toString(16);
}

$(function(){
  var $lis          = $("li");
  var lisArray      = [].slice.call($lis);
  var $pits         = $(".pit");
  var $player1Store = $(".player1");
  var $player2Store = $(".player2");
  var $start        = $("#start");

  $player1Store.html();
  $player2Store.html();

  $.each($pits, function(i, pit) {
    for (var i = 0; i < 4; i++) {
      var $pebble = $("<div class='pebble'></div>");
      $pebble
        .css("background", randomHex())
        .css("top", Math.floor(Math.random() * 80) + 20)
        .css("left", Math.floor(Math.random() * 60) + 20)
        .appendTo(pit);
    }
  });
  

  $('#start').on('click', function() {
    $.each($lis, function(index, element) {
      $(element).css("background", "green");
    });
  });

  var audio = new Audio("audio/emp_lordvaderrise.mp3");
  audio.play();

  $start.on("click", function(){
    var buttonAudio = new Audio("audio/Muchfear.mp3") ;
    buttonAudio.play();
  })

  $pits.on("click", function(){
    var chosen    = lisArray.indexOf(this);
    var divs     = $(this).find(".pebble");
    console.log(divs);
    var direction; 

    $(this).html("");

    if (chosen < 14 && chosen > 7) {
      for (var i = 0; i < divs.length; i++) {
        var nextIndex = chosen+i+1;
        if (nextIndex > 13) {
          nextIndex = 8 - (nextIndex - 13);
          console.log(nextIndex);
        }
        var $nextLi   = $($lis[nextIndex]);
        // $nextLi.html(parseInt($nextLi.html()) + 1);
        $(divs[i]).detach().appendTo($nextLi);

        if (nextIndex === 7 || nextIndex === 0) {
          $nextLi.addClass("animated bounce");
          // $nextLi.on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
          //   $nextLi.removeClass("animated bounce");
          // });
        }
      }
    } else {
      for (var i = 0; i < divs.length; i++) {
        var nextIndex = chosen-i-1;

        if (nextIndex < 0) {
          nextIndex = 7 + Math.abs(nextIndex);
          console.log(nextIndex);
        }
        var $nextLi   = $($lis[nextIndex]);
        // $nextLi.html(parseInt($nextLi.html()) + 1);
        $(divs[i]).detach().appendTo($nextLi);

        if (nextIndex === 7 || nextIndex === 0) {
          $nextLi.addClass("animated bounce");
          // $nextLi.on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
          //   $nextLi.removeClass("animated bounce");
          // });
        }
      }
    }
  });
});
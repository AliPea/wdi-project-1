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

// window.onload = init;

// var gameBoard,
//     buttons
//     message
//     turnsPlayer
//     finished 
// var pits[0,0,0,0,0,0];
// var storeBot
// var storePlayer

//                 ]
// // to determine the player's turns  
// //  function playSquare(){
// //  if (this.innerHTML !== "" || finished) return;
// //  var player = (turns % 2 === 0) ? "t" : "h";
// //  updateSquare(this, player);
// //  var moves  = (player === "t") ? xMoves : oMoves;
// //  storeMove(moves, this);
// //  turns++;
// //  checkResult(moves, player);
// //}
// for (var i = 0, pits = document.getElementById(""); i < pits.length; i++) {
//   pits[i].addEventListener("click", function() {
    
//   });
// }
// document.addEventListener( "DOMContentLoaded", ready, false )

$(function(){


  var audio = new Audio("./audio/emp_lordvaderrise.mp3");
  console.log(audio);
  audio.play();

  // var buttonAudio = new Audio("http:/audio/Muchfear.mp3") ;

  // buttonAudio.oncanplaythrough = function(){
  // buttonAudio.play();
  // }

  // buttonAudio.loop = true;

  // buttonAudio.onended = function(){
  // audio.play();
  // }

  var $lis          = $("li");
  var lisArray      = [].slice.call($lis);
  var $pits         = $(".pit");
  var $player1Store = $(".player1");
  var $player2Store = $(".player2");

  $player1Store.html(0);
  $player2Store.html(0);
  $pits.html(4);

  $('#start').on('click', function() {

    $.each($lis, function(index, element) {
      $(element).css("background", "green");
    });
  });

  $pits.on("click", function(){


    console.log($(this).html())

    if (index ===13 && this.turn === this.player1) {
    index0; 
  }
    else if (index === 6 && this.turn === this.player2) { 
    index ++;
  }

    // var next = $(this).nextUntil($(this).html() - 1)
    // console.log(next);

    // console.log(next, next2, next3, next4);

    // var array = [next, next2, next3, next4];

    // for (var i = 0; i < array.length; i++) {
    //   var $element = $(array[i][0])
    //   console.log($element);
    //   $element.text(parseInt($element.text()) + 1);
    // }




    // for (var i = 0; i < 4; i++) {
    //   console.log($(this).next());
    // }

    // var number = parseInt($(this).text());
    // $(this).text("0");

    // var next = $(this).next()
    // $next.text()

        // var count = parseInt($(this).html());
    // $(this).html(0);
    // var index = lisArray.indexOf(this);

    // for (var i = 0; i < count; i++) {
    //   var nextLiIndex;
    //   if (index <= 7) nextLiIndex = index - i - 1;
    //   if (index >= 7) nextLiIndex = index + i + 1;

    //   $($lis[nextLiIndex]).html(parseInt($($lis[nextLiIndex]).html()) + 1);
    // }
  });
});
$(document).ready(function(){

// GLOBAL VARIABLES

var wins = 0;
var losses = 0;
var randomNum = 0;
var currentScore = 0;
var gem1 = 0;
var gem2 = 0;
var gem3 = 0;
var gem4 = 0;

// FUNCTIONS

var getRandom = function(min, max) {
    return Math.floor(Math.random()*(max-min+1)+min);
    }

//restart game
var startGame = function() {
    //reset current score
    $(".score").html = 0;
    //set new target score (19 - 120)
    randomNum = getRandom (19, 120);
    //$(".random").html = getRandom (19,120);
    //set different values for each crystal (1 - 12)
    gem1 = getRandom(1,12);
    gem2 = getRandom(1,12);
    gem3 = getRandom(1,12);
    gem4 = getRandom(1,12);
}

//determining a win or loss
var winlose = function () {
    if (currentScore === randomNum) {
        wins++;
        startGame();
    } else if (currentScore > randomNum) {
        losses++;
        startGame();
    }
}

// MAIN PROCESS
startGame();

$(".score").html(currentScore);
$(".random").html(randomNum);
$(".win-loss.p:first").html(wins);
$(".win-loss.p:last").html(losses);

$("#gem1").click(function() {
    currentScore += gem1;
    winlose;
    console.log(currentScore);
    
  });

$("#gem2").click(function() {
    currentScore += gem2;
    winlose;
    console.log(currentScore);

  });

$("#gem3").click(function() {
    currentScore += gem3;
    winlose;
    console.log(currentScore);
    
  });

$("#gem4").click(function() {
    currentScore += gem4;
    winlose;
    console.log(currentScore);
    
  });

  


});

$(document).ready(function(){

// ********** GLOBAL VARIABLES

var wins = 0;
var losses = 0;
var randomNum = 0;
var currentScore = 0;
var gem1 = 0;
var gem2 = 0;
var gem3 = 0;
var gem4 = 0;

// *********** FUNCTIONS

//randomize crystals + target score
var getRandom = function(min, max) {
    return Math.floor(Math.random()*(max-min+1)+min);
    }

//restart game
var startGame = function() {
    //reset current score
    console.log("we start game");
    //set new target score (19 - 120)
    randomNum = getRandom (19, 120);
    currentScore = 0;
    $(".score").html(currentScore);
    $(".random").html(randomNum);
    //set different values for each crystal (1 - 12)
    $("#winsTotal").html(wins);
    $("#lossTotal").html(losses);
    gem1 = getRandom(1,12);
    gem2 = getRandom(1,12);
    gem3 = getRandom(1,12);
    gem4 = getRandom(1,12);
}

//determining a win or a loss
var winlose = function() {
    //console.log("win loss", currentScore, randomNum);
    if (currentScore === randomNum) {
        console.log("you win!");
        wins++;
        startGame();
    } else if (currentScore > randomNum) {
        console.log("you lose!");
        losses++;
        startGame();
    }
}

// ********** MAIN GAMEPLAY
startGame();

$("#gem1").click(function() {
    currentScore += gem1;
    winlose();
    $(".score").html(currentScore);
  });

$("#gem2").click(function() {
    currentScore += gem2;
    winlose();
    $(".score").html(currentScore);
  });

$("#gem3").click(function() {
    currentScore += gem3;
    winlose();
    $(".score").html(currentScore);    
  });

$("#gem4").click(function() {
    currentScore += gem4;
    winlose();
    $(".score").html(currentScore);    
  });

  


});

var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var started = false;

function nextSequence() {
  $("h1").html("Level " + level);
  level++;
  userClickedPattern.splice(0, userClickedPattern.length);

  randomNumber = Math.floor((Math.random() * 3));

  var randomChosenColour = buttonColors[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeIn(250).fadeOut(250).fadeIn(250);
  playSound(randomChosenColour);
}

function playSound(color) {
  var audio = new Audio('sounds/' + color + '.mp3');
  audio.play();
}

function animate(currentColor) {
  $("#" + currentColor).delay(0).addClass("pressed");
  setTimeout(function() {
    $("#" + currentColor).removeClass("pressed");
  }, 150);
}

function checkAnswer(currentColor) {

  if (gamePattern.length === userClickedPattern.length) {
    if (JSON.stringify(gamePattern) === JSON.stringify(userClickedPattern)) {
      setTimeout(function() {
        nextSequence();
      }, 1000);
    }
    else {
      var audio1 = new Audio('sounds/wrong.mp3');
      audio1.play();
      $("body").delay(0).addClass("game-over");
      setTimeout(function() {
        $("body").removeClass("game-over");
      }, 200);
      startOver();
    }
  }
}

function startOver() {
  level = 0;
  $("h1").html("Press A Key to Start");
  gamePattern.splice(0, gamePattern.length);
  userClickedPattern.splice(0, userClickedPattern.length);
  started = false;
}

$(".btn").click(function() {
  var userChoosenColor = $(this).attr("id");
  userClickedPattern.push(userChoosenColor);
  animate(userChoosenColor);
  playSound(userChoosenColor);
  console.log(userClickedPattern);
  checkAnswer(userChoosenColor)
});

$("body").keypress(function() {

  if (!started) {
    nextSequence();
    started = true;
  }
});

$(".play").click(function() {

  if (!started) {
    nextSequence();
    started = true;
  }
});

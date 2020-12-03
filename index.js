var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = []

function nextSequence(){
  randomNumber = Math.floor((Math.random() * 3) );

  var randomChosenColour = buttonColors[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeIn(250).fadeOut(250).fadeIn(250);
  playSound(randomChosenColour);

}

function playSound(color){

  var audio = new Audio('sounds/'+color+'.mp3');
  audio.play();

}

function animate(currentColor){
  $("#" + currentColor).delay(0).addClass("pressed");
  setTimeout( function(){
    $("#" + currentColor).removeClass("pressed");
  }, 150);


}

$(".btn").click( function() {

    var userChoosenColor = $(this).attr("id");
    userClickedPattern.push(userChoosenColor);
    animate(userChoosenColor);
    playSound(userChoosenColor);
    console.log(userClickedPattern);

});

$("body").keypress( function() {
    nextSequence();
});

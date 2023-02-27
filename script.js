// document.querySelector("#credits").classList.remove("hidden");

"use-strict";
console.log("hello JS");

window.addEventListener("load", gameStart);

let points = 0;
let lives = 0;
// let time = 120;

function start() {
  console.log("start is starting");

  // lav en start skærm med en start knap (og regler?)
  //   fjern hidden class på start_screen
  //   document.querySelector("#start_screen").classList.remove("hidden");
  // lav en start over button på level_complete og game_over
}

function gameStart() {
  console.log("game is starting");

  //   add falling class to elements instead of in html

  points = 0;
  lives = 3;

  // events for clicking
  document
    .querySelector("#amyHennig_container")
    .addEventListener("mousedown", clickAmyHennig);
  document
    .querySelector("#meganFox_container")
    .addEventListener("mousedown", clickMeganFox);
  document
    .querySelector("#kimSwift_container")
    .addEventListener("mousedown", clickKimSwift);
  document
    .querySelector("#corrinneYu_container")
    .addEventListener("mousedown", clickCorrinneYu);
  document
    .querySelector("#jadeRaymond_container")
    .addEventListener("mousedown", clickJadeRaymond);

  document
    .querySelector("#mileyCyrus_container")
    .addEventListener("mousedown", clickMileyCyrus);
  document
    .querySelector("#janeAusten_container")
    .addEventListener("mousedown", clickJaneAusten);
  document
    .querySelector("#liseNorgaard_container")
    .addEventListener("mousedown", clickLiseNorgaard);
  document
    .querySelector("#merylStreep_container")
    .addEventListener("mousedown", clickMerylStreep);
  document
    .querySelector("#janeFonda_container")
    .addEventListener("mousedown", clickJaneFonda);
}

// Adding animations to the clicking

function clickAmyHennig() {
  console.log("Amy Hennig clicked");

  // remove event so you can only mousedown once at a time
  document
    .querySelector("#amyHennig_container")
    .removeEventListener("mousedown", clickAmyHennig);

  // pausing amyHennig
  document.querySelector("#amyHennig_container").classList.add("paused");

  // adding the clickGood animation to amyHennig
  document.querySelector("#amyHennig_sprite").classList.add("clickGood");

  // when animation clickGood done, restart falling animation
  document
    .querySelector("#amyHennig_container")
    .addEventListener("animationend", restartAmyHennig);

  // adding points + life
  getPoints();
  getPoints();
  plusLife();
}

function clickMeganFox() {
  console.log("Megan Fox clicked");

  // remove event so you can only mousedown once at a time
  document
    .querySelector("#meganFox_container")
    .removeEventListener("mousedown", clickMeganFox);

  // pausing meganFox
  document.querySelector("#meganFox_container").classList.add("paused");

  // adding the clickGood animation to meganFox
  document.querySelector("#meganFox_sprite").classList.add("clickGood");

  // when animation clickGood done, restart falling animation
  document
    .querySelector("#meganFox_container")
    .addEventListener("animationend", restartMeganFox);

  // adding points
  getPoints();
  getPoints();
}

function clickKimSwift() {
  console.log("Kim Swift clicked");

  // remove event so you can only mousedown once at a time
  document
    .querySelector("#kimSwift_container")
    .removeEventListener("mousedown", clickKimSwift);

  // pausing kimSwift
  document.querySelector("#kimSwift_container").classList.add("paused");

  // adding the clickGood animation to kimSwift
  document.querySelector("#kimSwift_sprite").classList.add("clickGood");

  // when animation clickGood done, restart falling animation
  document
    .querySelector("#kimSwift_container")
    .addEventListener("animationend", restartKimSwift);

  // adding points
  getPoints();
  getPoints();
}

function clickCorrinneYu() {
  console.log("Corrinne Yu clicked");

  // remove event so you can only mousedown once at a time
  document
    .querySelector("#corrinneYu_container")
    .removeEventListener("mousedown", clickCorrinneYu);

  // pausing corrinneYu
  document.querySelector("#corrinneYu_container").classList.add("paused");

  // adding the clickGood animation to corrinneYu
  document.querySelector("#corrinneYu_sprite").classList.add("clickGood");

  // when animation clickGood done, restart falling animation
  document
    .querySelector("#corrinneYu_container")
    .addEventListener("animationend", restartCorrinneYu);

  // adding points
  getPoints();
  getPoints();
}

function clickJadeRaymond() {
  console.log("Jade Raymond clicked");

  // remove event so you can only mousedown once at a time
  document
    .querySelector("#jadeRaymond_container")
    .removeEventListener("mousedown", clickJadeRaymond);

  // pausing jadeRaymond
  document.querySelector("#jadeRaymond_container").classList.add("paused");

  // adding the clickGood animation to jadeRaymond
  document.querySelector("#jadeRaymond_sprite").classList.add("clickGood");

  // when animation clickGood done, restart falling animation
  document
    .querySelector("#jadeRaymond_container")
    .addEventListener("animationend", restartJadeRaymond);

  // adding points
  getPoints();
  getPoints();
}

// Restarting animations

function restartAmyHennig() {
  console.log("restarting Amy Hennig animation");

  //removing the restart event
  document
    .querySelector("#amyHennig_container")
    .removeEventListener("animationend", restartAmyHennig);

  // removing the clickGood animation class
  document.querySelector("#amyHennig_sprite").classList.remove("clickGood");

  // removing the pause animation class
  document.querySelector("#amyHennig_container").classList.remove("paused");

  // restarting the falling animation
  document.querySelector("#amyHennig_container").classList.remove("falling");
  document.querySelector("#amyHennig_container").offsetLeft;
  document.querySelector("#amyHennig_container").classList.add("falling");

  // restarting the event looking for clicks on amyHennig
  document
    .querySelector("#amyHennig_container")
    .addEventListener("mousedown", clickAmyHennig);
}

function restartMeganFox() {
  console.log("restarting meganFox animation");

  //removing the restart event
  document
    .querySelector("#meganFox_container")
    .removeEventListener("animationend", restartMeganFox);

  // removing the clickGood animation class
  document.querySelector("#meganFox_sprite").classList.remove("clickGood");

  // removing the pause animation class
  document.querySelector("#meganFox_container").classList.remove("paused");

  // restarting the falling animation
  document.querySelector("#meganFox_container").classList.remove("falling2");
  document.querySelector("#meganFox_container").offsetLeft;
  document.querySelector("#meganFox_container").classList.add("falling2");

  // restarting the event looking for clicks on meganFox
  document
    .querySelector("#meganFox_container")
    .addEventListener("mousedown", clickMeganFox);
}

function restartKimSwift() {
  console.log("restarting kimSwift animation");

  //removing the restart event
  document
    .querySelector("#kimSwift_container")
    .removeEventListener("animationend", restartKimSwift);

  // removing the clickGood animation class
  document.querySelector("#kimSwift_sprite").classList.remove("clickGood");

  // removing the pause animation class
  document.querySelector("#kimSwift_container").classList.remove("paused");

  // restarting the falling animation
  document.querySelector("#kimSwift_container").classList.remove("falling2");
  document.querySelector("#kimSwift_container").offsetLeft;
  document.querySelector("#kimSwift_container").classList.add("falling2");

  // restarting the event looking for clicks on kimSwift
  document
    .querySelector("#kimSwift_container")
    .addEventListener("mousedown", clickKimSwift);
}

function restartCorrinneYu() {
  console.log("restarting corrinneYu animation");

  //removing the restart event
  document
    .querySelector("#corrinneYu_container")
    .removeEventListener("animationend", restartCorrinneYu);

  // removing the clickGood animation class
  document.querySelector("#corrinneYu_sprite").classList.remove("clickGood");

  // removing the pause animation class
  document.querySelector("#corrinneYu_container").classList.remove("paused");

  // restarting the falling animation
  document.querySelector("#corrinneYu_container").classList.remove("falling3");
  document.querySelector("#corrinneYu_container").offsetLeft;
  document.querySelector("#corrinneYu_container").classList.add("falling3");

  // restarting the event looking for clicks on corrinneYu
  document
    .querySelector("#corrinneYu_container")
    .addEventListener("mousedown", clickCorrinneYu);
}

function restartJadeRaymond() {
  console.log("restarting jadeRaymond animation");

  //removing the restart event
  document
    .querySelector("#jadeRaymond_container")
    .removeEventListener("animationend", restartJadeRaymond);

  // removing the clickGood animation class
  document.querySelector("#jadeRaymond_sprite").classList.remove("clickGood");

  // removing the pause animation class
  document.querySelector("#jadeRaymond_container").classList.remove("paused");

  // restarting the falling animation
  document.querySelector("#jadeRaymond_container").classList.remove("falling3");
  document.querySelector("#jadeRaymond_container").offsetLeft;
  document.querySelector("#jadeRaymond_container").classList.add("falling3");

  // restarting the event looking for clicks on jadeRaymond
  document
    .querySelector("#jadeRaymond_container")
    .addEventListener("mousedown", clickJadeRaymond);
}

// Getting points

function getPoints() {
  console.log("you're getting points");

  //adding one point
  points++;
  console.log("you have " + points + " points");

  // calling the displayPoints function
  displayPoints();
}

function displayPoints() {
  console.log("display points:" + points);

  // showing the points on the game screen
  document.querySelector("#score").textContent = "Points: " + points;
}

// Losing and gaining lives

function minusLife() {
  console.log("you lost a life");

  //calling the displayMinusLife function
  displayMinusLife();

  // removing the life
  lives--;
  console.log("you have " + lives + " lives left");
}

function displayMinusLife() {
  console.log("display lost lives:" + lives);

  document.querySelector("#heart" + lives).classList.remove("loseLife");
  document.querySelector("#heart" + lives).classList.add("addLife");
}

function plusLife() {
  console.log("you've got a new life");

  lives++;
  displayPlusLife();
  console.log("you have " + lives + " lives left");
}

function displayPlusLife() {
  document.querySelector("#heart" + lives).classList.remove("addLife");
  document.querySelector("#heart" + lives).classList.add("loseLife");
}

// End of game

function level_complete() {
  console.log("You win!");
}

function game_over() {
  console.log("You lose :'(");
}

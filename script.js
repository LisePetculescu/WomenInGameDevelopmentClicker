// document.querySelector("#credits").classList.remove("hidden");

"use-strict";
console.log("hello JS");

window.addEventListener("load", start);

let points = 0;
let lives = 0;

function start() {
  console.log("start is starting");

  // remove level complete screen
  document.querySelector("#level_complete").classList.add("hidden");
  // hide credits page
  document.querySelector("#credits").classList.add("hidden");
  // show start screen
  document.querySelector("#start_screen").classList.remove("hidden");
  // hide game screen
  document.querySelector("#game").classList.add("hidden");
  // add function to start button
  document.querySelector("#startGameBTN").addEventListener("click", gameStart);
  // add function to credits button
  document.querySelector("#creditsBTN").addEventListener("click", creditsPage);
}

function gameStart() {
  console.log("game is starting");

  // remove game over screen
  document.querySelector("#game_over").classList.add("hidden");
  // remove start screen
  document.querySelector("#start_screen").classList.add("hidden");
  // show game screen
  document.querySelector("#game").classList.remove("hidden");

  resetLives();
  resetPoints();

  //   add falling class to elements instead of in html
  addFalling();

  // events for clicking
  addClickEvent();

//  start timer
startTimer();
}

function addFalling() {
  console.log("addFalling");

  document
    .querySelectorAll(".fall1")
    .forEach((fall1) => fall1.classList.add("falling"));
  document
    .querySelectorAll(".fall2")
    .forEach((fall2) => fall2.classList.add("falling2"));
  document
    .querySelectorAll(".fall3")
    .forEach((fall3) => fall3.classList.add("falling3"));
}

function addClickEvent() {
  console.log("addClickEvent");
  document
    .querySelectorAll(".good")
    .forEach((good) => good.addEventListener("mousedown", clickGood));
  document
    .querySelectorAll(".bad")
    .forEach((bad) => bad.addEventListener("mousedown", clickBad));

  // document
  //   .querySelector("#amyHennig_container")
  //   .addEventListener("mousedown", clickAmyHennig);
  // document
  //   .querySelector("#meganFox_container")
  //   .addEventListener("mousedown", clickMeganFox);
  // document
  //   .querySelector("#kimSwift_container")
  //   .addEventListener("mousedown", clickKimSwift);
  // document
  //   .querySelector("#corrinneYu_container")
  //   .addEventListener("mousedown", clickCorrinneYu);
  // document
  //   .querySelector("#jadeRaymond_container")
  //   .addEventListener("mousedown", clickJadeRaymond);

  // document
  //   .querySelector("#mileyCyrus_container")
  //   .addEventListener("mousedown", clickMileyCyrus);
  // document
  //   .querySelector("#janeAusten_container")
  //   .addEventListener("mousedown", clickJaneAusten);
  // document
  //   .querySelector("#liseNorgaard_container")
  //   .addEventListener("mousedown", clickLiseNorgaard);
  // document
  //   .querySelector("#merylStreep_container")
  //   .addEventListener("mousedown", clickMerylStreep);
  // document
  //   .querySelector("#janeFonda_container")
  //   .addEventListener("mousedown", clickJaneFonda);
}

// Adding animations to the clicking

function clickGood() {
  console.log("clicked Good");
  let good = this;
  console.log(good);

  // remove event so you can only mousedown once at a time
  good.removeEventListener("mousedown", clickGood);

  // pausing animation
  good.classList.add("paused");
  // good.classList.remove("falling");

  // adding the clickGood animation to amyHennig
  good.querySelector("img").classList.add("clickGoodMove");

  // when animation clickGood done, restart falling animation
  good.addEventListener("animationend", restartAll);

  // adding points + life
  if (good == document.querySelector(".pointsLife") && lives < 3) {
    plusLife();
  }
  get2Points();

  if (points >= 300) {
    level_complete();
  }

  // // remove event so you can only mousedown once at a time
  // document
  //   .querySelector("#amyHennig_container")
  //   .removeEventListener("mousedown", clickAmyHennig);

  // // pausing amyHennig
  // document.querySelector("#amyHennig_container").classList.add("paused");

  // // adding the clickGood animation to amyHennig
  // document.querySelector("#amyHennig_sprite").classList.add("clickGood");

  // // when animation clickGood done, restart falling animation
  // document
  //   .querySelector("#amyHennig_container")
  //   .addEventListener("animationend", restartAmyHennig);

  // // adding points + life
  // getPoints();
  // getPoints();
  // plusLife();
}

function clickBad() {
  console.log("clicked bad");
  let bad = this;
  console.log(bad);

  // remove event so you can only mousedown once at a time
  bad.removeEventListener("mousedown", clickBad);

  // pausing animation
  bad.classList.add("paused");
  // bad.classList.remove("falling");

  // adding the clickGood animation to amyHennig
  bad.querySelector("img").classList.add("clickBadMove");

  // when animation clickGood done, restart falling animation
  bad.addEventListener("animationend", restartAll);

  // losing points + life
  if (bad == document.querySelector(".lose20points") && lives >= 0) {
    losing20Points();
  } else if (bad == document.querySelector(".lose40points") && lives >= 0) {
    losing40Points();
  } else {
    losing60Points();
  }
  minusLife();
}

// restarting animations

function restartAll() {
  console.log("restarting animation");
  let all = this;

  //removing the restart event
  all.removeEventListener("animationend", restartAll);

  // removing the clickGood animation class
  all.querySelector("img").classList.remove("clickGoodMove");
  all.querySelector("img").classList.remove("clickBadMove");

  // removing the pause animation class
  all.classList.remove("paused");

  // restarting the falling animation
  all.classList.remove("falling", "falling2", "falling3");
  all.offsetLeft;
  if (all == document.querySelector(".fall1")) {
    all.classList.add("falling");
  } else if (all == document.querySelector(".fall2")) {
    all.classList.add("falling2");
  } else {
    all.classList.add("falling3");
  }

  // restarting the event looking for clicks on amyHennig
  document
    .querySelectorAll(".good")
    .forEach((good) => good.addEventListener("mousedown", clickGood));

  document
    .querySelectorAll(".bad")
    .forEach((bad) => bad.addEventListener("mousedown", clickBad));
}

// adding and removing points

function get2Points() {
  console.log("you're getting points");

  //adding one point
  points += 30;
  console.log("you have " + points + " points");

  // calling the displayPoints function
  displayPoints();
}

function losing20Points() {
  console.log("you're losing 20 points");

  //adding one point
  points -= 20;
  console.log("you have " + points + " points left");

  // calling the displayPoints function
  displayPoints();
}

function losing40Points() {
  console.log("you're losing 40 points");

  //adding one point
  points -= 40;
  console.log("you have " + points + " points left");

  // calling the displayPoints function
  displayPoints();
}

function losing60Points() {
  console.log("you're losing 60 points");

  //adding one point
  points -= 60;
  console.log("you have " + points + " points left");

  // calling the displayPoints function
  displayPoints();
}

// function clickMeganFox() {
//   console.log("Megan Fox clicked");

//   // remove event so you can only mousedown once at a time
//   document
//     .querySelector("#meganFox_container")
//     .removeEventListener("mousedown", clickMeganFox);

//   // pausing meganFox
//   document.querySelector("#meganFox_container").classList.add("paused");

//   // adding the clickGood animation to meganFox
//   document.querySelector("#meganFox_sprite").classList.add("clickGood");

//   // when animation clickGood done, restart falling animation
//   document
//     .querySelector("#meganFox_container")
//     .addEventListener("animationend", restartMeganFox);

//   // adding points
//   getPoints();
//   getPoints();
// }

// function clickKimSwift() {
//   console.log("Kim Swift clicked");

//   // remove event so you can only mousedown once at a time
//   document
//     .querySelector("#kimSwift_container")
//     .removeEventListener("mousedown", clickKimSwift);

//   // pausing kimSwift
//   document.querySelector("#kimSwift_container").classList.add("paused");

//   // adding the clickGood animation to kimSwift
//   document.querySelector("#kimSwift_sprite").classList.add("clickGood");

//   // when animation clickGood done, restart falling animation
//   document
//     .querySelector("#kimSwift_container")
//     .addEventListener("animationend", restartKimSwift);

//   // adding points
//   getPoints();
//   getPoints();
// }

// function clickCorrinneYu() {
//   console.log("Corrinne Yu clicked");

//   // remove event so you can only mousedown once at a time
//   document
//     .querySelector("#corrinneYu_container")
//     .removeEventListener("mousedown", clickCorrinneYu);

//   // pausing corrinneYu
//   document.querySelector("#corrinneYu_container").classList.add("paused");

//   // adding the clickGood animation to corrinneYu
//   document.querySelector("#corrinneYu_sprite").classList.add("clickGood");

//   // when animation clickGood done, restart falling animation
//   document
//     .querySelector("#corrinneYu_container")
//     .addEventListener("animationend", restartCorrinneYu);

//   // adding points
//   getPoints();
//   getPoints();
// }

// function clickJadeRaymond() {
//   console.log("Jade Raymond clicked");

//   // remove event so you can only mousedown once at a time
//   document
//     .querySelector("#jadeRaymond_container")
//     .removeEventListener("mousedown", clickJadeRaymond);

//   // pausing jadeRaymond
//   document.querySelector("#jadeRaymond_container").classList.add("paused");

//   // adding the clickGood animation to jadeRaymond
//   document.querySelector("#jadeRaymond_sprite").classList.add("clickGood");

//   // when animation clickGood done, restart falling animation
//   document
//     .querySelector("#jadeRaymond_container")
//     .addEventListener("animationend", restartJadeRaymond);

//   // adding points
//   getPoints();
//   getPoints();
// }

// Restarting animations

// function restartAmyHennig() {
//   console.log("restarting Amy Hennig animation");

//   //removing the restart event
//   document
//     .querySelector("#amyHennig_container")
//     .removeEventListener("animationend", restartAmyHennig);

//   // removing the clickGood animation class
//   document.querySelector("#amyHennig_sprite").classList.remove("clickGood");

//   // removing the pause animation class
//   document.querySelector("#amyHennig_container").classList.remove("paused");

//   // restarting the falling animation
//   document.querySelector("#amyHennig_container").classList.remove("falling");
//   document.querySelector("#amyHennig_container").offsetLeft;
//   document.querySelector("#amyHennig_container").classList.add("falling");

//   // restarting the event looking for clicks on amyHennig
//   document
//     .querySelector("#amyHennig_container")
//     .addEventListener("mousedown", clickAmyHennig);
// }

// function restartMeganFox() {
//   console.log("restarting meganFox animation");

//   //removing the restart event
//   document
//     .querySelector("#meganFox_container")
//     .removeEventListener("animationend", restartMeganFox);

//   // removing the clickGood animation class
//   document.querySelector("#meganFox_sprite").classList.remove("clickGood");

//   // removing the pause animation class
//   document.querySelector("#meganFox_container").classList.remove("paused");

//   // restarting the falling animation
//   document.querySelector("#meganFox_container").classList.remove("falling2");
//   document.querySelector("#meganFox_container").offsetLeft;
//   document.querySelector("#meganFox_container").classList.add("falling2");

//   // restarting the event looking for clicks on meganFox
//   document
//     .querySelector("#meganFox_container")
//     .addEventListener("mousedown", clickMeganFox);
// }

// function restartKimSwift() {
//   console.log("restarting kimSwift animation");

//   //removing the restart event
//   document
//     .querySelector("#kimSwift_container")
//     .removeEventListener("animationend", restartKimSwift);

//   // removing the clickGood animation class
//   document.querySelector("#kimSwift_sprite").classList.remove("clickGood");

//   // removing the pause animation class
//   document.querySelector("#kimSwift_container").classList.remove("paused");

//   // restarting the falling animation
//   document.querySelector("#kimSwift_container").classList.remove("falling2");
//   document.querySelector("#kimSwift_container").offsetLeft;
//   document.querySelector("#kimSwift_container").classList.add("falling2");

//   // restarting the event looking for clicks on kimSwift
//   document
//     .querySelector("#kimSwift_container")
//     .addEventListener("mousedown", clickKimSwift);
// }

// function restartCorrinneYu() {
//   console.log("restarting corrinneYu animation");

//   //removing the restart event
//   document
//     .querySelector("#corrinneYu_container")
//     .removeEventListener("animationend", restartCorrinneYu);

//   // removing the clickGood animation class
//   document.querySelector("#corrinneYu_sprite").classList.remove("clickGood");

//   // removing the pause animation class
//   document.querySelector("#corrinneYu_container").classList.remove("paused");

//   // restarting the falling animation
//   document.querySelector("#corrinneYu_container").classList.remove("falling3");
//   document.querySelector("#corrinneYu_container").offsetLeft;
//   document.querySelector("#corrinneYu_container").classList.add("falling3");

//   // restarting the event looking for clicks on corrinneYu
//   document
//     .querySelector("#corrinneYu_container")
//     .addEventListener("mousedown", clickCorrinneYu);
// }

// function restartJadeRaymond() {
//   console.log("restarting jadeRaymond animation");

//   //removing the restart event
//   document
//     .querySelector("#jadeRaymond_container")
//     .removeEventListener("animationend", restartJadeRaymond);

//   // removing the clickGood animation class
//   document.querySelector("#jadeRaymond_sprite").classList.remove("clickGood");

//   // removing the pause animation class
//   document.querySelector("#jadeRaymond_container").classList.remove("paused");

//   // restarting the falling animation
//   document.querySelector("#jadeRaymond_container").classList.remove("falling3");
//   document.querySelector("#jadeRaymond_container").offsetLeft;
//   document.querySelector("#jadeRaymond_container").classList.add("falling3");

//   // restarting the event looking for clicks on jadeRaymond
//   document
//     .querySelector("#jadeRaymond_container")
//     .addEventListener("mousedown", clickJadeRaymond);
// }

// Getting points

// function getPoints() {
//   console.log("you're getting points");

//   //adding one point
//   points++;
//   console.log("you have " + points + " points");

//   // calling the displayPoints function
//   displayPoints();
// }

// function losePoints() {
//   console.log("you're losing points");

//   //adding one point
//   points--;
//   console.log("you have " + points + " points left");

//   // calling the displayPoints function
//   displayPoints();
// }

function displayPoints() {
  console.log("display points:" + points);

  // showing the points on the game screen
  document.querySelector("#score").textContent = "Lines of code: " + points;
}

// Losing and gaining lives

function minusLife() {
  console.log("you lost a life");

  //calling the displayMinusLife function
  displayMinusLife();
  // removing the life
  lives--;
  console.log("you have " + lives + " lives left");

  if (lives <= 0) {
    game_over();
  }
}

function displayMinusLife() {
  console.log("display lost lives:" + lives);

  document.querySelector("#heart" + lives).classList.remove("addLife");
  document.querySelector("#heart" + lives).classList.add("loseLife");
}

function plusLife() {
  console.log("you've got a new life");
  console.log(lives);
  lives++;
  displayPlusLife();
  console.log("you have " + lives + " lives left");
}

function displayPlusLife() {
  document.querySelector("#heart" + lives).classList.remove("loseLife");
  document.querySelector("#heart" + lives).classList.add("addLife");
}

// timer
function startTimer() {
   
    document.querySelector("#time_sprite").classList.add("shrink");
    document.querySelector("#time_sprite").addEventListener("animationend", deadline);
}

function deadline() {
    console.log("End of deadline!");

    if (points >= 300) {
        level_complete();
    } else {
        game_over();
    }
}


// End of game

function level_complete() {
  console.log("You win!");
  document.querySelector("#level_complete").classList.remove("hidden");
  document.querySelector("#game").classList.add("hidden");

  stopGame();

  // back to start screen button
  document.querySelector("#backBTN").addEventListener("click", start);
}

function game_over() {
  console.log("You lose :'(");
  document.querySelector("#game_over").classList.remove("hidden");
  document.querySelector("#game").classList.add("hidden");

  stopGame();

  document.querySelector("#restartBTN").addEventListener("click", gameStart);
}

function stopGame() {
  console.log("stop game");

  // remove animations classes
  document
    .querySelectorAll(".fall1")
    .forEach((fall1) => fall1.classList.remove("falling"));
  document
    .querySelectorAll(".fall2")
    .forEach((fall2) => fall2.classList.remove("falling2"));
  document
    .querySelectorAll(".fall3")
    .forEach((fall3) => fall3.classList.remove("falling3"));

  document.querySelectorAll(".fall1").forEach((fall1) => fall1.offsetLeft);
  document.querySelectorAll(".fall2").forEach((fall2) => fall2.offsetLeft);
  document.querySelectorAll(".fall3").forEach((fall3) => fall3.offsetLeft);

  // remove click events
  document
    .querySelectorAll(".good")
    .forEach((good) => good.removeEventListener("mousedown", clickGood));
  document
    .querySelectorAll(".bad")
    .forEach((bad) => bad.removeEventListener("mousedown", clickBad));
}

function creditsPage() {
  console.log("creditsPage");
  // remove start screen
  document.querySelector("#start_screen").classList.add("hidden");
  // show credits page
  document.querySelector("#credits").classList.remove("hidden");
  // back to start screen button
  document.querySelector("#backBTN2").addEventListener("click", start);
}

// restart the game
function restartGame() {
  console.log("restartGame");
}

function resetPoints() {
  points = 0;

  displayPoints();
}

function resetLives() {
  lives = 3;

  document.querySelector("#heart1").classList.remove("loseLife");
  document.querySelector("#heart2").classList.remove("loseLife");
  document.querySelector("#heart3").classList.remove("loseLife");
  document.querySelector("#heart1").classList.add("addLife");
  document.querySelector("#heart2").classList.add("addLife");
  document.querySelector("#heart3").classList.add("addLife");
}

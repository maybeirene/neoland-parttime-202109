var SIGNIN = document.querySelector(".signin");
var GAME = document.querySelector(".game");

var GAME_SCREEN = document.querySelector(".game_screen");

var counter = document.createElement("div");
GAME.append(counter);
counter.classList.add("game_counter");
var points = 0;
counter.innerText = `${points} pts`;

var game_level = document.createElement("div");
GAME.append(game_level);
game_level.classList.add("game_level");

var screen_block_container = document.createElement("div");
GAME_SCREEN.append(screen_block_container);
screen_block_container.classList.add("block-container");
var body = document.querySelector("body");

//Añadir más posibles niveles mediante un select

var level = 1;
game_level.innerText = `Level ${level}`;

/* TEMPORAL */
GAME.classList.remove("off");
SIGNIN.classList.add("off");

/*----------*/

/* == GENERATE UPPER BLOCKS == */


var blocksProps = [];

var blocks = [];

switch (level) {
  case 1:
    var itemsQtty = 10;
    var colors = ["var(--color1)", "var(--color2)"];

    for (i = 0; i <= itemsQtty; i++) {
      var background = pickRandomColor();

      var screen_block_element = document.createElement("div");
      screen_block_container.append(screen_block_element);
      screen_block_element.classList.add("block-element");
      screen_block_element.dataset.color = background;
      screen_block_element.style.backgroundColor = background;

      var blockProps = screen_block_element.getClientRects()[0];

      var block = {
        x: blockProps.x,
        y: blockProps.y,
        width: blockProps.width,
        background: background
      };
      

      blocks.push(block);
      
    }
    break;
}


var screen_shooter = document.createElement("div");
GAME_SCREEN.append(screen_shooter);
screen_shooter.classList.add("shooter");

var shooter = {
  width: 46,
  x: 300,
  background: "grey",
};

screen_shooter.style.transform = `translate(${shooter.x}px)`;

shooter.background = screen_shooter.style.backgroundColor;
var step = 20;

/* == SHOOTER MOVE == */

document.onkeydown = function (e) {
  if (e.key === "ArrowRight") {
    if (shooter.x <= 600) {
      shooter.x += step;
      screen_shooter.style.transform = `translate(${shooter.x}px)`;
      shot.x = shooter.x + shooter.width / 2;
    }
  }
  if (e.key === "ArrowLeft") {
    if (shooter.x > 0) {
      shooter.x -= step;
      screen_shooter.style.transform = `translate(${shooter.x}px)`;
      shot.x = shooter.x + shooter.width / 2;
    }
  }
};
/* == SET SHOOTER RANDOM COLOR with space key event== */
/* == shot event == */
var screen_shot;
var shot = {
  x: shooter.x + shooter.width / 2,
  y: -8,
  maxXpos: 600,
  background: shooter.background,
};

function createShot() {
  screen_shot = document.createElement("div");
  GAME_SCREEN.append(screen_shot);
  screen_shot.classList.add("shot");
  screen_shot.style.transform = `translate(${shot.x}px)`;
  shotShot();
}

function shotShot() {
  var shotInterval = setInterval(function () {
    if (shot.y >= -400) {
      shot.y -= step;
      screen_shot.style.transform = `translate(${fixedShotXPosition}px, ${shot.y}px )`;

      if (shot.y < -400) {
        checkPosition();
      }
    } else clearInterval(shotInterval);
  }, 70);

  shot.y = -8;
}

function deleteShot() {
  screen_shot.remove();
}
var newShooterBg;

var blocksElements = document.querySelectorAll(".block-element");
var margin;

function checkPosition() {

  
console.log('checkiando')

  margin = (body.getClientRects()[0].width - 713) / 2;

  for (var i = 0; i < blocks.length; i++) {
    var maxX =
      i === 10
        ? blocks[i].x + blocks[i].width
        : blocks[i + 1].x ;

    var minX = blocks[i].x;

    if (fixedShotXPosition + margin >= minX && fixedShotXPosition + margin <= maxX) {
      console.log('Entró en el bloque ' + i);
    }
    console.log(minX, fixedShotXPosition, maxX)
    console.log(shot.x)
  }

}
var fixedShotXPosition;

function getShot(event) {
  if (event.key === " ") {
    createShot();
    fixedShotXPosition = shot.x;
    screen_shot.style.backgroundColor = newShooterBg;
    newShooterBg = pickRandomColor();

    screen_shooter.style.backgroundColor = newShooterBg;
    shot.background = shooter.background;
  }

  //CHECK and REMOVE before a new shot
}

document.addEventListener("keydown", getShot);

//Al comprobar que el color del shot y element son el mismo o no:

/* 
  
  shot.remove(); */

/* == MATCHING POSITION AND COLOR BLOCK-SHOT == */

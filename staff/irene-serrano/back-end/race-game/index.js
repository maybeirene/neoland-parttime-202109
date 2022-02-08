class Car {
  constructor(icon) {
    this.icon = icon;
    this.position = 0;
  }

  toString() {
    return `${" ".repeat(this.position)}${this.icon}`;
  }

  move(distance) {
    this.position = this.position + distance;
  }
}

const randomInteger = (min, max) =>
  min + Math.round((max - min) * Math.random());

const car1 = new Car("🚗");
const car2 = new Car("🏎️");
const car3 = new Car("🚓");

const interval = setInterval(() => {
  console.clear();

  console.log(car1.toString());

  console.log(car2.toString());

  console.log(car3.toString());

  if (car1.position === 100 || car2.position === 100 || car3.position === 100) {
    console.clear();
    showWinner(car1, car2, car3);
    clearInterval(interval);
  }

  if (car1.position < 100) {
    car1.move(randomInteger(0, 5));
  } else car1.position = 100;

  if (car2.position < 100) {
    car2.move(randomInteger(0, 5));
  } else car2.position = 100;

  if (car3.position < 100) {
    car3.move(randomInteger(0, 5));
  } else car3.position = 100;

  /* car1.move(randomInteger(0,10))
    car2.move(randomInteger(0,10))
    car3.move(randomInteger(0,10)) */
}, 100);

function showWinner(car1, car2, car3) {
  if (car1.position === 100) {
    console.log("|===================|");
    console.log("                     ");
    console.log("     🚗  WINS!       ");
    console.log("                     ");
    console.log("|===================|");

    //  console.log('🚗  WINS!')
  } else if (car2.position === 100) {
    console.log("|===================|");
    console.log("                     ");
    console.log("      🏎️   WINS!     ");
    console.log("                     ");
    console.log("|===================|");
    //console.log("🏎️   WINS!");
  } else if (car3.position === 100) {
    console.log("|===================|");
    console.log("                     ");
    console.log("     🚓  WINS!       ");
    console.log("                     ");
    console.log("|===================|");
    //console.log("🚓   WINS!");
  } else if (car1.position === 100 && car2.position === 100) {
    console.log("TIE! TRY AGAIN");
  } else if (car3.position === 100 && car2.position === 100) {
    console.log("TIE! TRY AGAIN");
  } else if (car1.position === 100 && car3.position === 100) {
    console.log("TIE! TRY AGAIN");
  }
  else if (car1.position === 100 && car2.position === 100 && car3.position === 100) {
    console.log("TIE! TRY AGAIN");
  }
}


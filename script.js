let content = document.querySelector(".content");
let tablet = document.querySelector(".numberTablet");
let menu = document.querySelector(".menu");
let number = document.getElementById("number");
let container = document.querySelector('.container')
let gameOver = document.createElement('div')
let start = false;
var rNumber;
var randomize;
var input = document.getElementById("input_value");
var result;
var buttons = document.querySelectorAll("button.number_button");
var level_buttons = document.querySelectorAll(".level_button");
var trials = 3;

function startGame() {
  if (!start) {
    content.style.display = "flex";
    menu.style.display = "none";
   
    countDown();
    randNumber();
    
  }
  console.log("Its clicking");
}

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function (event) {
    input.value = input.value + event.currentTarget.value;
    result = input.value;
    console.log(result);
  });
}

for (let i = 0; i < level_buttons.length; i++) {
  level_buttons[i].addEventListener("click", function (event) {
    rNumber = event.currentTarget.value;
  });
}

handleChange = (result) => {
  if (result == randomize) {
    console.log("You win");
    alert("You win!!!");
  } else {
    --trials;
    alert(`You have ${trials} trials remainingg`);
  }
};

const isGameOver = (val) => {
    if(val < 1){
        container.appendChild(gameOver)
    gameOver.classList.add('gameOver')
    gameOver.textContent = "Game Over"
    content.style.display = "none";
    }
}

document.getElementById("submitForm").addEventListener("submit", function (e) {
  e.preventDefault();
  handleChange(result);
  isGameOver(trials)
});

function randNumber() {
  randomize = Math.floor(Math.random() * rNumber);
  tablet.innerHTML = `Choose a number between 1 to ${rNumber}`;
  console.log(randomize);
}

// function handleChange(val){

// }

const countDown = function () {
  var speed;
  if (rNumber <= 10) {
    speed = 300;
  } else if (rNumber <= 50) {
    speed = 100;
  } else {
    speed = 50;
  }
  setInterval(() => {
    if (rNumber != 0) {
      number.innerHTML = rNumber;
      --rNumber;
    }
  }, speed);
};

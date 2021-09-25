let content = document.querySelector(".content");
let tablet = document.querySelector(".numberTablet");
let menu = document.querySelector(".menu");
let startNumber = document.getElementById("start_number");
let container = document.querySelector(".container");
let gameOver = document.createElement("div");
let replay = document.createElement("button");
var input = document.getElementById("input_value");
var buttons = document.querySelectorAll("button.number_button");
var level_buttons = document.querySelectorAll(".level_button");
var modal = document.getElementById("myModal")
var btn = document.getElementById("myBtn")
var span = document.getElementsByClassName("close")[0]
var alert_message = document.getElementsByClassName("message")[0]
let start = false;
var randomNumber;
var randomizedNumber;
var userInput;
var trials = 3;
var speed;


function startGame() {
  if (!start && (randomNumber != null)) {
    content.style.display = "flex";
    menu.style.display = "none";

    countDown();
    numberGenerator();
  }
}

span.onclick = function() {
  modal.style.display = "none"
}

window.onclick = function(event){
  if(event.target == modal){
    modal.style.display = "none"
  }
}

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function (event) {
    input.value = input.value + event.currentTarget.value;
    userInput = input.value;
  });
}

for (let i = 0; i < level_buttons.length; i++) {
  level_buttons[i].addEventListener("click", function (event) {
    randomNumber = event.currentTarget.value;
  });
}

handleInput = (userInput) => {
  if (userInput == randomizedNumber) {
    input.value = "";
    modal.style.display = "block";
    alert_message.innerHTML = `Yea!!! You WIN. Congratulations`
  } else {
    input.value = "";
    --trials;
    modal.style.display = "block";
    alert_message.innerHTML = `You have ${trials} trials remaining`
  }
};

const isGameOver = (val) => {
  if (val < 1) {
    container.appendChild(gameOver);
    container.appendChild(replay)
    replay.classList.add("replay")
    replay.textContent = "Replay?"
    gameOver.classList.add("gameOver");
    gameOver.textContent = "Game Over";
    content.style.display = "none";
  }
};

replay.onclick = function(){
  window.location.reload()
}

document.getElementById("submitForm").addEventListener("submit", function (e) {
  e.preventDefault();
  handleInput(userInput);
  isGameOver(trials);
});

function numberGenerator() {
  randomizedNumber = Math.floor(Math.random() * randomNumber);
  tablet.innerHTML = `Choose a number between 1 to ${randomNumber}`;
}

const countDown = function () {
  if (randomNumber <= 10) {
    speed = 300;
  } else if (randomNumber <= 50) {
    speed = 100;
  } else {
    speed = 50;
  }
  setInterval(() => {
    if (randomNumber != 0) {
      startNumber.innerHTML = randomNumber;
      --randomNumber;
    }
  }, speed);
};

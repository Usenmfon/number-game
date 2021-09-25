let content = document.querySelector(".content");
let tablet = document.querySelector(".numberTablet");
let menu = document.querySelector(".menu");
let number = document.getElementById("number");
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
var rNumber;
var randomize;
var result;
var trials = 3;
var speed;


function startGame() {
  if (!start && (rNumber != null)) {
    content.style.display = "flex";
    menu.style.display = "none";

    countDown();
    randNumber();
  }
}

// btn.onclick = function(){
  // modal.style.display = "block";
// }

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
    result = input.value;
  });
}

for (let i = 0; i < level_buttons.length; i++) {
  level_buttons[i].addEventListener("click", function (event) {
    rNumber = event.currentTarget.value;
  });
}

handleChange = (result) => {
  if (result == randomize) {
    modal.style.display = "block";
    alert_message.innerHTML = `Yea!!! You WIN. Congratulations`
  } else {
    --trials;
    modal.style.display = "block";
    alert_message.innerHTML = `You have ${trials} trials remaining`
    // alert(`You have ${trials} trials remainingg`);
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
  handleChange(result);
  isGameOver(trials);
});

function randNumber() {
  randomize = Math.floor(Math.random() * rNumber);
  console.log(randomize)
  tablet.innerHTML = `Choose a number between 1 to ${rNumber}`;
}

const countDown = function () {
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

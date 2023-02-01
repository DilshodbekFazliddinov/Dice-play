// button const
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

// other variables

let scoreCurrent = 0;
let activePlayer = 0;
let score = [0, 0];
let gameOwer = true;

let dice = document.querySelector(".dice");
dice.style.display = "none";

// function

function switchDice() {
  scoreCurrent = 0;
  document.getElementById(`current--${activePlayer}`).textContent =
    scoreCurrent;
  activePlayer = activePlayer === 1 ? 0 : 1;
  document.querySelector(".player--0").classList.toggle("player--active");
  document.querySelector(".player--1").classList.toggle("player--active");
}

btnRoll.addEventListener("click", () => {
  if (gameOwer) {
    const random = Math.trunc(Math.random() * 6 + 1);
    dice.style.display = "block";
    dice.src = `./dice-${random}.png`;

    if (random !== 1) {
      scoreCurrent += random;
      document.getElementById(`current--${activePlayer}`).textContent =
        scoreCurrent;
    } else {
      switchDice();
    }
  }
});

btnHold.addEventListener("click", () => {
  if (gameOwer) {
    score[activePlayer] += scoreCurrent;
    document.getElementById(`score--${activePlayer}`).textContent =
      score[activePlayer];
    if (score[activePlayer] >= 100) {
      gameOwer = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
    } else {
      switchDice();
    }
  }
});

btnNew.addEventListener("click", () => {
  scoreCurrent = 0;
  activePlayer = 0;
  score = [0, 0];
  gameOwer = true;
  document.getElementById(`current--0`).textContent = 0;
  document.getElementById(`current--1`).textContent = 0;
  document.getElementById(`score--0`).textContent = 0;
  document.getElementById(`score--1`).textContent = 0;
  document.querySelector(`.player--0`).classList.remove("player--winner");
  document.querySelector(`.player--1`).classList.remove("player--winner");
  document.querySelector(".player--0").classList.add("player--active");
  document.querySelector(".player--1").classList.remove("player--active");
});

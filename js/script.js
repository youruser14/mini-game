const question = document.querySelector(".question-box");
const glasses = document.querySelector(".point");
const actionTitle = document.querySelector(".action-title");
const btnCheck = document.querySelector(".btn-check");
const btnAgain = document.querySelector(".btn-again");
let score = document.querySelector(".score");
let randomNumber = Math.floor(Math.random() * 20) + 1;
let point = document.querySelector(".point");
let pointNumber = 20;
point.innerHTML = pointNumber;
let hightScore = 0;

const displayMessages = (title) => {
  if (pointNumber > 1) {
    actionTitle.textContent = title;
    pointNumber--;
    point.innerHTML = pointNumber;
  } else {
    actionTitle.textContent = "Game Over!";
    point.innerHTML = 0;
  }
};

const startAndRestatMessages = (title, questionTitle, questionWidth, bodyColor) => {
  actionTitle.textContent = title;
  question.textContent = questionTitle;
  question.style.width = questionWidth;
  document.querySelector("body").style.backgroundColor = bodyColor;
};

const checkedNumber = () => {
  const input = Number(document.querySelector(".checked-input").value);

  if (!input) {
    actionTitle.textContent = "Введите число!";
  } else if (input === randomNumber) {
    startAndRestatMessages("Правильно!", randomNumber, "45vw", "green");
    if (pointNumber > hightScore) {
      hightScore = pointNumber;
      score.textContent = hightScore;
    }
  } else if (input !== randomNumber) {
    input > randomNumber ? displayMessages("Многовато!") : displayMessages("Маловато!");
  }
};
const restartGame = () => {
  document.querySelector(".checked-input").value = "";
  pointNumber = 20;
  randomNumber = Math.floor(Math.random() * 20) + 1;
  point.innerHTML = pointNumber;
  startAndRestatMessages("Начни угадывать!", "???", "", "");
};
btnAgain.addEventListener("click", restartGame);
btnCheck.addEventListener("click", checkedNumber);


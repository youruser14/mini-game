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

const checkedNumber = () => {
  const input = Number(document.querySelector(".checked-input").value);
  if (!input) {
    actionTitle.textContent = "Введите число!";
  } else if (input === randomNumber) {
    actionTitle.textContent = "Правильно!";
    question.textContent = randomNumber;
    question.style.width = "45vw";
    document.querySelector("body").style.backgroundColor = "green";
    if (pointNumber > hightScore) {
      hightScore = pointNumber;
      score.textContent = hightScore;
    }
  } else if (input > randomNumber) {
    if (pointNumber > 1) {
      actionTitle.textContent = "Многовато!";
      pointNumber--;
      point.innerHTML = pointNumber;
    }
  } else if (input < randomNumber) {
    if (pointNumber > 1) {
      actionTitle.textContent = "Маловато!";
      pointNumber--;
      point.innerHTML = pointNumber;
    }
  }
};
const restartGame = () => {
  document.querySelector(".checked-input").value = "";
  document.querySelector("body").style.backgroundColor = "";
  actionTitle.textContent = "Начни угадывать!";
  pointNumber = 20;
  question.textContent = "???";
  randomNumber = Math.floor(Math.random() * 20) + 1;
  point.innerHTML = pointNumber;
};
btnAgain.addEventListener("click", restartGame);
btnCheck.addEventListener("click", checkedNumber);

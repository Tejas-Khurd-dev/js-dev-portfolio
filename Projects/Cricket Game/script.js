let scoreStr = localStorage.getItem("score");
let score = JSON.parse(scoreStr) || {win: 0, loss: 0, tie: 0,};
// let score;

// if (scoreStr != undefined) {
//   score = JSON.parse(scoreStr);
// } else {
//   score = {
//     win: 0,
//     loss: 0,
//     tie: 0,
//   };
// }

score.displayScore = function () {
  return `Win = ${this.win}, Loss = ${this.loss}, Tie = ${this.tie}`;
};

function updateScoreUI() {
  document.querySelector("#win").innerText = score.win;
  document.querySelector("#loss").innerText = score.loss;
  document.querySelector("#tie").innerText = score.tie;
}

updateScoreUI();

function playGame(userChoice) {
  const randomNumber = Math.floor(Math.random() * 3);
  let computerChoice = "";

  if (randomNumber === 0) computerChoice = "Bat";
  else if (randomNumber === 1) computerChoice = "Ball";
  else computerChoice = "Stump";

  document.querySelector("#user-choice").innerText = `You chose ${userChoice}`;

  let result = "";

  if (userChoice === computerChoice) {
    result = `Computer chose ${computerChoice} → It's a TIE!`;
    score.tie++;
  } else if (
    (userChoice === "Bat" && computerChoice === "Ball") ||
    (userChoice === "Ball" && computerChoice === "Stump") ||
    (userChoice === "Stump" && computerChoice === "Bat")
  ) {
    result = `Computer chose ${computerChoice} → YOU WIN!`;
    score.win++;
  } else {
    result = `Computer chose ${computerChoice} → YOU LOSE`;
    score.loss++;
  }

  console.clear();
  console.log(score.displayScore());
  document.querySelector("#result-declaration").innerText = result;

  updateScoreUI();
  localStorage.setItem("score", JSON.stringify(score));
}

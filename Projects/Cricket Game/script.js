let score = {
  win: 0,
  loss: 0,
  tie: 0,
}
function playGame(userChoice) {
  const randomNumber = Math.floor(Math.random() * 3);
  let computerChoice = "";

  if (randomNumber === 0) computerChoice = "Bat";
  else if (randomNumber === 1) computerChoice = "Ball";
  else computerChoice = "Stump";

  document.querySelector(
    "#user-choice"
  ).innerText = `You have chosen ${userChoice}`;
  let result = "";

  if (userChoice === computerChoice) {
    result = `Computer chose ${computerChoice} → TIE!`;
    score.tie ++;
  } else if (
    (userChoice === "Bat" && computerChoice === "Ball") ||
    (userChoice === "Ball" && computerChoice === "Stump") ||
    (userChoice === "Stump" && computerChoice === "Bat")
  ) {
    result = `Computer chose ${computerChoice} → YOU WIN!`;
    score.win ++;
  } else {
    result = `Computer chose ${computerChoice} → YOU LOSE!`;
    score.loss ++;
  }

  document.querySelector("#result-declaration").innerText = result;
  document.querySelector("#win").innerText = score.win;
  document.querySelector("#loss").innerText = score.loss;
  document.querySelector("#tie").innerText = score.tie;
}

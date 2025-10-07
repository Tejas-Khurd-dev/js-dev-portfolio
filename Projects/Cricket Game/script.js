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
  } else if (
    (userChoice === "Bat" && computerChoice === "Ball") ||
    (userChoice === "Ball" && computerChoice === "Stump") ||
    (userChoice === "Stump" && computerChoice === "Bat")
  ) {
    result = `Computer chose ${computerChoice} → YOU WIN!`;
  } else {
    result = `Computer chose ${computerChoice} → YOU LOSE!`;
  }

  document.querySelector("#result-declaration").innerText = result;
}

let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorepar = document.querySelector("#user");
const compScorepar = document.querySelector("#computer");

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    console.log("clicked", userChoice);
    mainGame(userChoice);
  });
});

const drawGame = () => {
  msg.innerText = "game draw";
};

const getCompChoice = () => {
  const Moves = ["rock", "paper", "scissors"];
  const ind = Math.floor(Math.random() * 3);
  return Moves[ind];
};

const showWinner = (userWin) => {
  if (userWin) {
    userScore++;
    userScorepar.innerText = userScore;
    msg.innerText = "you win";
  } else {
    compScore++;
    compScorepar.innerText = compScore;
    msg.innerText = "you loose";
  }
};

const mainGame = (userChoice) => {
  console.log("user ch ", userChoice);
  const compChoice = getCompChoice();
  console.log("com ch ", compChoice);

  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (user === "paper") {
      userWin = compChoice === "scissors" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin);
  }
};

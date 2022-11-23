const startGameBtn = document.getElementById("start-game-btn");

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSOR = "SCISSOR";
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = "DRAW";
const RESULT_PLAYER_WINS = "PLAYER_WINS";
const RESULT_COMPUTER_WINS = "COMPUTER_WINS";

let gameIsRunning = false;

const getPlayerChoice = function () {
  const selection = prompt(`${ROCK}, ${PAPER} or ${SCISSOR}`, "").toUpperCase();
  if (selection !== ROCK && selection !== PAPER && selection !== SCISSOR) {
    alert(`Invalid choice! We chose ${DEFAULT_USER_CHOICE} for you!`);
    return;
  }
  return selection;
};

const getComputerChoice = function () {
  const randomValue = Math.random();
  if (randomValue < 0.34) {
    return ROCK;
  } else if (randomValue < 0.67) {
    return PAPER;
  } else {
    return SCISSOR;
  }
};

// const getWinner = function (cChoice, pChoice) {
//   if (cChoice === pChoice) {
//     return RESULT_DRAW;
//   } else if (
//     cChoice === ROCK && pChoice === PAPER ||
//     cChoice === PAPER && pChoice === SCISSOR ||
//     cChoice === SCISSOR && pChoice === ROCK
//   ) {
//     return RESULT_PLAYER_WINS;
//   } else {
//     return RESULT_COMPUTER_WINS;
//   }
// };

const add = (a, b) => a + b;
const add2 = function(a, b) {
  return a + b;
}

const getWinner = (cChoice, pChoice = DEFAULT_USER_CHOICE) => {
  return cChoice === pChoice
    ? RESULT_DRAW
    : (cChoice === ROCK && pChoice === PAPER) ||
      (cChoice === PAPER && pChoice === SCISSOR) ||
      (cChoice === SCISSOR && pChoice === ROCK)
    ? RESULT_PLAYER_WINS
    : RESULT_COMPUTER_WINS;
};
// const start = function () {
//   console.log("Game is starting...");
// };

// startGameBtn.addEventListener("click", start);
startGameBtn.addEventListener("click", function () {
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;
  console.log("Game is starting...");
  const playerChoice = getPlayerChoice();
  const computerChoice = getComputerChoice();

  let winner;
  if (playerChoice) {
    winner = getWinner(computerChoice, playerChoice);

  } else {
    winner = getWinner(computerChoice);
  }


  let message = `You picked ${playerChoice || DEFAULT_USER_CHOICE }, ${computerChoice}, therefore you `
  if (winner === RESULT_DRAW) {
    message = message + "had a draw."
  } else if (winner === RESULT_PLAYER_WINS) {
    message = message + "won.:"
  } else {
    message = message + "lost.";
  }

  alert(message);
  gameIsRunning = false;
});
// 익명함수에도 이름을 줄 수 있다.
// startGameBtn.addEventListener("click", function startGame() {
//   console.log("Game is starting...", age);
// });


//not realated to game

// const sumUp = (resultHandler, ...numbers) => {
//   const validateNumber = (number) => {
//     return isNaN(number) ? 0 : number;
//   };
  
//   let sum = 0;
//   for (const num of numbers) {
//     sum += validateNumber(num);
//   }
//   resultHandler(sum);
// };
const combine = (resultHandler, operation, ...numbers) => {
  const validateNumber = (number) => {
    return isNaN(number) ? 0 : number;
  };
  
  let sum = 0;
  for (const num of numbers) {
    if (operation === "ADD") {
      sum += validateNumber(num);
    } else {
      sum -= validateNumber(num);
    }
  }
  resultHandler(sum,);
};

// const subtractUp = function(resultHandler) {
//   let sum = 0;
//   for (const num of arguments) { // don't use that
//     sum += num;
//   }
//   return (sum);
// }
// const subtractUp = function(resultHandler, ...numbers) {
//   let sum = 0;
//   for (const num of numbers) {
//     sum += num;
//   }
//   resultHandler(sum);
// }

const showResult = (result, messageText) => {
  alert(messageText + result);
};

console.log(combine(showResult.bind(this, "The result agter adding all numbers is: "), "ADD", 1, 5, 'asdasd', 10, -3, 6, 10));
console.log(combine(showResult.bind(this, "The result agter adding all numbers is: "), "ADD", 1, 5, 10, -3, 6, 10, 25, 88));
console.log(combine(showResult.bind(this, "The result agter subtracting all numbers is: "), "SUBTRACT", 1, 10, 15, 20));
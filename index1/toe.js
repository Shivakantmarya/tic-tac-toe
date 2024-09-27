// const boxes = document.querySelectorAll(".box");
// const resetBtn = document.querySelector("#reset-btn");
// const resetBtn2 = document.querySelector("#reset-btn2");
// const newGameBtn = document.querySelector("#new-btn");
// const newGameBtn2 = document.querySelector("#new-btn2");
// const msgContainer = document.querySelector(".msg-container");
// const msg = document.querySelector("#msg");

// const container = document.querySelector(".container");
// const head = document.querySelector("#h1");
// const backHome = document.querySelector("#back-home");

// const pName = document.getElementById("pName");
// const sName = document.getElementById("sName");
// const text = document.getElementById("text");
// const draw = document.querySelector(".draw");
// const homePage = document.querySelector("#home-page");
// const computer = document.querySelector("#computer");
// const text2 = document.querySelector("#text2");
// // const select_level = document.querySelector(".select-level");

// // select_level.classList.add("hide");
// text2.classList.add("hide");
// draw.classList.add("hide");
// container.classList.add("hide");
// resetBtn.classList.add("hide");
// resetBtn2.classList.add("hide");
// sName.classList.add("hide");
// pName.classList.add("hide");
// text.classList.add("hide");

// const winPatterns = [
//   [0, 1, 2],
//   [3, 4, 5],
//   [6, 7, 8],
//   [0, 3, 6],
//   [1, 4, 7],
//   [2, 5, 8],
//   [0, 4, 8],
//   [2, 4, 6],
// ];

// let gameOver = false;
// let board = ["", "", "", "", "", "", "", "", ""];
// let count = 0;

// const render = () => {
//   boxes.forEach((box, i) => {
//     box.textContent = board[i];
//     box.style.backgroundColor =
//       board[i] === "X" ? "orange" : board[i] === "O" ? "yellow" : "";
//   });
// };

// const checkDraw = () => board.every((cell) => cell !== "");

// const checkWinner = (player) => {
//   return winPatterns.some((pattern) =>
//     pattern.every((index) => board[index] === player)
//   );
// };

// const minimax = (
//   board,
//   depth,
//   isMaximizing,
//   alpha = -Infinity,
//   beta = Infinity
// ) => {
//   if (checkWinner("X")) return -10 + depth;
//   if (checkWinner("O")) return 10 - depth;
//   if (checkDraw()) return 0;

//   if (isMaximizing) {
//     let bestScore = -Infinity;
//     for (let i = 0; i < 9; i++) {
//       if (board[i] === "") {
//         board[i] = "O";
//         let score = minimax(board, depth + 1, false, alpha, beta);
//         board[i] = "";
//         bestScore = Math.max(score, bestScore);
//         alpha = Math.max(alpha, score);
//         if (beta <= alpha) break;
//       }
//     }
//     return bestScore;
//   } else {
//     let bestScore = Infinity;
//     for (let i = 0; i < 9; i++) {
//       if (board[i] === "") {
//         board[i] = "X";
//         let score = minimax(board, depth + 1, true, alpha, beta);
//         board[i] = "";
//         bestScore = Math.min(score, bestScore);
//         beta = Math.min(beta, score);
//         if (beta <= alpha) break;
//       }
//     }
//     return bestScore;
//   }
// };

// const matchDraw = () => {
//   draw.classList.remove("hide");
//   // resetBtn.disabled = true;
//   backHome.disabled = true;
// };

// const showWinner = (winner) => {
//   setTimeout(() => {
//     msg.innerHTML = `Congratulations, Winner is: ${winner} ${
//       winner === "X" ? pName.value : sName.value
//     }!`;
//     msgContainer.classList.remove("hide");
//     container.classList.add("hide");
//     resetBtn.classList.add("hide");
//     pName.classList.add("hide");
//     sName.classList.add("hide");
//     text.classList.add("hide");
//   }, 1000);
//   disableBoxes();
// };

// const disableBoxes = () => {
//   boxes.forEach((box) => (box.disabled = true));
// };

// const enableBoxes = () => {
//   boxes.forEach((box) => {
//     box.disabled = false;
//     box.innerHTML = "";
//     text.innerHTML = "Turn of X";
//     box.style.backgroundColor = "";
//   });
// };

// const resetGame = () => {
//   count = 0;
//   gameOver = false;
//   board = ["", "", "", "", "", "", "", "", ""];
//   enableBoxes();
//   msgContainer.classList.add("hide");
//   container.classList.remove("hide");
//   resetBtn.classList.remove("hide");
//   pName.classList.remove("hide");
//   sName.classList.remove("hide");
//   draw.classList.add("hide");
//   text.classList.add("hide");
//   resetBtn.disabled = false; // Enable the reset button
// };

// const multiplayer = () => {
//   resetBtn.classList.add("hide");
//   resetBtn2.classList.remove("hide");
//   newGameBtn.classList.add("hide");
//   newGameBtn2.classList.remove("hide");
//   let turnO = true;

//   homePage.classList.add("hide");
//   container.classList.remove("hide");
//   sName.classList.remove("hide");
//   pName.classList.remove("hide");

//   boxes.forEach((box, index) => {
//     box.removeEventListener("click", box.clickListener); // Remove previous event listener if any
//     box.addEventListener(
//       "click",
//       (box.clickListener = () => {
//         if (board[index] !== "" || gameOver) return;

//         text.classList.remove("hide");
//         pName.classList.add("hide");
//         sName.classList.add("hide");

//         board[index] = turnO ? "X" : "O";
//         render();
//         text.innerHTML = `${turnO ? pName.value : sName.value} (${
//           turnO ? "X" : "O"
//         }): Turn of ${turnO ? sName.value : pName.value} (${
//           turnO ? "O" : "X"
//         })`;

//         if (checkWinner(turnO ? "X" : "O")) {
//           showWinner(turnO ? "X" : "O");
//           gameOver = true;
//           return;
//         }

//         if (++count === 9 && !gameOver) {
//           matchDraw();
//           return;
//         }

//         turnO = !turnO;
//         // backHome.disabled = true;
//         box.disabled = true;
//       })
//     );
//   });
// };

// const computerPlay = () => {
//   resetBtn2.classList.add("hide");
//   resetBtn.classList.remove("hide");
//   text2.classList.remove("hide");
//   newGameBtn2.classList.add("hide");
//   newGameBtn.classList.remove("hide");

//   homePage.classList.add("hide");
//   container.classList.remove("hide");
//   pName.classList.add("hide");
//   sName.classList.add("hide");

// //   select_level.classList.remove("hide");

//   let currentPlayer = "X"; // Always start with the user as "X"

//   boxes.forEach((box, index) => {
//     box.removeEventListener("click", box.clickListener); // Remove previous event listener if any
//     box.addEventListener(
//       "click",
//       (box.clickListener = () => {
//         if (board[index] !== "" || gameOver) return;

//         board[index] = currentPlayer;
//         render();
//         if (checkWinner(currentPlayer)) {
//           msg.innerHTML = `Congratulations, Winner is: ${currentPlayer}!`;
//           msgContainer.classList.remove("hide");
//           text.classList.add("hide");
//           text2.classList.add("hide");
//           container.classList.add("hide");
//           resetBtn.classList.add("hide");
//           gameOver = true;
//           return;
//         }

//         if (checkDraw()) {
//           draw.classList.remove("hide");
//           // resetBtn.disabled = true; // Disable reset button on draw
//           backHome.disabled = true;
//           gameOver = true;
//           return;
//         }

//         currentPlayer = "O";
//         let bestScore = -Infinity;
//         let bestMove;
//         for (let i = 0; i < 9; i++) {
//           if (board[i] === "") {
//             board[i] = "O";
//             let score = minimax(board, 0, false);
//             board[i] = "";
//             if (score > bestScore) {
//               bestScore = score;
//               bestMove = i;
//             }
//           }
//         }
//         board[bestMove] = "O";
//         render();

//         if (checkWinner("O")) {
//           msg.innerHTML = `Congratulations, Winner is: Jason!`;
//           msgContainer.classList.remove("hide");
//           text.classList.add("hide");
//           text2.classList.add("hide");
//           container.classList.add("hide");
//           resetBtn.classList.add("hide");
//           gameOver = true;
//           return;
//         }

//         if (checkDraw()) {
//           draw.classList.remove("hide");
//           // resetBtn.disabled = true; // Disable reset button on draw
//           gameOver = true;
//           return;
//         }

//         currentPlayer = "X"; // Switch back to user for next turn
//       })
//     );
//   });
// };

// newGameBtn.addEventListener("click", () => {
//   resetGame();
//   computerPlay(); // Start new game with computer play functionality
// });

// newGameBtn2.addEventListener("click", () => {
//   resetGame();
//   multiplayer();
// });

// resetBtn.addEventListener("click", () => {
//   draw.classList.add("hide");
//   backHome.disabled = false;
//   resetGame();
//   computerPlay(); // Ensure the computer play mode restarts correctly on reset
// });

// resetBtn2.addEventListener("click", () => {
//   draw.classList.add("hide");
//   backHome.disabled = false;
//   resetGame();
//   multiplayer();
//   text2.classList.add("hide");
// });

// homePage.querySelector("#computer").addEventListener("click", () => {
//   resetGame();
//   computerPlay();
// });

// backHome.addEventListener("click", () => {
//   resetGame();
//   homePage.classList.remove("hide");
//   container.classList.add("hide");
//   pName.classList.add("hide");
//   sName.classList.add("hide");
//   text2.classList.add("hide");
// });







// Select all necessary DOM elements
const boxes = document.querySelectorAll(".box");
const resetBtn = document.querySelector("#reset-btn");
const resetBtn2 = document.querySelector("#reset-btn2");
const newGameBtn = document.querySelector("#new-btn");
const newGameBtn2 = document.querySelector("#new-btn2");
const msgContainer = document.querySelector(".msg-container");
const msg = document.querySelector("#msg");
const container = document.querySelector(".container");
const backHome = document.querySelector("#back-home");
const pName = document.getElementById("pName");
const sName = document.getElementById("sName");
const text = document.getElementById("text");
const draw = document.querySelector(".draw");
const homePage = document.querySelector("#home-page");
const text2 = document.querySelector("#text2");

// Hide elements initially
text2.classList.add("hide");
draw.classList.add("hide");
container.classList.add("hide");
resetBtn.classList.add("hide");
resetBtn2.classList.add("hide");
sName.classList.add("hide");
pName.classList.add("hide");
text.classList.add("hide");

// Define win patterns for Tic-Tac-Toe
const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let gameOver = false; // Track if the game is over
let board = ["", "", "", "", "", "", "", "", ""]; // Initialize game board
let count = 0; // Move count

// General functions

// Render the board
const render = () => {
  boxes.forEach((box, i) => {
    box.textContent = board[i];
    box.style.backgroundColor =
      board[i] === "X" ? "orange" : board[i] === "O" ? "yellow" : "";
  });
};

// Check if the game is a draw
const checkDraw = () => board.every((cell) => cell !== "");

// Check if a player has won
const checkWinner = (player) => {
  return winPatterns.some((pattern) =>
    pattern.every((index) => board[index] === player)
  );
};

// Display draw message
const matchDraw = () => {
  draw.classList.remove("hide");
  backHome.disabled = true;
};

// Display winner message
const showWinner = (winner) => {
  setTimeout(() => {
    msg.innerHTML = `Congratulations, Winner is: ${winner} ${
      winner === "X" ? pName.value : sName.value
    }!`;
    msgContainer.classList.remove("hide");
    container.classList.add("hide");
    resetBtn.classList.add("hide");
    pName.classList.add("hide");
    sName.classList.add("hide");
    text.classList.add("hide");
  }, 1000);
  disableBoxes();
};

// Disable all boxes
const disableBoxes = () => {
  boxes.forEach((box) => (box.disabled = true));
};

// Enable all boxes
const enableBoxes = () => {
  boxes.forEach((box) => {
    box.disabled = false;
    box.innerHTML = "";
    text.innerHTML = "Turn of X";
    box.style.backgroundColor = "";
  });
};

// Reset game state
const resetGame = () => {
  count = 0;
  gameOver = false;
  board = ["", "", "", "", "", "", "", "", ""];
  enableBoxes();
  msgContainer.classList.add("hide");
  container.classList.remove("hide");
  resetBtn.classList.remove("hide");
  pName.classList.remove("hide");
  sName.classList.remove("hide");
  draw.classList.add("hide");
  text.classList.add("hide");
  resetBtn.disabled = false;
};

// Multiplayer mode
const multiplayer = () => {
  resetBtn.classList.add("hide");
  resetBtn2.classList.remove("hide");
  newGameBtn.classList.add("hide");
  newGameBtn2.classList.remove("hide");
  let turnO = true;

  homePage.classList.add("hide");
  container.classList.remove("hide");
  sName.classList.remove("hide");
  pName.classList.remove("hide");

  boxes.forEach((box, index) => {
    box.removeEventListener("click", box.clickListener);
    box.addEventListener(
      "click",
      (box.clickListener = () => {
        if (board[index] !== "" || gameOver) return;

        text.classList.remove("hide");
        pName.classList.add("hide");
        sName.classList.add("hide");

        board[index] = turnO ? "X" : "O";
        render();
        text.innerHTML = `${turnO ? pName.value : sName.value} (${
          turnO ? "X" : "O"
        }): Turn of ${turnO ? sName.value : pName.value} (${
          turnO ? "O" : "X"
        })`;

        if (checkWinner(turnO ? "X" : "O")) {
          showWinner(turnO ? "X" : "O");
          gameOver = true;
          return;
        }

        if (++count === 9 && !gameOver) {
          matchDraw();
          return;
        }

        turnO = !turnO;
        box.disabled = true;
      })
    );
  });
};

// Computer play mode

// Minimax algorithm for computer AI
const minimax = (
  board,
  depth,
  isMaximizing,
  alpha = -Infinity,
  beta = Infinity
) => {
  if (checkWinner("X")) return -10 + depth;
  if (checkWinner("O")) return 10 - depth;
  if (checkDraw()) return 0;

  if (isMaximizing) {
    let bestScore = -Infinity;
    for (let i = 0; i < 9; i++) {
      if (board[i] === "") {
        board[i] = "O";
        let score = minimax(board, depth + 1, false, alpha, beta);
        board[i] = "";
        bestScore = Math.max(score, bestScore);
        alpha = Math.max(alpha, score);
        if (beta <= alpha) break;
      }
    }
    return bestScore;
  } else {
    let bestScore = Infinity;
    for (let i = 0; i < 9; i++) {
      if (board[i] === "") {
        board[i] = "X";
        let score = minimax(board, depth + 1, true, alpha, beta);
        board[i] = "";
        bestScore = Math.min(score, bestScore);
        beta = Math.min(beta, score);
        if (beta <= alpha) break;
      }
    }
    return bestScore;
  }
};

// Computer play mode
const computerPlay = () => {
  resetBtn2.classList.add("hide");
  resetBtn.classList.remove("hide");
  text2.classList.remove("hide");
  newGameBtn2.classList.add("hide");
  newGameBtn.classList.remove("hide");

  homePage.classList.add("hide");
  container.classList.remove("hide");
  pName.classList.add("hide");
  sName.classList.add("hide");

  let currentPlayer = "X";

  boxes.forEach((box, index) => {
    box.removeEventListener("click", box.clickListener);
    box.addEventListener(
      "click",
      (box.clickListener = () => {
        if (board[index] !== "" || gameOver) return;

        board[index] = currentPlayer;
        render();
        if (checkWinner(currentPlayer)) {
          msg.innerHTML = `Congratulations, Winner is: ${currentPlayer}!`;
          msgContainer.classList.remove("hide");
          text.classList.add("hide");
          text2.classList.add("hide");
          container.classList.add("hide");
          resetBtn.classList.add("hide");
          gameOver = true;
          return;
        }

        if (checkDraw()) {
          draw.classList.remove("hide");
          backHome.disabled = true;
          gameOver = true;
          return;
        }

        currentPlayer = "O";
        let bestScore = -Infinity;
        let bestMove;
        for (let i = 0; i < 9; i++) {
          if (board[i] === "") {
            board[i] = "O";
            let score = minimax(board, 0, false);
            board[i] = "";
            if (score > bestScore) {
              bestScore = score;
              bestMove = i;
            }
          }
        }
        board[bestMove] = "O";
        render();

        if (checkWinner("O")) {
          msg.innerHTML = `Congratulations, Winner is: Jason!`;
          msgContainer.classList.remove("hide");
          text.classList.add("hide");
          text2.classList.add("hide");
          container.classList.add("hide");
          resetBtn.classList.add("hide");
          gameOver = true;
          return;
        }

        if (checkDraw()) {
          draw.classList.remove("hide");
          gameOver = true;
          return;
        }

        currentPlayer = "X";
      })
    );
  });
};

// Event listeners

// Event listener for starting a new game in computer play mode
newGameBtn.addEventListener("click", () => {
  resetGame();
  computerPlay();
});

// Event listener for starting a new game in multiplayer mode
newGameBtn2.addEventListener("click", () => {
  resetGame();
  multiplayer();
});

// Event listener for resetting the game in computer play mode
resetBtn.addEventListener("click", () => {
  draw.classList.add("hide");
  backHome.disabled = false;
  resetGame();
  computerPlay();
});

// Event listener for resetting the game in multiplayer mode
resetBtn2.addEventListener("click", () => {
  draw.classList.add("hide");
  backHome.disabled = false;
  resetGame();
  multiplayer();
  text2.classList.add("hide");
});

// Event listener for starting computer play mode from home page
homePage.querySelector("#computer").addEventListener("click", () => {
  resetGame();
  computerPlay();
});

// Event listener for going back to home page
backHome.addEventListener("click", () => {
  resetGame();
  homePage.classList.remove("hide");
  container.classList.add("hide");
  pName.classList.add("hide");
  sName.classList.add("hide");
  text2.classList.add("hide");
});

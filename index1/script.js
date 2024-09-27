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
// const game = document.querySelector(".game");

// const pName = document.getElementById("pName");
// const sName = document.getElementById("sName");
// const text = document.getElementById("text");
// const draw = document.querySelector(".draw");
// const homePage = document.querySelector("#home-page");
// const computer = document.querySelector("#computer");
// const text2 = document.querySelector("#text2");
// const select_level = document.querySelector(".select-level");

// select_level.classList.add("hide");
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
//   game.classList.remove("hide");
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

// computer.addEventListener('click',()=>{
//   select_level.classList.remove("hide");
//   game.classList.add("hide");
//   container.classList.add("hide");
//   resetBtn2.classList.add("hide");
//   resetBtn.classList.add("hide");
//   text2.classList.remove("hide");
//   newGameBtn2.classList.add("hide");
//   newGameBtn.classList.add("hide");

//   homePage.classList.add("hide");
//   // container.classList.remove("hide");
//   pName.classList.add("hide");
//   sName.classList.add("hide");
// })
  


// const hardPlayer = () => {
//   // game.classList.remove("hide");
//   // select_level.classList.add("hide");
//   resetBtn2.classList.add("hide");
//   resetBtn.classList.remove("hide");
//   text2.classList.remove("hide");
//   newGameBtn2.classList.add("hide");
//   newGameBtn.classList.remove("hide");

//   homePage.classList.add("hide");
//   container.classList.remove("hide");
//   pName.classList.add("hide");
//   sName.classList.add("hide");

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
//   // computerPlay(); // Start new game with computer play functionality
//   hardPlayer();
// });

// newGameBtn2.addEventListener("click", () => {
//   resetGame();
//   multiplayer();
// });

// resetBtn.addEventListener("click", () => {
//   draw.classList.add("hide");
//   backHome.disabled = false;
//   resetGame();
//   // computerPlay(); // Ensure the computer play mode restarts correctly on reset
//   hardPlayer();
// });

// resetBtn2.addEventListener("click", () => {
//   draw.classList.add("hide");
//   backHome.disabled = false;
//   resetGame();
//   multiplayer();
//   // hardPlayer();
//   text2.classList.add("hide");
// });

// homePage.querySelector("#computer").addEventListener("click", () => {
//   resetGame();
//   // computerPlay();
//   hardPlayer();
// });

// // Back-Home Functionality

// backHome.addEventListener("click", () => {
//   resetGame();
//   homePage.classList.remove("hide");
//   container.classList.add("hide");
//   pName.classList.add("hide");
//   sName.classList.add("hide");
//   text2.classList.add("hide");
//   select_level.classList.add("hide");
// });





// // Back-Home 2 functionality

// // const backHome2 = document.querySelector("#back-home2");

// // backHome2.addEventListener("click", () => {
// //   resetGame();
// //   homePage.classList.remove("hide");
// //   container.classList.add("hide");
// //   pName.classList.add("hide");
// //   sName.classList.add("hide");
// //   text2.classList.add("hide");
// //   select_level.classList.add("hide");
// // });

















const boxes = document.querySelectorAll(".box");
const resetBtn = document.querySelector("#reset-btn");
const resetBtn2 = document.querySelector("#reset-btn2");
const newGameBtn = document.querySelector("#new-btn");
const newGameBtn2 = document.querySelector("#new-btn2");
const msgContainer = document.querySelector(".msg-container");
const msg = document.querySelector("#msg");

const container = document.querySelector(".container");
const head = document.querySelector("#h1");
const backHome = document.querySelector("#back-home");
const game = document.querySelector(".game");

const pName = document.getElementById("pName");
const sName = document.getElementById("sName");
const text = document.getElementById("text");
const draw = document.querySelector(".draw");
const homePage = document.querySelector("#home-page");
const computer = document.querySelector("#computer");
const text2 = document.querySelector("#text2");
const select_level = document.querySelector(".select-level");
const turn = document.querySelector(".turn");

select_level.classList.add("hide");
text2.classList.add("hide");
draw.classList.add("hide");
container.classList.add("hide");
resetBtn.classList.add("hide");
resetBtn2.classList.add("hide");
sName.classList.add("hide");
pName.classList.add("hide");
text.classList.add("hide");
turn.classList.add("hide");


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

let gameOver = false;
let board = ["", "", "", "", "", "", "", "", ""];
let count = 0;
let jasonPlaysFirst = false; // Flag to determine if Jason plays first

const render = () => {
  boxes.forEach((box, i) => {
    box.textContent = board[i];
    box.style.backgroundColor =
      board[i] === "X" ? "orange" : board[i] === "O" ? "yellow" : "";
  });
};

const checkDraw = () => board.every((cell) => cell !== "");

const checkWinner = (player) => {
  return winPatterns.some((pattern) =>
    pattern.every((index) => board[index] === player)
  );
};

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

const matchDraw = () => {
  draw.classList.remove("hide");
  backHome.disabled = true;
};


const showWinner = (winner, isHardPlayer = false) => {
  setTimeout(() => {
    if (isHardPlayer && winner === "O") {
      msg.innerHTML = "Sorry! Winner is Jason.";
    } else {
      msg.innerHTML = `Congratulations, Winner is: ${winner} ${
        winner === "X" ? pName.value : sName.value
      }!`;
    }
    msgContainer.classList.remove("hide");
    turn.classList.add("hide");
    container.classList.add("hide");
    resetBtn.classList.add("hide");
    pName.classList.add("hide");
    sName.classList.add("hide");
    text.classList.add("hide");
    text2.classList.add("hide");
  }, 1000);
  disableBoxes();
};


const disableBoxes = () => {
  boxes.forEach((box) => (box.disabled = true));
};

const enableBoxes = () => {
  boxes.forEach((box) => {
    box.disabled = false;
    box.innerHTML = "";
    text.innerHTML = "Turn of X";
    box.style.backgroundColor = "";
  });
};

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
  resetBtn.disabled = false; // Enable the reset button
};

const multiplayer = () => {
  turn.classList.add("hide");
  game.classList.remove("hide");
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
    box.removeEventListener("click", box.clickListener); // Remove previous event listener if any
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

computer.addEventListener("click", () => {
  select_level.classList.remove("hide");
  game.classList.add("hide");
  container.classList.add("hide");
  resetBtn2.classList.add("hide");
  resetBtn.classList.add("hide");
  text2.classList.remove("hide");
  newGameBtn2.classList.add("hide");
  newGameBtn.classList.add("hide");

  homePage.classList.add("hide");
  pName.classList.add("hide");
  sName.classList.add("hide");
});


const hardPlayer = (jasonPlaysFirst = false) => {
  resetGame(); // Ensure the game is reset properly
  turn.classList.remove("hide");
  select_level.classList.add("hide");
  game.classList.remove("hide");
  resetBtn2.classList.add("hide");
  resetBtn.classList.remove("hide");
  text2.classList.remove("hide");
  newGameBtn2.classList.add("hide");
  newGameBtn.classList.remove("hide");

  homePage.classList.add("hide");
  container.classList.remove("hide");
  pName.classList.add("hide");
  sName.classList.add("hide");

  let currentPlayer = "X"; // User starts as "X"

  // If Jason is supposed to play first
  if (jasonPlaysFirst) {
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
      showWinner("O", true);  // Pass true for isHardPlayer when "O" wins
      gameOver = true;
      return;
    }

    if (checkDraw()) {
      matchDraw();
      gameOver = true;
      return;
    }

    // Switch back to user's turn
    currentPlayer = "X";
  }

  boxes.forEach((box, index) => {
    box.removeEventListener("click", box.clickListener); // Remove previous event listener if any
    box.addEventListener(
      "click",
      (box.clickListener = () => {
        if (board[index] !== "" || gameOver) return;

        board[index] = currentPlayer;
        render();

        if (checkWinner(currentPlayer)) {
          showWinner(currentPlayer);
          gameOver = true;
          return;
        }

        if (checkDraw()) {
          matchDraw();
          gameOver = true;
          return;
        }

        // Switch to computer's turn
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
          showWinner("O", true);  // Pass true for isHardPlayer when "O" wins
          gameOver = true;
          return;
        }

        if (checkDraw()) {
          matchDraw();
          gameOver = true;
          return;
        }

        // Switch back to user's turn
        currentPlayer = "X";
      })
    );
  });
};


// give first move to device

const turnMe = () => {
  jasonPlaysFirst = true;
  hardPlayer(jasonPlaysFirst);
};

newGameBtn.addEventListener("click", () => {
  resetGame();
  hardPlayer();
});

newGameBtn2.addEventListener("click", () => {
  resetGame();
  multiplayer();
});

resetBtn.addEventListener("click", () => {
  resetGame();
  hardPlayer();
});

resetBtn2.addEventListener("click", () => {
  resetGame();
  multiplayer();
});

// Back-Home Functionality
backHome.addEventListener("click", () => {
  resetGame();
  turn.classList.add("hide");
  homePage.classList.remove("hide");
  container.classList.add("hide");
  pName.classList.add("hide");
  sName.classList.add("hide");
  text2.classList.add("hide");
  select_level.classList.add("hide");
  draw.classList.add("hide");
  msgContainer.classList.add("hide");
  game.classList.add("hide");
});














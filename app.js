const boxes = document.querySelectorAll(".box");
const resetBtn = document.getElementById("reset-btn");
const newBtn = document.getElementById("new-btn");
const msgContainer = document.querySelector(".msg-container");
const msg = document.getElementById("msg");
const confettiCanvas = document.getElementById("confetti");

let turn = "X";
let board = ["", "", "", "", "", "", "", "", ""];
let gameOver = false;

const winPatterns = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], 
  [0, 3, 6], [1, 4, 7], [2, 5, 8], 
  [0, 4, 8], [2, 4, 6]
];

const checkWinner = () => {
  for (let pattern of winPatterns) {
    const [a, b, c] = pattern;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      showWinner(board[a], pattern);
      return;
    }
  }
  if (!board.includes("")) {
    showMessage("It's a Draw!");
  }
};

const showWinner = (winner, pattern) => {
  gameOver = true;
  pattern.forEach(index => boxes[index].classList.add("win"));
  showMessage(`🎉 Congratulations! ${winner} Wins! 🎉`);
  startConfetti(); // Trigger confetti effect
};

const showMessage = (message) => {
  msg.innerText = message;
  msgContainer.style.display = "block";
};

const resetGame = () => {
  board.fill("");
  gameOver = false;
  boxes.forEach(box => {
    box.innerText = "";
    box.classList.remove("win");
  });
  msgContainer.style.display = "none";
  stopConfetti(); // Stop confetti effect
};

boxes.forEach((box, index) => {
  box.addEventListener("click", () => {
    if (!gameOver && !box.innerText) {
      board[index] = turn;
      box.innerText = turn;
      turn = turn === "X" ? "O" : "X";
      checkWinner();
    }
  });
});

resetBtn.addEventListener("click", resetGame);
newBtn.addEventListener("click", resetGame);

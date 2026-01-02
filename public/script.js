let mines = [];

function startGame() {
  const count = document.getElementById("mineCount").value;

  fetch("/start", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ mines: Number(count) })
  })
  .then(res => res.json())
  .then(data => {
    mines = data.mines;
    drawGrid();
  });
}

function drawGrid() {
  const grid = document.getElementById("grid");
  grid.innerHTML = "";

  for (let i = 0; i < 25; i++) {
    const cell = document.createElement("div");
    cell.className = "cell";
    cell.onclick = () => reveal(cell, i);
    grid.appendChild(cell);
  }
}

function reveal(cell, index) {
  if (mines.includes(index)) {
    cell.classList.add("mine");
    alert("Boom 💣 Game Over");
  } else {
    cell.classList.add("safe");
  }
}

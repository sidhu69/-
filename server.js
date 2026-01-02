const express = require("express");
const app = express();
app.use(express.json());
app.use(express.static("public"));

const GRID_SIZE = 25;

app.post("/start", (req, res) => {
  const mines = req.body.mines;
  const positions = new Set();

  while (positions.size < mines) {
    positions.add(Math.floor(Math.random() * GRID_SIZE));
  }

  res.json({ mines: [...positions] });
});

app.listen(3000, () => {
  console.log("Mines game running on http://localhost:3000");
});

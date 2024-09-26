import express from "express";
import Data from "../data.js";

const app = express();
const PORT = 3000;

app.get("/api/data", (req, res) => {
  res.send(Data);
});

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}/api/data`);
});

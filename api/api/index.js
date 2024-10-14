import express from "express";
import Data from "../data.js";
import cors from "cors";

const app = express();

app.use(cors());
const PORT = 3000;

app.get("/api/data", (req, res) => {
  res.send(Data);
});

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}/api/data`);
});

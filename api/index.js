const express = require("express");
const cors = require("cors");
const axios = require("axios");
const app = express();
const port = 5000;

app.use(cors());

const fetchAdvice = async () => {
  try {
    const response = await axios.get("https://api.adviceslip.com/advice");
    return response.data.slip.advice;
  } catch (error) {
    console.error("Error fetching advice:", error);
    return "Always keep learning.";
  }
};

const fetchQuote = async () => {
  try {
    const response = await axios.get("https://api.quotable.io/random");
    return `${response.data.content} - ${response.data.author}`;
  } catch (error) {
    console.error("Error fetching quote:", error);
    return "The best way to predict the future is to invent it. - Alan Kay";
  }
};
const fetchFunQuestion = async () => {
  try {
    const response = await axios.get("https://api.tronalddump.io/random/quote");
    return response.data.value;
  } catch (error) {
    console.error("Error fetching silly question:", error);
    return "Why do Java developers wear glasses? Because they don't C#.";
  }
};

app.get("/api/random", async (req, res) => {
  const advice = await fetchAdvice();
  const quote = await fetchQuote();
  const funQuestion = await fetchFunQuestion();

  res.json({
    advice,
    quote,
    funQuestion,
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

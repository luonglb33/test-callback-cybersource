const express = require("express");
const app = express();

// Middleware to parse incoming JSON
app.use(express.json());

app.post("/cybersource/callback", (req, res) => {
  console.log("🚀 =================================");
  console.log("🚀 ~ app.post ~ req", req);

  // if (decision === "ACCEPT") {
  //   console.log(`Token received: ${payment_token}`);
  //   console.log(`Card Details: ${JSON.stringify(card)}`);
  //   // Save the token and card details to your database for future transactions
  // } else {
  //   console.error(`Error: ${message}`);
  // }

  // Respond to CyberSource
  res.status(200).send("Received");
});

app.get("/", (req, res) => {
  console.log("🚀 ~ app.get ~ req:", req);
  res.send("Hello World");
});

app.listen(8085, () => {
  console.log("Server running on http://localhost:8085");
});

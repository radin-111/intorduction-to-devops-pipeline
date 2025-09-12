require('dotenv').config();
const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("My server is running");
});

app.listen(port, () => {
  console.log(`My server is running on port ${port}`);
});

const express = require("express");
const cors = require("cors");
const { PORT } = require("./config/serverConfig");
const generateStatement = require("./generateStatement");
const sendSOP = require("./sendSOP");
const app = express();

app.use(express.json());

// Configure CORS for development (adjust as needed)
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "POST",
  })
);

app.post("/api/sendSOP", sendSOP);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

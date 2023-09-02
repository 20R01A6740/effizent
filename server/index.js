const express = require("express");
const cors = require("cors");
const { PORT } = require("./config/serverConfig");
const { sendBasicEmail } = require("./mailer");
const generateStatement = require("./generateStatement");
const app = express();

app.use(express.json());

// Configure CORS for development (adjust as needed)
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "POST",
  })
);
const letterContent = generateStatement({});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  sendBasicEmail(
    "sender",
    "20r01a6740@cmritonline.ac.in",
    "Testing mailing service",
    letterContent
  );
});

const express = require('express');
const cors = require('cors');
const {PORT} = require("./config/serverConfig");

const {sendBasicEmail} = require("./mailer")

const app = express();

app.use(express.json());

// Configure CORS for development (adjust as needed)
app.use(
  cors({
    origin: 'http://localhost:3000', 
    methods: 'POST'
  })
);



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  sendBasicEmail(
          'sender',
          'madhusudan753@gmail.com',
          'Testing mailing service',
          'Hello this is a test mail sent to u by node mailer'
      );
});

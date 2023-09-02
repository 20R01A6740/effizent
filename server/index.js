const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

dotenv.config(); // Load environment variables from .env file

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Configure CORS for development (adjust as needed)
app.use(
  cors({
    origin: 'http://localhost:3000', // Replace with the actual URL of your React frontend
    methods: 'POST', // Allow only POST requests (adjust as needed)
  })
);

// Define an API route to handle form submissions
app.post('/api/submit-form', (req, res) => {
  const formData = req.body;

  // Store the form data in a database or file (e.g., MongoDB, PostgreSQL, or a JSON file)
  // Here, we'll just log it for demonstration purposes
  console.log('Received form data:', formData);

  // Create and configure a nodemailer transporter to send emails
  const transporter = nodemailer.createTransport({
    service: 'Gmail', // Use your email service provider
    auth: {
      user: process.env.EMAIL_USER, // Your email address
      pass: process.env.EMAIL_PASSWORD, // Your email password or app-specific password
    },
  });

  // Define the email message
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: formData.email,
    subject: 'Form Submission Confirmation',
    text: `Thank you for submitting the form. Here's a summary of your information:\n\nName: ${formData.name}\nEmail: ${formData.email}\n`,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Email could not be sent:', error);
      res.status(500).send('Email could not be sent');
    } else {
      console.log('Email sent:', info.response);
      res.status(200).send('Form submitted and email sent');
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

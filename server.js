require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');

const app = express();
const PORT = 3000;

// Load email configuration
const emailConfig = {
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER, // Your email from .env
        pass: process.env.EMAIL_PASS  // App-specific password from .env
    }
};

// Create a transporter
const transporter = nodemailer.createTransport(emailConfig);

// Email sending function
async function sendEmail() {
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: 'adhavshruti12@gmail.com', // Replace with the recipient's email address
        subject: 'Test Email',
        text: 'This email was sent automatically when the server started.'
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log(`Email sent successfully! Message ID: ${info.messageId}`);
    } catch (error) {
        console.error('Error sending email:', error);
    }
}

// Default route to test the server
app.get('/', (req, res) => {
    res.send('Email sender server is up and running!');
});

// Start the server
app.listen(PORT, async () => {
    console.log(`Server is running on http://localhost:${PORT}`);

    // Trigger the email sending function when the server starts
    await sendEmail();
});

# Email Sending Feature using Nodemailer

This project demonstrates how to create a simple email sending feature using Node.js and Nodemailer. It allows you to send an automated email when the server starts.

## Prerequisites

Before you begin, ensure that you have met the following requirements:

- Node.js and npm installed on your machine, set up a basic Node.js server using Express.
- Configure Nodemailer for sending emails using Gmail's SMTP service.
-  A Gmail account and an app-specific password (for security reasons, Gmail requires app-specific passwords when accessing the account through external apps).
- Send an email automatically when the server starts.

## Features
- **1. Environment variables**: Email credentials are securely stored in a .env file.
- **2. Nodemailer**: Nodemailer is used to send emails via Gmail’s SMTP service.
- **3. Express server**: A basic Express server is set up to handle requests and trigger the email sending function when the server starts.

## Setup

Follow these steps to get the project up and running locally:

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```
   
2. **Install dependencies**:
    You will need to install the required npm packages by running:
   ```bash
       npm install
   ```
3. **Create a .env file**: Create a .env file in the root directory and add your email credentials as follows:
   ```.env
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-specific-password
   ```
You can generate an app-specific password from your Gmail account settings under "Security."

4. **Start the server**:
   Run the server with:
   ```bash
    node server.js
   ```
5. The server will automatically send an email to the specified recipient when it starts. You can check the console for the message ID of the sent email.

   **Example Output** : When the server starts, you should see output like:
    ```bash
    Server is running on http://localhost:3000
    Email sent successfully! Message ID: <unique-message-id>
   ```
## Troubleshooting
If you're facing issues sending the email, ensure that you have generated an app-specific password from your Gmail account settings.
Make sure to double-check your .env file for correct credentials.

## License
This project is licensed under the MIT License.

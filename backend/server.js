const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());

// Create a transporter using SMTP
const transporter = nodemailer.createTransport({
  host: 'smtp.stackmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    // Send email
    await transporter.sendMail({
      from: `"WYPEiT Contact Form" <${process.env.SMTP_USER}>`,
      to: "support@wypeit.com",
      subject: "New Contact Form Submission",
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong> ${message}</p>`,
    });

    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Error sending email', error: error.message });
  }
});

app.post('/api/subscribe', async (req, res) => {
  const { email } = req.body;

  try {
    // Send subscription confirmation email
    await transporter.sendMail({
      from: `"WYPEiT Newsletter" <${process.env.SMTP_USER}>`,
      to: "support@wypeit.com",
      subject: "New Newsletter Subscription",
      text: `New subscription: ${email}`,
      html: `<p>New subscription: ${email}</p>`,
    });

    res.status(200).json({ message: 'Subscription successful' });
  } catch (error) {
    console.error('Error processing subscription:', error);
    res.status(500).json({ message: 'Error processing subscription', error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
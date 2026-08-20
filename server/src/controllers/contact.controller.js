const { validationResult } = require('express-validator');
const Contact = require('../models/Contact.model');
const nodemailer = require('nodemailer');

/**
 * POST /api/contact
 * Saves the contact message to MongoDB and optionally sends an email notification
 */
const submitContact = async (req, res) => {
  // Check validation errors from middleware
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      errors: errors.array().map((e) => ({ field: e.path, message: e.msg })),
    });
  }

  const { name, email, message } = req.body;

  try {
    // Save to MongoDB
    const contact = await Contact.create({ name, email, message });

    // Send email notification if credentials are set
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      try {
        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
          },
        });

        await transporter.sendMail({
          from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
          to: 'muskankumari7371039@gmail.com',
          subject: `New Portfolio Message from ${name}`,
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
            <hr/>
            <small>Sent from your portfolio contact form</small>
          `,
        });
      } catch (emailError) {
        // Email failure is non-critical — message is already saved
        console.error('Email send failed:', emailError.message);
      }
    }

    return res.status(201).json({
      success: true,
      message: 'Your message has been received! I will get back to you soon.',
      data: { id: contact._id },
    });
  } catch (error) {
    console.error('Contact submission error:', error);
    return res.status(500).json({
      success: false,
      message: 'Something went wrong. Please try again later.',
    });
  }
};

module.exports = { submitContact };

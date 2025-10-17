const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// 📥 Contact Form Submission
router.post("/", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res
      .status(400)
      .json({ success: false, message: "All fields (name, email, message) are required" });
  }

  try {
    // Send message to founder/admin
    await transporter.sendMail({
      from: `"B2 Tech Services" <${process.env.EMAIL_USER}>`,
      to: process.env.FOUNDER_EMAIL,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    });

    res.json({ success: true, message: "Form submitted successfully" });
  } catch (error) {
    console.error("❌ Contact form submission failed:", error);
    res.status(500).json({ success: false, message: "Failed to send message" });
  }
});

module.exports = router;

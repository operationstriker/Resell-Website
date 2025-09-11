const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

// Setup Gmail transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER, // your Gmail address
    pass: process.env.EMAIL_PASS  // Gmail App Password
  }
});

// API to send email
// msre ydbk xrcm sssg
app.post("/send-email", async (req, res) => {
  const { customerEmail, paymentLink } = req.body;

  try {
    await transporter.sendMail({
      from: `"Airpods Vendor" <${process.env.EMAIL_USER}>`,
      to: customerEmail,
      subject: "Complete Your Purchase",
      html: `
        <p>Thanks for shopping with us!</p>
        <p>Click below to complete your payment:</p>
        <a href="${paymentLink}">${paymentLink}</a>
      `
    });

    res.json({ success: true, message: "Email sent!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: "Email failed to send" });
  }
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));

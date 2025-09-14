// const express = require("express");
// const nodemailer = require("nodemailer");
// const bodyParser = require("body-parser");
// const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

// const app = express();

// // ⚠️ Important: For webhook endpoint, use raw body
// app.use("/webhook", express.raw({ type: "application/json" }));

// // For other routes, use JSON parser
// app.use(bodyParser.json());

// // Gmail transporter
// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASS,
//   },
// });

// // ✅ Create Checkout Session
// app.post("/create-checkout-session", async (req, res) => {
//   try {
//     const session = await stripe.checkout.sessions.create({
//       payment_method_types: ["card"],
//       mode: "payment",
//       line_items: [
//         {
//           price_data: {
//             currency: "usd",
//             product_data: { name: "Airpods Vendor" },
//             unit_amount: 1500, // $15.00
//           },
//           quantity: 1,
//         },
//       ],
//       success_url: "http://localhost:3000/success",
//       cancel_url: "http://localhost:3000/cancel",
//       customer_email: req.body.customerEmail,
//     });

//     res.json({ url: session.url });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// // ✅ Stripe Webhook (payment completed)
// const endpointSecret = "whsec_XXXX"; // replace with your real secret from Stripe Dashboard

// app.post("/webhook", (req, res) => {
//   const sig = req.headers["stripe-signature"];

//   let event;
//   try {
//     event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
//   } catch (err) {
//     return res.status(400).send(`Webhook Error: ${err.message}`);
//   }

//   if (event.type === "checkout.session.completed") {
//     const session = event.data.object;
//     const customerEmail = session.customer_email;

//     // Send custom link after successful payment
//     transporter.sendMail({
//       from: `"Airpods Vendor" <${process.env.EMAIL_USER}>`,
//       to: customerEmail,
//       subject: "Your Download Link",
//       html: `
//         <p>Thank you for your purchase!</p>
//         <p>Here is your custom link:</p>
//         <a href="https://yourwebsite.com/custom-link">Download Here</a>
//       `,
//     });

//     console.log("✅ Email sent to", customerEmail);
//   }

//   res.json({ received: true });
// });

// app.listen(3000, () => console.log("🚀 Server running on http://localhost:3000"));



app.post("/create-checkout-session", async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: { name: "Airpods Vendor" },
            unit_amount: 1500, // $15.00
          },
          quantity: 1,
        },
      ],
      success_url: "http://localhost:3000/success",
      cancel_url: "http://localhost:3000/cancel",
      customer_email: req.body.customerEmail, // capture their email
    });

    res.json({ url: session.url });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

// Endpoint to create checkout session
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
      customer_email: req.body.customerEmail, // store their email
    });

    res.json({ url: session.url });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const { onRequest } = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const express = require("express");
const cors = require("cors");
const Dotenv = require("dotenv");
Dotenv.config();
const stripe = require("stripe")(
  "sk_test_51PwpMuK2PpLTPswqwe3LHDiWnownh8SwzvGmM3S9MdKVLDUpyge0gzmL53HmH7LCZfMiEilmnxf0xfJN4TZrIy4O00yhvc0Lqk"
);

const app = express();
app.use(cors({ origin: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ message: "success" });
});

app.post("/payment/create", async (req, res) => {
  const total = parseInt(req.query.total);
  if (total > 0) {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: total,
      currency: "usd",
    });

    res.status(201).json({
      client_secret: paymentIntent.client_secret,
    });
  } else {
    res.status(403).json({ message: "total must be greater than 0" });
  }
});

exports.api = onRequest(app);

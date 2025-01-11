const express = require("express");
const {
  getStats,
  getDeviation,
} = require("../controllers/cryptoControllers.js");
const fetchCryptoData = require("../utils/fetchCryptoData.js");

const router = express.Router();

router.get("/stats", getStats);
router.get("/deviation", getDeviation);

//this route is just seeding the data as our cron job will run after every 2 hour for testing purpose i build this
router.get("/fetch-crypto-data", async (req, res) => {
  try {
    await fetchCryptoData();
    res.status(200).send({ message: "Data fetched successfully!" });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

module.exports = router;

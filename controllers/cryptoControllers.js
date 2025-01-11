const Crypto = require("../models/cryptoSchema.js");

const getStats = async (req, res) => {
  const { coin } = req.query;
  if (!coin) return res.status(400).json({ error: "Coin is required" });

  const latest = await Crypto.findOne({ coin }).sort({ timestamp: -1 });
  if (!latest)
    return res.status(404).json({ error: "No data found for this coin" });

  res.json({
    price: latest.price,
    marketCap: latest.marketCap,
    "24hChange": latest.change24h,
  });
};

module.exports = { getStats };

const calculateStandardDeviation = (data) => {
  const mean = data.reduce((a, b) => a + b, 0) / data.length;
  const variance =
    data.reduce((a, b) => a + Math.pow(b - mean, 2), 0) / data.length;
  return Math.sqrt(variance).toFixed(2);
};

const getDeviation = async (req, res) => {
  const { coin } = req.query;
  if (!coin) return res.status(400).json({ error: "Coin is required" });

  const records = await Crypto.find({ coin })
    .sort({ timestamp: -1 })
    .limit(100);
  if (records.length === 0)
    return res.status(404).json({ error: "No data found for this coin" });

  const prices = records.map((record) => record.price);
  const deviation = calculateStandardDeviation(prices);

  res.json({ deviation });
};

module.exports = { getStats, getDeviation };

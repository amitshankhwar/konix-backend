const axios = require("axios");
const Crypto = require("../models/cryptoSchema.js");

const fetchCryptoData = async () => {
  try {
    const { data } = await axios.get(
      "https://api.coingecko.com/api/v3/simple/price",
      {
        params: {
          ids: "bitcoin,matic-network,ethereum",
          vs_currencies: "usd",
          include_market_cap: true,
          include_24hr_change: true,
        },
      }
    );

    const coins = Object.keys(data);
    for (const coin of coins) {
      const record = new Crypto({
        coin,
        price: data[coin].usd,
        marketCap: data[coin].usd_market_cap,
        change24h: data[coin].usd_24h_change,
      });
      await record.save();
    }
    console.log("Crypto data fetched and stored");
  } catch (err) {
    console.error("Error fetching crypto data", err.message);
  }
};

module.exports = fetchCryptoData;

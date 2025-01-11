require("dotenv").config(); // Load environment variables
const app = require("./app.js"); // Import the Express app
const schedule = require("node-schedule"); // Import scheduler
// Background job

const fetchCryptoData = require("./utils/fetchCryptoData.js");

// Schedule the background job to run every 2 hours
schedule.scheduleJob("0 */2 * * *", fetchCryptoData);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

# Crypto Tracker Backend

This project is a backend server that tracks cryptocurrency data for Bitcoin, Matic, and Ethereum. It fetches the current price, market cap, and 24-hour price change every 2 hours, stores it in a MongoDB database, and provides APIs to access the data.

## Features

- **Background Job**: Fetches cryptocurrency data every 2 hours using CoinGecko API.
- **APIs**:
  - `/stats`: Retrieves the latest cryptocurrency data.
  - `/deviation`: Calculates the standard deviation of the last 100 prices for a cryptocurrency.
- **Database**: Stores fetched data in MongoDB.

---

## Technologies Used

- **Node.js**: Backend framework.
- **Express.js**: Web framework for creating APIs.
- **MongoDB**: Database for storing cryptocurrency data.
- **Mongoose**: ODM for MongoDB.
- **node-schedule**: For scheduling background jobs.
- **Axios**: HTTP client for fetching data from CoinGecko API.

---

## Prerequisites

Before you begin, ensure you have the following installed:

1. [Node.js](https://nodejs.org/) (v16 or higher recommended)
2. [MongoDB](https://www.mongodb.com/) (local or cloud-based)
3. [Postman](https://www.postman.com/) (optional, for testing APIs)

---

## Setup Instructions

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/crypto-tracker.git
   cd crypto-tracker
2. **Install Dependencies:**:
   ```bash
    npm install

3. **Set Environment Variables: Create a .env file in the root directory and configure the following:**:
   ```bash
    PORT=3000
    MONGO_URI=mongodb://localhost:27017/crypto-tracker

4. **Run the Application: Start the server:**:
   ```bash
    npm start


## API Endpoints

### 1. **Fetch Latest Stats**
- **Endpoint**: `/stats`
- **Method**: `GET`
- **Query Parameters**:
  - `coin`: Cryptocurrency ID (`bitcoin`, `matic-network`, `ethereum`).
- **Example Request**:
  ```http
  GET http://localhost:3000/stats?coin=bitcoin
- **Sample Response**:
  ```http
   {
    "price": 40000,
    "marketCap": 800000000,
    "24hChange": 3.4
   }

  
  
### 2. **Calculate Standard Deviation**
- **Endpoint**: `/deviation`
- **Method**: `GET`
- **Query Parameters**:
  - `coin`: Cryptocurrency ID (`bitcoin`, `matic-network`, `ethereum`).
- **Example Request**:
  ```http
  GET http://localhost:3000/deviation?coin=ethereum
- **Sample Response**:
  ```http
  {
  "deviation": 4082.48
  }
  
### 3. **Manually Trigger Fetch Job (For Testing Only)**
- **Endpoint**: `/fetch-crypto-data`
- **Method**: `GET`
- **Description**: `Triggers the background job to fetch cryptocurrency data immediately.`
- **Example Request**:
  ```http
  GET http://localhost:3000/fetch-crypto-data
- **Sample Response**:
  ```http
  {
  "message": "Data fetched successfully!"
  }

## Folder Structure

```bash
  .
    ├── src
    │   ├── db           # ConnectDb.js file (e.g., database connection)
    │   ├── controllers  # Controller functions for APIs
    │   ├── models       # Mongoose models
    │   ├── routes       # Route definitions
    │   ├── utils        # Helper functions (e.g., cryptoData fetching)
    │   ├── app.js       # Express app setup
    │   ├── .env         # Enviromental variables used 
    ├── server.js        # Entry point
    ├── package.json     # Node.js dependencies
    ├── README.md        # Documentation
    




   


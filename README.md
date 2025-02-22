# Express.js WebSocket Server & Api's

Welcome to the Express.js server! This repository contains an Express.js application that sets up a WebSocket server and Historical data endpoints.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have [Node.js](https://nodejs.org/) installed (version 12.0.0 or later).
- You have [npm](https://www.npmjs.com/) (Node Package Manager) installed, which comes with Node.js.
- You have a code editor like [Visual Studio Code](https://code.visualstudio.com/) installed.

## Getting Started

Follow these steps to set up the server locally:

1. *Clone the repository*

   Open your terminal and run the following command to clone the repository:

   
   git clone https://github.com/Atanurag/crypto_server.git


2. *Navigate to project dir*
    cd your-repo-name

3. *install dependencies*

   npm install

   node index.js OR  node ws.js


## Usage

This Express.js server provides a set of RESTful API endpoints for accessing cryptocurrency data, as well as a WebSocket endpoint for real-time updates from Binance. The server is designed to be accessed by the corresponding frontend application.

### API Endpoints

The following endpoints are available for retrieving cryptocurrency data:

- **GET /binance-spot-data**
  - Description: Retrieve a binance spot data with parameters associated with endpoint.
   

- **GET /binance-futures-data**
  - Description: Retrieve binance futures data
  - 
  **GET /mexc-spot-data**
  - Description: Retrieves the MEXC spot databwith query params associated.
 
  **Etc**
  

### WebSocket Endpoint

- **WebSocket Connection**
  - Description: Establish a WebSocket connection to receive real-time updates  from Binance.
  - Endpoint: `ws://localhost:3000/ws/binance`
  - Usage: Connect to this WebSocket endpoint to start receiving live market data for the specified cryptocurrencies. The server will push real-time updates as they occur.
/

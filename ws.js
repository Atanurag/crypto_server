const express = require('express');
const WebSocket = require('ws');

const app = express();
const PORT = process.env.PORT || 4000;

const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

//  WebSocket server
const wss = new WebSocket.Server({ server });

// Connecting to the Binance WebSocket for 1s interval data
const binanceWs = new WebSocket(
  'wss://stream.binance.com:9443/ws/btcusdt@kline_1s'
);

binanceWs.onmessage = (e) => {
  const message = e.data;
  console.log('Received message from Binance:', message);

  // Broadcasting the message
  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(message);
    }
  });
};

// Handling WebSocket connection from clients
wss.on('connection', (ws) => {
  console.log('New client connected');

  ws.send('Welcome to the WebSocket server!');

  // Handling client disconnection
  ws.on('close', () => {
    console.log('Client disconnected');
  });
});

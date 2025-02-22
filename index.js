// Importing the required modules
const express = require('express');
const cors = require('cors');
const fetch = (...args) =>
  import('node-fetch').then(({ default: fetch }) => fetch(...args));

const app = express();

// Enable CORS for all routes
app.use(cors('*'));

app.use(express.json());

// Define a port
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello, Crypto!');
});

app.get('/binance-spot-data', async (req, res) => {
  const { interval, limit } = req.query;

  try {
    const response = await fetch(
      `https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=${interval}&limit=${limit}`
    );
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error fetching data from Binance API:', error);
    res.status(500).json({
      error: 'Failed to fetch data from Binance API',
    });
  }
});
//https://541b1ce7-2d72-4cf1-aa76-45d496eabe31-00-1c2vhbj2yfytc.pike.replit.dev/binance-spot-data?interval=1h&limit=5

app.get('/binance-futures-data', async (req, res) => {
  const { interval, limit } = req.query;

  try {
    const response = await fetch(
      `https://testnet.binancefuture.com/fapi/v1/markPriceKlines?symbol=BTCUSDT&interval=${interval}&limit=${limit}`
    );
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error fetching data from Binance Futures API:', error);
    res.status(500).json({
      error: 'Failed to fetch data from Binance Futures API',
    });
  }
});
//https://541b1ce7-2d72-4cf1-aa76-45d496eabe31-00-1c2vhbj2yfytc.pike.replit.dev/binance-futures-data?interval=1m&limit=5

app.get('/mexc-spot-data', async (req, res) => {
  const { interval, limit } = req.query;

  try {
    const response = await fetch(
      `https://api.mexc.com/api/v3/klines?symbol=BTCUSDT&interval=${interval}&limit=${limit}`
    );
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error fetching data from Binance Futures API:', error);
    res.status(500).json({
      error: 'Failed to fetch data from Binance Futures API',
    });
  }
});
//https://541b1ce7-2d72-4cf1-aa76-45d496eabe31-00-1c2vhbj2yfytc.pike.replit.dev/binance-futures-data?interval=1m&limit=5

app.get('/mexc-futures-data', async (req, res) => {
  const { interval, start, end } = req.query;
  try {
    const response = await fetch(
      `https://contract.mexc.com/api/v1/contract/kline/BTC_USDT?interval=${interval}&start=${start}&end=${end}`
    );
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error fetching data from Binance Futures API:', error);
    res.status(500).json({
      error: 'Failed to fetch data from Binance Futures API',
    });
  }
});
//`https://5c8c2a0d-ca5e-42e9-a43d-f431d4ae066f-00-8hlx8r8eujc3.sisko.replit.dev/mexc-futures-data?interval=${intervalValue}&start=${toUnixTimestamp(startDate)}&end=${toUnixTimestamp(endDate)}

app.get('/kucoin-spot-data', async (req, res) => {
  const { interval, start, end } = req.query;

  // https://api.kucoin.com/api/v1/market/candles?type=1min&symbol=BTC-USDT&startAt=1566703297&endAt=1566789757
  try {
    const response = await fetch(
      `https://api.kucoin.com/api/v1/market/candles?type=${interval}&symbol=BTC-USDT&startAt=${start}&endAt=${end}`
    );
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error fetching data from Binance Futures API:', error);
    res.status(500).json({
      error: 'Failed to fetch data from Binance Futures API',
    });
  }
});
//https://541b1ce7-2d72-4cf1-aa76-45d496eabe31-00-1c2vhbj2yfytc.pike.replit.dev/binance-futures-data?interval=1m&limit=5

app.get('/kucoin-futures-data', async (req, res) => {
  const { interval, start, end } = req.query;
  try {
    const response = await fetch(
      `https://api-futures.kucoin.com/api/v1/kline/query?symbol=BTC-USDT&granularity=${interval}&from=${start}&to=${end}`
    );
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error fetching data from Binance Futures API:', error);
    res.status(500).json({
      error: 'Failed to fetch data from Binance Futures API',
    });
  }
});

//https://541b1ce7-2d72-4cf1-aa76-45d496eabe31-00-1c2vhbj2yfytc.pike.replit.dev/binance-futures-data?interval=1m&limit=5

app.get('/bybit-spot-data', async (req, res) => {
  const { interval, start, end } = req.query;

  // https://api-testnet.bybit.com/v5/market/kline?category=spot&symbol=BTCUSD&interval=60&start=1670601600000&end=1670608800000
  try {
    const response = await fetch(
      `https://api-testnet.bybit.com/v5/market/kline?category=inverse&symbol=BTCUSD&interval=${interval}&start=${start}&end=${end}`
    );
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error fetching data from Binance Futures API:', error);
    res.status(500).json({
      error: 'Failed to fetch data from Binance Futures API',
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

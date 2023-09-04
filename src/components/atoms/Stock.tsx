import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface TimeSeriesData {
  '1. open': string;
  '2. high': string;
  '3. low': string;
  '4. close': string;
  '5. volume': string;
}

interface MetaData {
  '1. Information': string;
  '2. Symbol': string;
  '3. Last Refreshed': string;
  '4. Interval': string;
  '5. Output Size': string;
  '6. Time Zone': string;
}

interface TimeSeries {
  [timestamp: string]: TimeSeriesData;
}

interface StockResponse {
  'Meta Data': MetaData;
  'Time Series (60min)': TimeSeries;
}

function calculatePriceDifference(stockData: StockResponse) {
  const timeSeries = stockData['Time Series (60min)'];
  const timestamps = Object.keys(timeSeries);

  if (timestamps.length < 2) {
    return 'N/A'; // Not enough data points to calculate the difference
  }

  // Get the opening price of the first timestamp
  const firstTimestamp = timestamps[0];
  const openingPrice = parseFloat(timeSeries[firstTimestamp]['1. open']);

  // Get the closing price of the last timestamp
  const lastTimestamp = timestamps[timestamps.length - 1];
  const closingPrice = parseFloat(timeSeries[lastTimestamp]['4. close']);

  // Calculate the price difference
  const priceDifference = closingPrice - openingPrice;

  // Display the price difference with proper formatting
  return priceDifference.toFixed(2); // Assuming 2 decimal places for the price difference
}

export default function Stock() {
  const [stockData, setStockData] = useState<StockResponse | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiKey = process.env.NEXT_PUBLIC_STOCK_API;
    const symbol = 'AAPL';

    const apiUrl = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=1min&apikey=${apiKey}`;

    axios
      .get(apiUrl)
      .then((response) => {
        const data: StockResponse = response.data;
        setStockData(data);
        console.log(stockData);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="flex flex-col">
      {stockData && (
        <>
          <div>
            <p className="text-white text-sm">
              {stockData['Meta Data']['2. Symbol']}{' '}
            </p>
            <p className="text-xs text-slate-500">Apple</p>
          </div>
          <div>
            <p className="text-white text-sm">Dow</p>
          </div>
          <div>
            <p className="text-white text-sm">
              {stockData['Time Series (60min)'] &&
                Object.keys(stockData['Time Series (60min)']).length > 0 &&
                stockData['Time Series (60min)'][
                  Object.keys(stockData['Time Series (60min)'])[0]
                ]['4. close']}
            </p>
            <p className="text-xs text-slate-500">
              {stockData['Time Series (60min)'] &&
                Object.keys(stockData['Time Series (60min)']).length > 0 &&
                calculatePriceDifference(stockData)}
            </p>
          </div>
        </>
      )}
    </div>
  );
}

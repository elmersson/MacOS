import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Stock() {
  const [stockData, setStockData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiKey = process.env.NEXT_PUBLIC_STOCK_API;
    const symbol = 'AAPL';

    const apiUrl = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=1min&apikey=${apiKey}`;

    axios
      .get(apiUrl)
      .then((response) => {
        const data = response.data;
        setStockData(data);
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
      <div>
        <p className="text-white text-sm">Dow Jones</p>
        <p className="text-xs text-slate-500">Dow Jones Industrial Average</p>
      </div>
      <div>
        <p className="text-white text-sm">Dow</p>
      </div>
      <div>
        {/* Render the stock data here */}
        <p className="text-white text-sm">
          {/* Use stockData to display the stock value */}
        </p>
        <p className="text-xs text-slate-500">
          {/* Use stockData to display changes */}
        </p>
      </div>
    </div>
  );
}

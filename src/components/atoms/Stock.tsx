import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  ResponsiveContainer,
  XAxis,
  YAxis,
  AreaChart,
  Area,
  ReferenceLine,
} from 'recharts';

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

  if (timestamps.length < 25) {
    return 'N/A';
  }

  const firstTimestamp = timestamps[0];
  const openingPrice = parseFloat(timeSeries[firstTimestamp]['1. open']);

  const lastTimestamp = timestamps[24];
  const closingPrice = parseFloat(timeSeries[lastTimestamp]['4. close']);

  const priceDifference = closingPrice - openingPrice;

  return priceDifference.toFixed(2);
}

interface StockProps {
  symbol: string;
  name: string;
}

export default function Stock({ symbol, name }: StockProps) {
  const [stockData, setStockData] = useState<StockResponse | null>(null);
  const [loading, setLoading] = useState(true);
  let lowestPrice = Infinity; // Initialize with a high value

  useEffect(() => {
    const apiKey = process.env.NEXT_PUBLIC_STOCK_API;

    const apiUrl = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=60min&outputsize=full&apikey=${apiKey}`;

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

  if (!stockData) {
    return <p>No data available.</p>;
  }

  const timeSeries = stockData['Time Series (60min)'];

  if (!timeSeries) {
    return <p>No time series data available.</p>;
  }

  const chartData = Object.keys(timeSeries).map((timestamp) => {
    const closePrice = parseFloat(timeSeries[timestamp]['4. close']);
    if (closePrice < lowestPrice) {
      lowestPrice = closePrice;
    }
    return {
      timestamp: timestamp,
      '4. close': closePrice,
    };
  });

  return (
    <div className="flex flex-row">
      <div className="w-[55%] mr-4">
        <p className="text-white text-sm">
          {stockData['Meta Data']['2. Symbol']}{' '}
        </p>
        <p className="text-xs text-slate-500">{name}</p>
      </div>
      <ResponsiveContainer width="25%" height={50}>
        <AreaChart width={200} height={500} data={chartData}>
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="1%" stopColor="#258f21" stopOpacity={0.8} />
              <stop offset="25%" stopColor="#169a49" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="1%" stopColor="#82ca9d" stopOpacity={0.8} />
              <stop offset="25%" stopColor="#82ca9d" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis hide />
          <YAxis hide />
          <Area
            type="monotone"
            dataKey="4. close"
            stroke="#0bb919"
            fillOpacity={1}
            fill="url(#colorUv)"
            strokeWidth={3}
          />
          <ReferenceLine
            y={lowestPrice}
            stroke="#0bb919"
            strokeDasharray="3 3"
          />
        </AreaChart>
      </ResponsiveContainer>
      <div className="ml-4">
        <p className="text-white text-sm">
          {stockData['Time Series (60min)'] &&
            Object.keys(stockData['Time Series (60min)']).length > 0 &&
            parseFloat(
              stockData['Time Series (60min)'][
                Object.keys(stockData['Time Series (60min)'])[0]
              ]['4. close']
            ).toFixed(2)}
        </p>
        <p className="text-xs text-slate-500">
          {stockData['Time Series (60min)'] &&
            Object.keys(stockData['Time Series (60min)']).length > 0 &&
            calculatePriceDifference(stockData)}
        </p>
      </div>
    </div>
  );
}

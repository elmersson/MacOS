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

function calculatePriceDifference(stockData: StockResponse): [string, boolean] {
  const timeSeries = stockData['Time Series (60min)'];
  const timestamps = Object.keys(timeSeries);

  if (timestamps.length < 25) {
    return ['0', false];
  }

  const firstTimestamp = timestamps[0];
  const openingPrice = parseFloat(timeSeries[firstTimestamp]['1. open']);

  const lastTimestamp = timestamps[24];
  const closingPrice = parseFloat(timeSeries[lastTimestamp]['4. close']);

  const priceDifference = closingPrice - openingPrice;
  const isPositive = priceDifference >= 0;

  return [priceDifference.toFixed(2), isPositive];
}

interface StockProps {
  symbol: string;
  name: string;
  ticker: string;
}

export default function Stock({ symbol, name, ticker }: StockProps) {
  const [stockData, setStockData] = useState<StockResponse | null>(null);
  const [loading, setLoading] = useState(true);
  let lowestPrice = Infinity;

  useEffect(() => {
    const apiKey = process.env.NEXT_PUBLIC_STOCK_API;

    const apiUrl = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${ticker}&interval=60min&apikey=${apiKey}`;

    axios
      .get(apiUrl)
      .then((response) => {
        const data: StockResponse = response.data;
        setStockData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, [ticker]);

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

  const [priceDifference, isPositive] = calculatePriceDifference(stockData);

  return (
    <div className="flex flex-row items-center justify-center">
      <div className="w-[55%] mr-4">
        <p className="text-white text-sm">{symbol}</p>
        <p className="text-xs text-slate-500">{name}</p>
      </div>
      <ResponsiveContainer className="pt-3" width="25%" height={50}>
        <AreaChart width={200} height={50} data={chartData}>
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="1%"
                stopColor={isPositive ? '#258f21' : '#8f2121'}
                stopOpacity={0.8}
              />
              <stop
                offset="25%"
                stopColor={isPositive ? '#169a49' : '#9a1616'}
                stopOpacity={0}
              />
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="1%"
                stopColor={isPositive ? '#82ca9d' : '#ca8282'}
                stopOpacity={0.8}
              />
              <stop
                offset="25%"
                stopColor={isPositive ? '#82ca9d' : '#ca8282'}
                stopOpacity={0}
              />
            </linearGradient>
          </defs>
          <XAxis hide />
          <YAxis hide />
          <Area
            type="monotone"
            dataKey="4. close"
            stroke={isPositive ? '#0bb919' : '#b90b0b'}
            fillOpacity={1}
            fill="url(#colorUv)"
            strokeWidth={3}
          />
          <ReferenceLine
            y={lowestPrice}
            stroke={isPositive ? '#0bb919' : '#b90b0b'}
            strokeDasharray="3 3"
          />
        </AreaChart>
      </ResponsiveContainer>
      <div className="ml-4">
        <p className="text-white text-sm">
          {Object.keys(stockData['Time Series (60min)']).length > 0 &&
            parseFloat(
              stockData['Time Series (60min)'][
                Object.keys(stockData['Time Series (60min)'])[0]
              ]['4. close']
            ).toFixed(2)}
        </p>
        <p
          className={`text-xs ${
            isPositive ? 'text-[#0bb919]' : 'text-[#b90b0b]'
          }`}
        >
          {priceDifference}
        </p>
      </div>
    </div>
  );
}

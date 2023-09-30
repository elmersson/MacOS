import Stock from './Stock';

export default function Stocks() {
  return (
    <div className="h-[164px] w-[344px] bg-black rounded-2xl p-4 shadow-2xl">
      <Stock symbol="Dow Jones" name="Dow Jones Industrial" ticker="MSFT" />
      <div className="border-b border-gray-500/20"></div>
      <Stock symbol="^OMX" name="OMX Stockholm 30" ticker="TSLA" />
      <div className="border-b border-gray-500/20"></div>
      <Stock symbol="AAPL" name="Apple Inc." ticker="AAPL" />
    </div>
  );
}

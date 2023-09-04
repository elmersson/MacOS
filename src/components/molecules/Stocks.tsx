import Stock from '../atoms/Stock';

export default function Stocks() {
  return (
    <div className="h-[164px] w-[344px] bg-black rounded-2xl p-4 shadow-2xl">
      <Stock symbol="AAPL" name="Apple Inc." />
      <Stock symbol="MSFT" name="Microsoft" />
      <Stock symbol="TSLA" name="Tesla" />
    </div>
  );
}

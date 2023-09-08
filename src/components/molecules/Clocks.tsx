import React from 'react';
import Clock from '../atoms/Clock';

export default function Clocks() {
  return (
    <div className="h-[164px] w-[344px]  rounded-2xl p-4 shadow-2xl bg-slate-900">
      <div className="flex flex-row space-x-2">
        <Clock city="Cupertino" timezone={-7} />
        <Clock city="Tokyo" timezone={9} />
        <Clock city="Sydney" timezone={10} />
        <Clock city="Paris" timezone={2} />
      </div>
    </div>
  );
}

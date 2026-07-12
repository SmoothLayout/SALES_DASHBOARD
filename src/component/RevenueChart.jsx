import React from 'react';
import { chartData } from '../data/data';

function RevenueChart() {
  const max = Math.max(...chartData.map((data) => data.value))
  return (
    <div className="bg-white round-2xl border border-slate-200 p-5 ">
      <h3 className="text-sm font-semibold text-slate-900">
        Revenue (Last 5 months)</h3>
        <div className="m-6 flex items-end justify-between gap-3 h-40">
          {chartData.map((data) =>(
            <div key={data.month} className="flex flex-1 
            flex-col items-center gap-2">
              <div className="w-full rounded-t-md bg-indigo-500 
              style={{height: `${(data.value / max) * 100}%`}}">
                <span className="test-xs text-slate-400">{data.month}</span>
              </div>
            </div>
          ))}
        </div>
        </div>
  )
}

export default RevenueChart;
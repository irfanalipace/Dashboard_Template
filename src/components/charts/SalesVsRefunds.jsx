import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Dec 22", resolved: 6000 },
  { name: "Feb 23", resolved: 9000 },
  { name: "Mar 23", resolved: 7000 },
  { name: "Apr 23", resolved: 3000 },
  { name: "Jun 23", sales: 8000 },
];

export default function SalesVsRefunds() {
  return (
    <div className="bg-white rounded-2xl shadow p-6">
      <div className="flex items-center">
        <h3 className="text-gray-800 text-sm font-semibold">Complaints Over Time</h3>
        <span className="text-gray-400 text-xs ml-2">ℹ️</span>
      </div>

      <div className="flex items-center mt-2">
        <span className="text-3xl font-bold">+$6,796</span>
        <span className="text-sm bg-red-100 text-red-500 ml-2 px-2 py-1 rounded-full">
          -34%
        </span>
      </div>

      <div className="h-64 mt-4">
        <ResponsiveContainer>
          <BarChart data={data}>
            <XAxis dataKey="name" tick={{ fontSize: 12 }} />
            <YAxis tick={{ fontSize: 12 }} />
            <Tooltip />
            <Bar
              dataKey="resolved"
              fill="url(#colorPv)"
              radius={[6, 6, 0, 0]}
            />

            <defs>
              <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#6366F1" stopOpacity={1} />
                <stop offset="100%" stopColor="#A5B4FC" stopOpacity={0.3} />
              </linearGradient>
            </defs>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

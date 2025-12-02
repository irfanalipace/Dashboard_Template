import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { date: "Dec 22", current: 120, previous: 70, third: 150 },
  { date: "Mar 23", current: 80, previous: 200, third: 110 },
  { date: "Jun 23", current: 160, previous: 130, third: 90 },
  { date: "Oct 23", current: 140, previous: 90, third: 180 },
  { date: "Jan 25", current: 210, previous: 160, third: 140 },
];

export default function SalesOverTime() {
  return (
    <div className="bg-white rounded-2xl shadow p-6">
      <h3 className="text-gray-800 text-sm font-semibold">Department Performance Over Time</h3>

      <div className="flex items-center mt-2">
        <span className="text-3xl font-bold">$1,482</span>
        <span className="text-sm bg-red-100 text-red-500 ml-2 px-2 py-1 rounded-full">
          -22%
        </span>
      </div>

      <div className="h-64 mt-4">
        <ResponsiveContainer>
          <LineChart data={data}>
            <XAxis dataKey="date" tick={{ fontSize: 12 }} />
            <YAxis tick={{ fontSize: 12 }} />
            <Tooltip />

            <Line
              type="monotone"
              dataKey="current"
              stroke="#6366F1"
              strokeWidth={2}
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="previous"
              stroke="#3B82F6"
              strokeWidth={2}
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="third"
              stroke="#10B981"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

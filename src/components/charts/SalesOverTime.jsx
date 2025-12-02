import { Typography } from "@mui/material";
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
  { month: "Jan 24", current: 68, previous: 55, target: 75 },
  { month: "Mar 24", current: 72, previous: 60, target: 76 },
  { month: "Jun 24", current: 80, previous: 66, target: 78 },
  { month: "Sep 24", current: 77, previous: 70, target: 80 },
  { month: "Dec 24", current: 82, previous: 75, target: 82 },
  { month: "Mar 25", current: 88, previous: 79, target: 85 },
];

export default function DepartmentPerformanceChart() {
  return (
    <div className="bg-white rounded-2xl shadow p-6">
      
      {/* Title Section */}
      <Typography className="text-lg font-semibold">
        Department Performance Index (Monthly Trend)
      </Typography>

      <div className="flex items-center mt-3">
        <span className="text-3xl font-bold text-[#1B263B]">88%</span>
        <span className="text-sm bg-green-100 text-green-600 ml-2 px-2 py-1 rounded-full">
          +12%
        </span>
      </div>

      {/* Chart */}
      <div className="h-64 mt-4">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis dataKey="month" tick={{ fontSize: 12 }} />
            <YAxis
              domain={[40, 100]}
              tick={{ fontSize: 12 }}
            />
            <Tooltip />

            {/* Current KPI */}
            <Line
              type="monotone"
              dataKey="current"
              name="Current Score"
              stroke="#6366F1"
              strokeWidth={2}
              dot={false}
            />

            {/* Previous Period KPI */}
            <Line
              type="monotone"
              dataKey="previous"
              name="Previous Score"
              stroke="#3B82F6"
              strokeWidth={2}
              dot={false}
            />

            {/* Target or Benchmark */}
            <Line
              type="monotone"
              dataKey="target"
              name="Target Score"
              stroke="#10B981"
              strokeDasharray="6 4"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

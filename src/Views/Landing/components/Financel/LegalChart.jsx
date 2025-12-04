import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { Typography } from "@mui/material";
import { Box } from "lucide-react";

const personnelTrend = [
  { month: "Jan", utilized: 85, nonUtilized: 15, performance: 78 },
  { month: "Feb", utilized: 90, nonUtilized: 10, performance: 82 },
  { month: "Mar", utilized: 88, nonUtilized: 12, performance: 80 },
  { month: "Apr", utilized: 92, nonUtilized: 8, performance: 85 },
];

export default function LegalChart() {
  return (

    <div className="bg-white rounded-xl shadow p-4 h-[300px]">
      <Typography className="text-sm font-semibold mb-2">
        Workforce Utilization & Performance
      </Typography>

      <div className="h-55">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={personnelTrend} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
            <XAxis dataKey="month" fontSize={12} />
            <YAxis fontSize={12} />
            <Tooltip />
            <Legend verticalAlign="top" height={36} />

          
            <Line
              type="monotone"
              dataKey="utilized"
              stroke="#10b981" 
              strokeWidth={2}
              activeDot={{ r: 6 }}
            />

            <Line
              type="monotone"
              dataKey="nonUtilized"
              stroke="#ef4444"
              strokeWidth={2}
              strokeDasharray="5 5"
            />

            <Line
              type="monotone"
              dataKey="performance"
              stroke="#3b82f6"
              strokeWidth={2}
              strokeDasharray="3 3"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>

  );
}

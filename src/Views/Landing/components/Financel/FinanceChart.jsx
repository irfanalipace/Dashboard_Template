import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { Typography } from "@mui/material";

const fundsData = [
  { month: "Jan", released: 50, utilized: 40 },
  { month: "Feb", released: 60, utilized: 45 },
  { month: "Mar", released: 55, utilized: 50 },
  { month: "Apr", released: 70, utilized: 62 },
  { month: "May", released: 80, utilized: 75 },
];

export default function FinanceChart() {
  return (
    <div className="bg-white rounded-xl shadow p-4">
      <Typography className="text-sm font-semibold">
        Finance & Procurement
      </Typography>

      <div className="h-40 mt-2">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={fundsData}>
            <XAxis dataKey="month" fontSize={10} />
            <YAxis fontSize={10} />
            <Tooltip />
            <Line type="monotone" dataKey="released" stroke="#6366f1" strokeWidth={2} />
            <Line type="monotone" dataKey="utilized" stroke="#10b981" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

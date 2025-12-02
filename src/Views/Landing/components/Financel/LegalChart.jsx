import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { Typography } from "@mui/material";

const firTrend = [
  { month: "Jan", registered: 120, disposed: 90 },
  { month: "Feb", registered: 140, disposed: 105 },
  { month: "Mar", registered: 160, disposed: 130 },
];

export default function LegalChart() {
  return (
    <div className="bg-white rounded-xl shadow p-4">
      <Typography className="text-sm font-semibold">
        Legal & Compliance
      </Typography>

      <div className="h-40 mt-2">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={firTrend}>
            <XAxis dataKey="month" fontSize={10} />
            <YAxis fontSize={10} />
            <Tooltip />
            <Line type="monotone" dataKey="registered" stroke="#ef4444" strokeWidth={2} />
            <Line type="monotone" dataKey="disposed" stroke="#10b981" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

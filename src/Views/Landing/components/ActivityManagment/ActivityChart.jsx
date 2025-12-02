import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { Typography } from "@mui/material";

const activityData = [
  { month: "Jan", completed: 180, pending: 40, delayed: 20 },
  { month: "Feb", completed: 200, pending: 35, delayed: 25 },
  { month: "Mar", completed: 220, pending: 30, delayed: 18 },
];

export default function ActivityChart() {
  return (
    <div className="bg-white rounded-xl shadow p-4">
      <Typography className="text-sm font-semibold">
        Activity Summary
      </Typography>

      <div className="h-40 mt-2">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={activityData}>
            <XAxis dataKey="month" fontSize={10} />
            <YAxis fontSize={10} />
            <Tooltip />
            <Bar dataKey="completed" fill="#10b981" />
            <Bar dataKey="pending" fill="#f59e0b" />
            <Bar dataKey="delayed" fill="#ef4444" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

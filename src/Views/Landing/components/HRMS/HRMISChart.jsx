import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { Typography } from "@mui/material";

const attendanceData = [
  { month: "Jan", present: 86, absent: 14 },
  { month: "Feb", present: 88, absent: 12 },
  { month: "Mar", present: 82, absent: 18 },
  { month: "Apr", present: 90, absent: 10 },
  { month: "May", present: 87, absent: 13 },
];

export default function HRMISChart() {
  return (
    <div className="bg-white rounded-xl shadow p-4">
      <Typography className="text-sm font-semibold">
        HRMIS Attendance
      </Typography>

      <div className="h-40 mt-2">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={attendanceData}>
            <XAxis dataKey="month" fontSize={10} />
            <YAxis fontSize={10} />
            <Tooltip />
            <Line type="monotone" dataKey="present" stroke="#3b82f6" strokeWidth={2} />
            <Line type="monotone" dataKey="absent" stroke="#ef4444" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";
import { Box, Typography, Card, CardContent } from "@mui/material";

const COLORS = ["#3b82f6", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6"];

const departmentData = [
  { name: "Anti-Encroachment", completed: 120, pending: 30, inProgress: 50, delayed: 20, perDay: 15 },
  { name: "Price Control", completed: 90, pending: 20, inProgress: 30, delayed: 10, perDay: 12 },
  { name: "Eviction", completed: 70, pending: 15, inProgress: 25, delayed: 8, perDay: 10 },
  { name: "Public Nuisance", completed: 60, pending: 10, inProgress: 20, delayed: 5, perDay: 8 },
  { name: "Anti-Hoarding", completed: 50, pending: 8, inProgress: 15, delayed: 3, perDay: 7 },
];

export default function ActivityManagementDashboard() {
  const totals = {
    completed: departmentData.reduce((sum, d) => sum + d.completed, 0),
    pending: departmentData.reduce((sum, d) => sum + d.pending, 0),
    inProgress: departmentData.reduce((sum, d) => sum + d.inProgress, 0),
    delayed: departmentData.reduce((sum, d) => sum + d.delayed, 0),
    perDay: departmentData.reduce((sum, d) => sum + d.perDay, 0),
  };

  return (
    <Card sx={{ display: "flex", flexDirection: "column" }}>
      <CardContent sx={{ p: 2, flex: 1 }}>
        <Typography sx={{ mb: 3 }}>
          Activity Management
        </Typography>

        <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
          {/* Line Chart */}
          <Box sx={{ height: 180 }}>
           <ResponsiveContainer width="100%" height="100%">
  <LineChart data={departmentData}>
    <XAxis
      dataKey="name"
      interval={0}
      tick={{ fontSize: 10 }}
      tickMargin={6}
      height={40}
      angle={0}
      textAnchor="end"
    />
    <YAxis tick={{ fontSize: 10 }} />
    <Tooltip contentStyle={{ fontSize: "10px" }} />
    <Legend wrapperStyle={{ fontSize: 10 }} />
    <Line type="monotone" dataKey="completed" stroke="#3b82f6" strokeWidth={2} dot={false} />
    <Line type="monotone" dataKey="pending" stroke="#10b981" strokeWidth={2} dot={false} />
    <Line type="monotone" dataKey="inProgress" stroke="#f59e0b" strokeWidth={2} dot={false} />
    <Line type="monotone" dataKey="delayed" stroke="#ef4444" strokeWidth={2} dot={false} />
    <Line type="monotone" dataKey="perDay" stroke="#8b5cf6" strokeWidth={2} dot={false} />
  </LineChart>
</ResponsiveContainer>

          </Box>

          {/* Pie Chart */}
          <Box sx={{ height: 150, position: "relative" }}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={departmentData}
                  dataKey="completed"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  fontSize={11}
                  outerRadius="60%"
                  label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
                 // labelStyle={{ fontSize: 9 }}
                >
                  {departmentData.map((entry, index) => (
                    <Cell key={index} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Legend wrapperStyle={{ fontSize: 10 }} />
              </PieChart>
            </ResponsiveContainer>
        
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}

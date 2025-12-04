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
} from "recharts";
import { Typography, Box, Card, CardContent } from "@mui/material";

// Sample data
const fundsData = [
  { month: "Jan", released: 50, utilized: 40 },
  { month: "Feb", released: 60, utilized: 45 },
  { month: "Mar", released: 55, utilized: 50 },
  { month: "Apr", released: 70, utilized: 62 },
  { month: "May", released: 80, utilized: 75 },
];

const categorySpending = [
  { name: "Infrastructure", value: 35 },
  { name: "Operations", value: 25 },
  { name: "HR & Training", value: 20 },
  { name: "Procurement", value: 20 },
];

const PIE_COLORS = ["#6366F1", "#3B82F6", "#10B981", "#F59E0B"];

export default function FinanceChart() {
  // Overall KPI calculations
  const totalReleased = fundsData.reduce((acc, d) => acc + d.released, 0);
  const totalUtilized = fundsData.reduce((acc, d) => acc + d.utilized, 0);
  const utilizationRate = ((totalUtilized / totalReleased) * 100).toFixed(1);

  return (
    <Card className="bg-white rounded-2xl shadow p-4">
      <CardContent>
        <Typography
        sx={{mb:1}}
        >
          Finance & Procurement Dashboard
        </Typography>

        {/* KPI Cards */}
        <Box className="flex flex-wrap gap-4">
          <Box className="bg-gray-100 p-2 rounded w-1/4 text-center">
            <Typography sx={{ fontSize: "9px" }}>Total Funds Released</Typography>
            <Typography sx={{ fontSize: "9px", fontWeight: 700 }}>
              {totalReleased}M
            </Typography>
          </Box>
          <Box className="bg-gray-100 p-2 rounded w-1/4 text-center">
            <Typography sx={{ fontSize: "9px" }}>Total Funds Utilized</Typography>
            <Typography sx={{ fontSize: "9px", fontWeight: 700 }}>
              {totalUtilized}M
            </Typography>
          </Box>
          <Box className="bg-gray-100 p-2 rounded w-1/4 text-center">
            <Typography sx={{ fontSize: "9px" }}>Utilization Rate</Typography>
            <Typography sx={{ fontSize: "9px", fontWeight: 700 }}>
              {utilizationRate}%
            </Typography>
          </Box>
        </Box>

        <Box className="flex flex-col lg:flex-row gap-6">
          {/* Line Chart - Released vs Utilized */}
          <Box className="flex-1 h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={fundsData} margin={{ top: 10, right: 20, bottom: 30 }}>
                <XAxis
                  dataKey="month"
                  tick={{ fontSize: 9, fill: "#374151" }}
                />
                <YAxis tick={{ fontSize: 9, fill: "#374151" }} />
                <Tooltip
                  contentStyle={{ fontSize: "9px", backgroundColor: "#F3F4F6", borderRadius: 8 }}
                  formatter={(value) => `${value}M`}
                />
                <Line
                  type="monotone"
                  dataKey="released"
                  stroke="#6366F1"
                  strokeWidth={2}
                  name="Funds Released"
                />
                <Line
                  type="monotone"
                  dataKey="utilized"
                  stroke="#10B981"
                  strokeWidth={2}
                  name="Funds Utilized"
                />
              </LineChart>
            </ResponsiveContainer>
          </Box>

          {/* Pie Chart - Category-wise Spending */}
          <Box className="flex-1 h-64 flex items-center justify-center">
            <ResponsiveContainer width="80%" height="100%">
              <PieChart>
                <Pie
                  data={categorySpending}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  fontSize={9}
                  outerRadius={60}
                  label={(entry) => entry.name}
                >
                  {categorySpending.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={PIE_COLORS[index % PIE_COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{ fontSize: "9px", backgroundColor: "#F3F4F6", borderRadius: 8 }}
                  formatter={(value, name) => [`${value}%`, name]}
                />
              </PieChart>
            </ResponsiveContainer>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}

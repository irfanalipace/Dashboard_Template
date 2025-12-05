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
import { Typography, Box, Card, CardContent } from "@mui/material";

// Sample data with procurement requests included
const fundsData = [
  { month: "Jan", released: 50, utilized: 40, procurement: 12 },
  { month: "Feb", released: 60, utilized: 45, procurement: 18 },
  { month: "Mar", released: 55, utilized: 50, procurement: 15 },
  { month: "Apr", released: 70, utilized: 62, procurement: 22 },
  { month: "May", released: 80, utilized: 75, procurement: 20 },
];

// Category-wise spending
const categorySpending = [
  { name: "Infrastructure", value: 35 },
  { name: "Operations", value: 25 },
  { name: "HR & Training", value: 20 },
  { name: "Procurement", value: 20 },
];

const PIE_COLORS = ["#6366F1", "#3B82F6", "#10B981", "#F59E0B"];

export default function FinanceChart() {
  // KPI calculations
  const totalReleased = fundsData.reduce((acc, d) => acc + d.released, 0);
  const totalUtilized = fundsData.reduce((acc, d) => acc + d.utilized, 0);
  const utilizationRate = ((totalUtilized / totalReleased) * 100).toFixed(1);

  return (
    <Card className="bg-white rounded-2xl p-4">
      <CardContent>
        <Typography sx={{ mb: 1 }}>
          Finance & Procurement
        </Typography>

        {/* KPI Cards */}
        <Box className="flex flex-wrap gap-4 mt-6">
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

        {/* Charts Section */}
        <Box className="flex flex-col lg:flex-row gap-6 mt-6">
          {/* Line Chart - Released, Utilized, Procurement */}
          <Box className="flex-1 h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={fundsData} margin={{ top: 10, right: 20, bottom: 30 }}>
                <XAxis dataKey="month" tick={{ fontSize: 9, fill: "#374151" }} />
                <YAxis tick={{ fontSize: 9, fill: "#374151" }} />
                <Tooltip
                  contentStyle={{ fontSize: "9px", backgroundColor: "#F3F4F6", borderRadius: 8 }}
                  formatter={(value, name) =>
                    name === "Procurement Requests" ? `${value} Requests` : `${value}M`
                  }
                />
                <Legend wrapperStyle={{ fontSize: "9px" }} />

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
                <Line
                  type="monotone"
                  dataKey="procurement"
                  stroke="#F59E0B"
                  strokeWidth={2}
                  name="Procurement Requests"
                  dot={{ r: 3 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </Box>

          {/* Pie Chart - Category-wise Spending */}
          <Box className="flex-1 h-64 flex flex-col items-center justify-center">
            <ResponsiveContainer width="80%" height="70%">
              <PieChart>
                <Pie
                  data={categorySpending}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={60}
                >
                  {categorySpending.map((entry, index) => (
                    <Cell key={index} fill={PIE_COLORS[index % PIE_COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{ fontSize: "9px", backgroundColor: "#F3F4F6", borderRadius: 8 }}
                  formatter={(value, name) => [`${value}%`, name]}
                />
              </PieChart>
            </ResponsiveContainer>

            {/* Custom Legend with color dots */}
            <Box className="flex flex-wrap justify-center gap-4 mt-2">
              {categorySpending.map((entry, index) => (
                <Box key={index} className="flex items-center gap-1">
                  <Box
                    sx={{
                      width: 10,
                      height: 10,
                      borderRadius: "50%",
                      backgroundColor: PIE_COLORS[index % PIE_COLORS.length],
                    }}
                  />
                  <Typography sx={{ fontSize: "9px" }}>{entry.name}</Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}

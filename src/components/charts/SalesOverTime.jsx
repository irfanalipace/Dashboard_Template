import React from "react";
import { Typography, Box, Card, CardContent } from "@mui/material";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
  PieChart,
  Pie,
  Cell,
} from "recharts";

// Department requisition data
const departments = [
  { name: "PERA", requisition: 92 },
  { name: "Punjab Food Authority", requisition: 85 },
  { name: "LDA", requisition: 78 },
  { name: "PHA", requisition: 70 },
  { name: "Transport Authority", requisition: 65 },
];

// Prepare data for line chart
const lineData = departments.map((dept) => ({
  name: dept.name,
  requisition: dept.requisition,
  previousRequisition: dept.requisition - 5,
  targetRequisition: 85,
}));

// Prepare data for pie chart
const pieData = departments.map((dept) => ({
  name: dept.name,
  requisition: dept.requisition,
}));

const PIE_COLORS = ["#6366F1", "#3B82F6", "#10B981", "#F59E0B", "#EF4444"];

export default function DepartmentPerformance() {
  return (
    <Card className="bg-white rounded-2xl shadow p-3">
      <CardContent>
        <Typography>
          Requisition Submit
        </Typography>

        <Box className="flex flex-col lg:flex-row gap-6">
          {/* Line Chart */}
          <Box className="flex-1 h-67">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={lineData}
                margin={{ top: 10, right: 20, left: -10, bottom: 50 }}
              >
                <XAxis
                  dataKey="name"
                  tick={{ fontSize: 9, fill: "#374151" }}
                  interval={0}
                  angle={-45}
                  textAnchor="end"
                />
                <YAxis tick={{ fontSize: 9, fill: "#374151" }} domain={[50, 100]} />
                <Tooltip
                  contentStyle={{ backgroundColor: "#F3F4F6", borderRadius: 8, fontSize: "9px" }}
                  formatter={(value, name) => [`${value}`, name]}
                />
                <Legend verticalAlign="top" height={36} wrapperStyle={{ fontSize: "9px" }} />
                <Line
                  type="monotone"
                  dataKey="requisition"
                  name="Current Requisition"
                  stroke="#6366F1"
                  strokeWidth={3}
                  dot={{ r: 4 }}
                />
                <Line
                  type="monotone"
                  dataKey="previousRequisition"
                  name="Previous Requisition"
                  stroke="#3B82F6"
                  strokeWidth={2}
                  dot={{ r: 3 }}
                />
                <Line
                  type="monotone"
                  dataKey="targetRequisition"
                  name="Target Requisition"
                  stroke="#10B981"
                  strokeDasharray="6 4"
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </Box>

          {/* Pie Chart */}
          <Box className="flex-1 h-[250px] flex items-center justify-center">
            <ResponsiveContainer width="70%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  dataKey="requisition"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  fontSize={9}
                  outerRadius={40}   // smaller radius
                  label={({ name }) => name}
                >
                  {pieData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={PIE_COLORS[index % PIE_COLORS.length]}
                    />
                  ))}
                </Pie>
                <Legend
                  verticalAlign="bottom"
                  height={25}
                  wrapperStyle={{ fontSize: "11px" }}
                />
              </PieChart>
            </ResponsiveContainer>
          </Box>


        </Box>
      </CardContent>
    </Card>
  );
}

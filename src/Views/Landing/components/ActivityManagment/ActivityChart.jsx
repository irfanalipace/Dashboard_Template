import React, { useMemo, useState } from "react";
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
import { stations } from "../../../../mocks/stations";

const COLORS = ["#3b82f6", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6"];

// Sample data for departments
const departmentData = [
  { name: "Anti-Enchroachmenet", completed: 120, pending: 30, inProgress: 50, delayed: 20 },
  { name: "Price Control", completed: 90, pending: 20, inProgress: 30, delayed: 10 },
  { name: "Evication", completed: 70, pending: 15, inProgress: 25, delayed: 8 },
  { name: "Public Nuisance", completed: 60, pending: 10, inProgress: 20, delayed: 5 },
  { name: "Anti-Hoarding", completed: 50, pending: 8, inProgress: 15, delayed: 3 },
];

export default function ActivityManagementGraphs() {
  const [selectedStations] = useState(stations.slice(0, 8).map((s) => s.name));

  return (
    <Box className="space-y-4">
      <Card className="bg-white rounded-xl shadow p-3">
        <CardContent>
          <Typography>
            Activity Management
          </Typography>
          <Typography variant="body2" color="textSecondary" mb={3} sx={{ fontSize: "9px" }}>
            Monitoring performance across all departments
          </Typography>

          {/* Grid: Left Line Chart, Right Pie Chart */}
          <Box className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Left: Multi-Line Department Chart */}
            <Card className="p-3 h-full">
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={departmentData} margin={{ top: 10, bottom: 10 }}>
                  <XAxis dataKey="name" tick={{ fontSize: 9 }} />
                  <YAxis tick={{ fontSize: 9 }} />
                  <Tooltip
                    contentStyle={{ fontSize: "9px", backgroundColor: "#F3F4F6", borderRadius: 8 }}
                  />
                  <Line type="monotone" dataKey="completed" name="Completed" stroke={COLORS[0]} strokeWidth={2} dot={{ r: 3 }} />
                  <Line type="monotone" dataKey="pending" name="Pending" stroke={COLORS[1]} strokeWidth={2} dot={{ r: 3 }} />
                  <Line type="monotone" dataKey="inProgress" name="In Progress" stroke={COLORS[2]} strokeWidth={2} dot={{ r: 3 }} />
                  <Line type="monotone" dataKey="delayed" name="Delayed" stroke={COLORS[3]} strokeWidth={2} dot={{ r: 3 }} />
                </LineChart>
              </ResponsiveContainer>
            </Card>

            {/* Right: Department Distribution Pie */}
            <Card className="p-3 h-full">
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={departmentData}
                    dataKey="completed"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    label
                  >
                    {departmentData.map((entry, index) => (
                      <Cell key={index} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Legend verticalAlign="bottom" iconSize={10} wrapperStyle={{ fontSize: 9 }} />
                </PieChart>
              </ResponsiveContainer>
            </Card>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}

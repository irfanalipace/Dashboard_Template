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
import { Card, CardContent, Typography, Box, Chip } from "@mui/material";

// ---------- Sample Data ---------- //
// Department Performance
const departments = [
  { name: "PERA", score: 92 },
  { name: "Punjab Food Authority", score: 85 },
  { name: "LDA", score: 78 },
  { name: "PHA", score: 70 },
  { name: "Transport Authority", score: 65 },
];
const deptLineData = departments.map((dept) => ({
  name: dept.name,
  current: dept.score,
  previous: dept.score - 5,
  target: 85,
}));
const deptPieData = departments.map((dept) => ({
  name: dept.name,
  value: dept.score,
}));
const DEPT_COLORS = ["#6366F1", "#3B82F6", "#10B981", "#F59E0B", "#EF4444"];

// Finance & Procurement
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

// Alerts
const alerts = [
  { id: 1, label: "Pending FIRs", count: 8, severity: "warning" },
  { id: 2, label: "Overdue Requisition", count: 5, severity: "error" },
  { id: 3, label: "Unresolved Complaints", count: 12, severity: "error" },
  { id: 4, label: "Delayed Inspections", count: 7, severity: "warning" },
  { id: 5, label: "Maintenance Overdue", count: 3, severity: "error" },
];

// ---------- Dashboard Component ---------- //
export default function AlertsList() {
  // Finance KPIs
  const totalReleased = fundsData.reduce((acc, d) => acc + d.released, 0);
  const totalUtilized = fundsData.reduce((acc, d) => acc + d.utilized, 0);
  const utilizationRate = ((totalUtilized / totalReleased) * 100).toFixed(1);

  return (
    <Box className="space-y-6">
   
    
        <CardContent>
          <Typography>
            Real-Time Alerts
          </Typography>
          <Box className="flex flex-col gap-5 mt-2">
            {alerts.map((a) => (
              <Box key={a.id} className="flex items-center justify-between p-1">
                <Box className="flex items-center gap-2">
                  <div
                    className={`w-2 h-2 rounded-full ${
                      a.severity === "error" ? "bg-red-500" : "bg-yellow-400"
                    }`}
                  />
                  <Typography sx={{ fontSize: "12px" }}>{a.label}</Typography>
                </Box>
                <Chip label={a.count} size="small" sx={{ fontSize: "15px", height: 18 }} />
              </Box>
            ))}
          </Box>
        </CardContent>
    
    </Box>
  );
}

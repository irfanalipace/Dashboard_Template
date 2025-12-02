import React from "react";
import { Box, Typography, Paper, useTheme } from "@mui/material";
import {
  LineChart,
  Line,
  ResponsiveContainer,
  Tooltip,
  YAxis,
  XAxis,
  CartesianGrid,
} from "recharts";
import CircularProgress from "@mui/material/CircularProgress";

const data = [
  { name: "Mon", value: 40 },
  { name: "Tue", value: 55 },
  { name: "Wed", value: 50 },
  { name: "Thu", value: 70 },
  { name: "Fri", value: 65 },
  { name: "Sat", value: 90 },
  { name: "Sun", value: 85 },
];

export default function FieldStaffDeploymentCard() {
  const theme = useTheme();

  return (
    <Paper
      elevation={3}
      sx={{
        p: 3,
        borderRadius: 3,
        backgroundColor: "#fff",
        border: "1px solid rgba(0,0,0,0.05)",
        color: "#333",
        height: "100%",
      }}
    >
      {/* HEADER */}
      <Typography
      
        sx={{ color: "#4a5971", mb: 2, fontWeight: 700 }}
      >
        Field Staff Deployment
      </Typography>

      <Box sx={{ display: "flex", alignItems: "center", gap: 3, flexWrap: "wrap" }}>
        {/* LINE CHART */}
        <Box sx={{ flex: 1, minWidth: 300, height: 300 }}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid stroke="#f0f0f0" strokeDasharray="5 5" />
              <XAxis dataKey="name" stroke="#4a5971" fontSize={12} />
              <YAxis stroke="#4a5971" fontSize={12} />
              <Tooltip
                contentStyle={{
                  background: "#122035",
                  borderRadius: 8,
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "#fff",
                }}
              />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#f5c156"
                strokeWidth={3}
                dot={{ r: 4, fill: "#f5c156" }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </Box>

        {/* KPI CIRCLE PROGRESS */}
        <Box sx={{ width: 120, display: "flex", justifyContent: "center" }}>
          <Box sx={{ position: "relative", display: "inline-flex" }}>
            <CircularProgress
              variant="determinate"
              value={85}
              size={100}
              thickness={6}
              sx={{
                color: "#f5c156",
                backgroundColor: "#f0f0f0",
                borderRadius: "50%",
              }}
            />
            <Box
              sx={{
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                position: "absolute",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#4a5971",
                fontSize: 18,
                fontWeight: 700,
              }}
            >
              85%
            </Box>
          </Box>
        </Box>
      </Box>

      {/* FOOTER KPIs */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mt: 3,
          flexWrap: "wrap",
          gap: 2,
        }}
      >
        <Typography variant="body2" sx={{ color: "#6b7280" }}>
          Available Staff: 120
        </Typography>
        <Typography variant="body2" sx={{ color: "#6b7280" }}>
          Sanctioned vs Filled: 150 / 120
        </Typography>
        <Typography variant="body2" sx={{ color: "#6b7280" }}>
          On-duty: 95
        </Typography>
        <Typography variant="body2" sx={{ color: "#6b7280" }}>
          Off-duty: 25
        </Typography>
      </Box>
    </Paper>
  );
}

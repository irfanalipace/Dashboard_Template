import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LabelList,
} from "recharts";
import { PieChart, Pie, Cell } from "recharts";
import { Paper, Typography, Box } from "@mui/material";

export default function PERAOverallUtilization() {
  // NEW: Real seat counts (example)
  const displayStations = [
    { station: "Lahore", allocated: 380, approved: 350, utilized: 260 },
    { station: "Rawalpindi - City", allocated: 300, approved: 280, utilized: 220 },
    { station: "Multan - City", allocated: 260, approved: 240, utilized: 200 },
    { station: "Sialkot - City", allocated: 240, approved: 220, utilized: 180 },
    { station: "Faisalabad - City", allocated: 360, approved: 330, utilized: 290 },
    { station: "Bahawalpur - City", allocated: 210, approved: 190, utilized: 150 },
  ];

  // Auto-calc remaining + non-utilized seats
  const stationData = displayStations.map((s) => ({
    ...s,
    remaining: s.allocated - s.utilized,
    nonUtilized: s.allocated - s.utilized, // ADDED
  }));

  // Totals for Pie Chart
  const totalAllocated = stationData.reduce((a, b) => a + b.allocated, 0);
  const totalUtilized = stationData.reduce((a, b) => a + b.utilized, 0);
  const totalRemaining = stationData.reduce((a, b) => a + b.remaining, 0);
  const totalNonUtilized = stationData.reduce((a, b) => a + b.nonUtilized, 0); // ADDED

  const pieData = [
    { name: "Allocated", value: totalAllocated },
    { name: "Utilized", value: totalUtilized },
    { name: "Non-Utilized", value: totalNonUtilized },
    { name: "Remaining", value: totalRemaining },
  ];

  const COLORS = ["#3b82f6", "#10b981", "#f59e0b", "#ef4444"];

  return (
    <Paper
      elevation={3}
      sx={{
        p: 3,
        borderRadius: 3,
        backgroundColor: "#fff",
        border: "1px solid rgba(0,0,0,0.05)",
      }}
    >
      <Typography>PERA — Workforce Stations</Typography>

      <Box sx={{ display: "flex", gap: 3, flexWrap: "wrap" }}>
        {/* LEFT — LINE GRAPH */}
        <Box sx={{ flex: 2, minWidth: "300px", height: 210 }}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={stationData}>
              <XAxis
                dataKey="station"
                angle={-45}
                textAnchor="end"
                fontSize={12}
                interval={0}
              />
              <YAxis fontSize={12} domain={[0, 400]} />
              <Tooltip formatter={(value) => value + " Seats"} />
              <Legend verticalAlign="top" height={36} />

              {/* Utilized */}
              <Line
                type="monotone"
                dataKey="utilized"
                stroke="#10b981"
                strokeWidth={3}
                name="Utilized Seats"
              >
                <LabelList
                  dataKey="utilized"
                  position="top"
                  fontSize={10}
                  fontWeight="bold"
                />
              </Line>

              {/* Allocated */}
              <Line
                type="monotone"
                dataKey="allocated"
                stroke="#3b82f6"
                strokeWidth={3}
                name="Allocated Seats"
              >
                <LabelList
                  dataKey="allocated"
                  position="top"
                  fontSize={10}
                  fontWeight="bold"
                />
              </Line>

              {/* Remaining */}
              <Line
                type="monotone"
                dataKey="remaining"
                stroke="#ef4444"
                strokeWidth={3}
                strokeDasharray="4 4"
                name="Remaining Seats"
              >
                <LabelList
                  dataKey="remaining"
                  position="top"
                  fontSize={10}
                  fontWeight="bold"
                />
              </Line>

              {/* NON UTILIZED */}
              <Line
                type="monotone"
                dataKey="nonUtilized"
                stroke="#f59e0b"
                strokeWidth={3}
                strokeDasharray="3 3"
                name="Non-Utilized Seats"
              >
                <LabelList
                  dataKey="nonUtilized"
                  position="top"
                  fontSize={10}
                  fontWeight="bold"
                />
              </Line>
            </LineChart>
          </ResponsiveContainer>
        </Box>

        {/* RIGHT — PIE CHART */}
        <Box
          sx={{
            flex: 1,
            minWidth: "130px",
            height: 250,
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                innerRadius={45}
                outerRadius={85}
                dataKey="value"
                labelLine={false}
              >
                {pieData.map((entry, i) => (
                  <Cell key={i} fill={COLORS[i]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>

          {/* CENTER LABEL */}
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              textAlign: "center",
              fontSize: "12px",
              fontWeight: "600",
              lineHeight: "14px",
              color: "#374151",
            }}
          >
            <div style={{ fontSize: "10px", fontWeight: "500" }}>
              Workforce Utilization
            </div>
          </Box>
        </Box>
      </Box>

      {/* Summary */}
      <Box
        sx={{
          fontSize: 14,
          color: "#374151",
          display: "flex",
          gap: 4,
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        {/* Allocated */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <span
            style={{
              width: 10,
              height: 10,
              background: "#3b82f6",
              borderRadius: "50%",
              display: "inline-block",
            }}
          ></span>
          <strong style={{fontSize:"11px"}}>Allocated:</strong> {totalAllocated}
        </Box>

        {/* Utilized */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <span
            style={{
              width: 10,
              height: 10,
              background: "#10b981",
              borderRadius: "50%",
              display: "inline-block",
            }}
          ></span>
          <strong style={{fontSize:"11px"}}>Utilized:</strong> {totalUtilized}
        </Box>

        {/* Non Utilized */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <span
            style={{
              width: 10,
              height: 10,
              background: "#f59e0b",
              borderRadius: "50%",
              display: "inline-block",
            }}
          ></span>
          <strong style={{fontSize:"11px"}}>Non-Utilized:</strong> {totalNonUtilized}
        </Box>

        {/* Remaining */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <span
            style={{
              width: 10,
              height: 10,
              background: "#ef4444",
              borderRadius: "50%",
              display: "inline-block",
            }}
          ></span>
          <strong style={{fontSize:"11px"}}>Remaining:</strong> {totalRemaining}
        </Box>
      </Box>
    </Paper>
  );
}

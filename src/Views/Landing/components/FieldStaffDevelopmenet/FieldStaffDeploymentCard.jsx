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
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { Paper, Typography, Box } from "@mui/material";

export default function PERAOverallUtilization() {
  const displayStations = [
    { station: "Model Town station", allocated: 380, utilized: 260 },
    { station: "Kamalia station", allocated: 300, utilized: 220 },
    { station: "Gojra Center", allocated: 260, utilized: 200 },
    { station: " Kamalia station", allocated: 240, utilized: 180 },
    { station: "Faisalabad - Saddar", allocated: 360, utilized: 290 },
    { station: "Lahore - Shalimar", allocated: 210, utilized: 150 },
  ];

  const stationData = displayStations.map((s) => ({
    ...s,
    nonUtilized: s.allocated - s.utilized,
  }));

  const totalAllocated = stationData.reduce((a, b) => a + b.allocated, 0);
  const totalUtilized = stationData.reduce((a, b) => a + b.utilized, 0);
  const totalNonUtilized = stationData.reduce((a, b) => a + b.nonUtilized, 0);

  const pieData = [
    { name: "Allocated Posts", value: totalAllocated },
    { name: "Filled Posts", value: totalUtilized },
    { name: "Non-Utilized Posts", value: totalNonUtilized },
  ];

  const COLORS = ["#3b82f6", "#10b981", "#f59e0b"];

  return (
    <Paper
      elevation={3}
      sx={{
        p: 2,
        borderRadius: 3,
        backgroundColor: "#fff",
        border: "1px solid rgba(0,0,0,0.05)",
      }}
    >
      <Typography>Workforce Stations</Typography>

      <Box sx={{ display: "flex", gap: 3, flexWrap: "wrap" }}>
        {/* LEFT — LINE GRAPH */}
        <Box sx={{ flex: 2, minWidth: "300px" }}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={stationData}
              margin={{ top: 20, right: 30, left: 10, bottom: 60 }} // increased right margin
            >
              <XAxis
                dataKey="station"
                angle={-45}
                textAnchor="end"
                interval={0}
                dy={15}
                tick={{ fontSize: 10 }}
              />
              <YAxis tick={{ fontSize: 10 }} domain={[0, 400]} />
              <Tooltip
                formatter={(value) => value + " Posts"}
                contentStyle={{ fontSize: "10px" }}
              />
              <Legend verticalAlign="top" height={30} wrapperStyle={{ fontSize: "10px" }} />

              {/* Filled Posts */}
              <Line
                type="monotone"
                dataKey="utilized"
                stroke="#10b981"
                strokeWidth={2}
                dot={{ r: 2 }}
                name="Filled Posts"
              >
                <LabelList
                  dataKey="utilized"
                  position="top"
                  offset={6} // adds spacing above the dot
                  style={{ fontSize: "8px", fontWeight: "bold" }}
                />
              </Line>

              {/* Allocated Posts */}
              <Line
                type="monotone"
                dataKey="allocated"
                stroke="#3b82f6"
                strokeWidth={2}
                dot={{ r: 2 }}
                name="Allocated Posts"
              >
                <LabelList
                  dataKey="allocated"
                  position="top"
                  offset={6}
                  style={{ fontSize: "8px", fontWeight: "bold" }}
                />
              </Line>

              {/* Non-Utilized Posts */}
              <Line
                type="monotone"
                dataKey="nonUtilized"
                stroke="#f59e0b"
                strokeWidth={2}
                strokeDasharray="3 3"
                dot={{ r: 2 }}
                name="Non-Utilized Posts"
              >
                <LabelList
                  dataKey="nonUtilized"
                  position="top"
                  offset={6}
                  style={{ fontSize: "8px", fontWeight: "bold" }}
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
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative", // important for overlay
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

          {/* Center Text Overlay */}
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              textAlign: "center",
              color: "#374151",
            }}
          >

            <Typography sx={{ fontSize: "10px", color: "#6b7280" }}>
              Workforce Stations
            </Typography>
          </Box>
        </Box>

      </Box>

      {/* Summary */}
      <Box
        sx={{
          fontSize: "11px",
          color: "#374151",
          display: "flex",
          gap: 4,
          flexWrap: "wrap",
          alignItems: "center",
          mt: 2,
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
            }}
          />
          <strong style={{ fontSize: "10px" }}>Allocated:</strong> {totalAllocated}
        </Box>

        {/* Filled */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <span
            style={{
              width: 10,
              height: 10,
              background: "#10b981",
              borderRadius: "50%",
            }}
          />
          <strong style={{ fontSize: "10px" }}>Filled:</strong> {totalUtilized}
        </Box>

        {/* Non-Utilized */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <span
            style={{
              width: 10,
              height: 10,
              background: "#f59e0b",
              borderRadius: "50%",
            }}
          />
          <strong style={{ fontSize: "10px" }}>Non-Utilized:</strong> {totalNonUtilized}
        </Box>
      </Box>
    </Paper>
  );
}

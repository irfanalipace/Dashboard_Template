import React, { useMemo } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { Typography, Box, Card, CardContent } from "@mui/material";
import { stations } from "../../../../mocks/stations";

const COLORS = ["#3b82f6", "#10b981"]; // totalStrength, onDuty

// Generate HR metrics per station
const generateHRMetrics = (station) => {
  // Fix total strength to 65 for demo OR use station.totalStrength
  const totalStrength = 65; 
  const onDuty = Math.floor(totalStrength * (0.8 + Math.random() * 0.15));
  return { ...station, totalStrength, onDuty };
};

export default function HRMISAnalytics() {
  // Select only 8 stations
  const selectedStations = stations.slice(0, 8);

  // Generate HR metrics for selected stations
  const stationData = useMemo(() => selectedStations.map(generateHRMetrics), [selectedStations]);

  // Overall average (only onDuty now)
  const overallAverage = stationData.reduce((acc, s) => acc + s.onDuty, 0) / stationData.length;

  return (
    <Card className="bg-[white] rounded-xl shadow p-4">
      <CardContent>
        <Typography>
          HRMIS Analytics
        </Typography>

        {/* KPIs */}
        <Box className="flex justify-between">
          <Box>
            <Typography variant="caption" color="textSecondary">
              Total Strength
            </Typography>
            <Typography variant="h6" fontWeight={700}>
              {stationData.reduce((acc, s) => acc + s.totalStrength, 0)}
            </Typography>
          </Box>
          <Box>
            <Typography variant="caption" color="textSecondary">
              On Duty
            </Typography>
            <Typography variant="h6" fontWeight={700}>
              {stationData.reduce((acc, s) => acc + s.onDuty, 0)}
            </Typography>
          </Box>
          <Box>
            <Typography variant="caption" color="textSecondary">

Average Deployment per Station
            </Typography>
            <Typography variant="h6" fontWeight={700} sx={{textAlign:"center"}}>
              {Math.round(overallAverage)}
            </Typography>
          </Box>
        </Box>

        {/* Line Chart - Strength / On Duty */}
        <Box className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={stationData} margin={{ top: 10, right: 20, bottom: 30 }}>
              <XAxis
                dataKey="name"
                angle={-30}
                textAnchor="end"
                interval={0}
                height={30}
                fontSize={10}
              />
              <YAxis fontSize={10} />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="totalStrength"
                stroke={COLORS[0]}
                strokeWidth={2}
                name="Total Strength"
              />
              <Line
                type="monotone"
                dataKey="onDuty"
                stroke={COLORS[1]}
                strokeWidth={2}
                name="On Duty"
              />
            </LineChart>
          </ResponsiveContainer>
        </Box>
      </CardContent>
    </Card>
  );
}

// components/charts/BeautifulLineChart.jsx
import React from "react";
import {
  LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer
} from "recharts";

export default function BeautifulLineChart({ data }) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data}>
        <XAxis dataKey="name" stroke="#727272" />
        <YAxis stroke="#727272" />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="value"
          stroke="#2D7DD2"
          strokeWidth={3}
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

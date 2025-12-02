// components/charts/BeautifulBarChart.jsx
import React from "react";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer
} from "recharts";

export default function BeautifulBarChart({ data }) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data}>
        <XAxis dataKey="name" stroke="#727272" />
        <YAxis stroke="#727272" />
        <Tooltip />
        <Bar dataKey="value" fill="#2D7DD2" radius={[6, 6, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}

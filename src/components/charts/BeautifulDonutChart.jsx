// components/charts/BeautifulDonutChart.jsx
import React from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const COLORS = ["#2D7DD2", "#4CAF50", "#F8B400", "#E63946", "#6A4C93"];

export default function BeautifulDonutChart({ data = donutData }) {
  const COLORS = ["#10b981", "#ef4444", "#2D7DD2", "#F8B400", "#6A4C93"]; // Green/Red for utilization

  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Tooltip
          formatter={(value, name) => [`${value}`, `${name}`]}
        />
        <Pie
          data={data}
          dataKey="value"
          innerRadius="60%"
          outerRadius="80%"
          paddingAngle={4}
          nameKey="name"
        >
          {data.map((_, i) => (
            <Cell key={i} fill={COLORS[i % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
}

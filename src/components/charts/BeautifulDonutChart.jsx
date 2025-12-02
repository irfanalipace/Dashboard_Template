// components/charts/BeautifulDonutChart.jsx
import React from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const COLORS = ["#2D7DD2", "#4CAF50", "#F8B400", "#E63946", "#6A4C93"];

export default function BeautifulDonutChart({ data }) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Tooltip />
        <Pie
          data={data}
          dataKey="value"
          innerRadius="60%"
          outerRadius="80%"
          paddingAngle={4}
        >
          {data.map((_, i) => (
            <Cell key={i} fill={COLORS[i % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
}

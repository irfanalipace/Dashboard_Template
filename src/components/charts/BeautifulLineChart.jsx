import React from "react";
import {
  LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer
} from "recharts";

export default function BeautifulLineChart({ data, dataKey, label, stroke = "#2D7DD2" }) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <XAxis dataKey="name" stroke="#727272" />
        <YAxis stroke="#727272" />
        <Tooltip />
        <Line
          type="monotone"
          dataKey={dataKey}   // <-- dynamic key
          name={label}        // <-- label for tooltip/legend
          stroke={stroke}
          strokeWidth={3}
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

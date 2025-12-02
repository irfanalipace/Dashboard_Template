import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

export default function DualLineChart({ data }) {
  return (
    <div className="card p-4 h-full">
      <h3 className="text-sm font-medium mb-2">Inspections vs. Fines</h3>
      <div style={{ width: '100%', height: 200 }}>
        <ResponsiveContainer>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis yAxisId="left" />
            <YAxis yAxisId="right" orientation="right" />
            <Tooltip />
            <Legend />
            <Line yAxisId="left" type="monotone" dataKey="inspections" stroke="#1f8f6e" strokeWidth={2} />
            <Line yAxisId="right" type="monotone" dataKey="fines" stroke="#0f6e62" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

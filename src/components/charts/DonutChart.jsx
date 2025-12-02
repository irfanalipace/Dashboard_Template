import React from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'

const COLORS = ['#1E8F6E', '#E2E8F0']

export default function DonutChart({ value }) {
  const data = [{ name: 'Present', value }, { name: 'Absent', value: 100 - value }]
  return (
    <div className="card p-4 h-full">
      <h3 className="text-sm font-medium mb-2">Attendance</h3>
      <div className="flex items-center gap-4">
        <div style={{ width: 120, height: 120 }}>
          <ResponsiveContainer>
            <PieChart>
              <Pie data={data} innerRadius="60%" outerRadius="80%" dataKey="value">
                {data.map((entry, idx) => <Cell key={`c-${idx}`} fill={COLORS[idx % COLORS.length]} />)}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div>
          <div className="text-3xl font-bold">{value}%</div>
          <div className="text-sm text-gray-600 mt-1">Present</div>
        </div>
      </div>
    </div>
  )
}

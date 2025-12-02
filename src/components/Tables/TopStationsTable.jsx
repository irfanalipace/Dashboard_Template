import React from 'react'

export default function TopStationsTable({ data }) {
  return (
    <div className="card p-4">
      <h3 className="text-sm font-medium mb-2">Top 5 Performing Stations</h3>
      <table className="w-full text-sm">
        <thead>
          <tr className="text-left text-xs text-gray-500">
            <th>Station</th><th className="text-right">Score</th>
          </tr>
        </thead>
        <tbody>
          {data.map((r, i) => (
            <tr key={i} className="border-t">
              <td className="py-2">{r.name}</td>
              <td className="py-2 text-right font-medium">{r.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

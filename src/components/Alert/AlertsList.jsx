import React from 'react'
import { Chip } from '@mui/material'

export default function AlertsList({ items }) {
  return (
    <div className="card p-4">
      <h3 className="text-sm font-medium mb-2">Alerts</h3>
      <div className="flex flex-col gap-2">
        {items.map(a => (
          <div key={a.id} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className={`w-3 h-3 rounded-full ${a.severity === 'error' ? 'bg-red-500' : 'bg-yellow-400'}`} />
              <div className="text-sm">{a.label}</div>
            </div>
            <Chip label={a.count} size="small" />
          </div>
        ))}
      </div>
    </div>
  )
}

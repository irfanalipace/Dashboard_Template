export const kpis = [
  { id: 'enforcement', label: 'Enforcement', value: 35 },
  { id: 'field_staff', label: 'Field Staff', value: 482 },
  { id: 'inspections', label: 'Inspections', value: 1276 },
  { id: 'fines', label: 'Total Fines Imposed', value: 18450000, unit: 'PKR' },
  { id: 'firs', label: 'FIRs Registered', value: 321 },
  { id: 'complaints_resolved', label: 'Complaints Resolved', value: 78, unit: '%' }
]

export const lineSeries = [
  { date: '2025-10-01', inspections: 40, fines: 120000 },
  { date: '2025-10-05', inspections: 55, fines: 150000 },
  { date: '2025-10-10', inspections: 75, fines: 220000 },
  { date: '2025-10-15', inspections: 90, fines: 310000 },
  { date: '2025-10-20', inspections: 110, fines: 380000 },
  { date: '2025-10-25', inspections: 130, fines: 460000 }
]

export const funnelStages = [
  { name: 'Received', value: 420 },
  { name: 'Under Review', value: 210 },
  { name: 'Resolved', value: 330 }
]

export const attendance = { present: 89, absent: 11, breakdown: [
  { tehsil: 'Tehsil A', value: 89 },
  { tehsil: 'Tehsil B', value: 92 },
  { tehsil: 'Tehsil C', value: 88 },
  { tehsil: 'Tehsil D', value: 85 }
] }

export const topStations = [
  { name: 'Tehsil A', score: 92 },
  { name: 'Tehsil B', score: 90 },
  { name: 'Tehsil C', score: 68 },
  { name: 'Tehsil D', score: 65 },
  { name: 'Tehsil E', score: 63 }
]

export const alerts = [
  { id: 1, label: 'Pending FIRs', count: 8, severity: 'warning' },
  { id: 2, label: 'Overdue Requisition', count: 5, severity: 'error' },
  { id: 3, label: 'Unresolved Complaints', count: 12, severity: 'error' }
]

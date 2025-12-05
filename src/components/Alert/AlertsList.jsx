import React from "react";
import { CardContent, Typography, Box, Chip } from "@mui/material";

const alerts = [
  { id: 1, label: "Pending FIRs", count: 8, severity: "warning" },
  { id: 2, label: "Overdue Requisition", count: 5, severity: "error" },
  { id: 3, label: "Unresolved Complaints (SLA Breach)", count: 12, severity: "error" },
  { id: 4, label: "Delayed Inspections", count: 7, severity: "warning" },
  { id: 5, label: "Maintenance Overdue", count: 3, severity: "error" },
  { id: 6, label: "Activity Delays", count: 9, severity: "warning" },
  { id: 7, label: "Attendance Issues", count: 4, severity: "error" },
  { id: 8, label: "Financial Overspend", count: 2, severity: "error" },
  { id: 9, label: "Procurement Pending Approval", count: 6, severity: "warning" },
  { id: 10, label: "Budget Utilization Breach", count: 3, severity: "error" },
];

// ---------- Dashboard Component ---------- //
export default function AlertsList() {
  return (
    <Box className="space-y-6">
      <CardContent>
        <Typography>
          Real-Time Alerts
        </Typography>
        <Box className="flex flex-col gap-3 mt-2">
          {alerts.map((a) => (
            <Box
              key={a.id}
              className="flex items-center justify-between p-1 border-b border-gray-100"
            >
              <Box className="flex items-center gap-2">
                <div
                  className={`w-2 h-2 rounded-full ${
                    a.severity === "error" ? "bg-red-500" : "bg-yellow-400"
                  }`}
                />
                <Typography sx={{ fontSize: "12px" }}>{a.label}</Typography>
              </Box>
              <Chip
                label={a.count}
                size="small"
                sx={{ fontSize: "11px", height: 18 }}
              />
            </Box>
          ))}
        </Box>
      </CardContent>
    </Box>
  );
}

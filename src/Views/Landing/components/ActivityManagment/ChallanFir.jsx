import React, { useMemo, useState } from "react";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  BarChart, Bar, PieChart, Pie, Cell, ResponsiveContainer
} from "recharts";
import { stations } from "../../../../mocks/stations";
import { Typography } from "@mui/material";
const COLORS = ["#1f8f6e", "#f97316", "#3b82f6", "#ef4444", "#facc15"];
export default function ChallanFir() {
  const [hoverStation, setHoverStation] = useState(null);
  
    // Aggregate totals
    const totals = useMemo(() => {
      const totalChalan = stations.reduce((sum, s) => sum + s.totalRequisitions, 0);
      const totalFIR = stations.reduce((sum, s) => sum + s.totalEO, 0);
      const totalWarning = stations.reduce((sum, s) => sum + s.totalIO, 0);
      const totalFine = stations.reduce((sum, s) => sum + s.totalInventory, 0);
      const totalStrength = stations.reduce((sum, s) => sum + s.totalStrength, 0);
      const totalVehicles = stations.reduce((sum, s) => sum + s.totalVehicles, 0);
      const totalHR = stations.reduce((sum, s) => sum + s.totalHR, 0);
      return { totalChalan, totalFIR, totalWarning, totalFine, totalStrength, totalVehicles, totalHR };
    }, []);
  
    // Prepare data for charts
    const chalanFIRData = useMemo(() => stations.map(s => ({
      name: s.name,
      Chalan: s.totalRequisitions,
      FIR: s.totalEO,
    })), []);
  
    const warningFineData = useMemo(() => stations.map(s => ({
      name: s.name,
      Warning: s.totalIO,
      Fine: s.totalInventory,
    })), []);
  
    const strengthData = useMemo(() => stations.map((s, idx) => ({
      name: s.name,
      value: s.totalStrength,
    })), []);
  
    const attendanceData = useMemo(() => stations.map(s => ({
      name: s.name,
      Attendance: s.totalStrength,
    })), []);
  
    const vehiclesData = useMemo(() => stations.map(s => ({
      name: s.name,
      Vehicles: s.totalVehicles,
    })), []);
  
    const hrData = useMemo(() => stations.map(s => ({
      name: s.name,
      HR: s.totalHR,
    })), []);
  return (
   <div className="bg-white p-4 rounded-lg shadow-md">
           <Typography>Chalan & FIR by Station</Typography>
           <ResponsiveContainer width="100%" height={300}>
             <LineChart data={chalanFIRData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
               <CartesianGrid strokeDasharray="3 3" />
               <XAxis dataKey="name" tick={{ fontSize: 12 }} interval={4} />
               <YAxis tick={{ fontSize: 12 }} />
               <Tooltip wrapperStyle={{ fontSize: "12px" }} />
               <Legend wrapperStyle={{ fontSize: "12px" }} />
               <Line type="monotone" dataKey="Chalan" stroke="#1f8f6e" />
               <Line type="monotone" dataKey="FIR" stroke="#f97316" />
             </LineChart>
           </ResponsiveContainer>
         </div>
  );
}

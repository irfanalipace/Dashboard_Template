import React, { useMemo, useState } from "react";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  BarChart, Bar, PieChart, Pie, Cell, ResponsiveContainer
} from "recharts";
import { stations } from "../../../../../mocks/stations";

const COLORS = ["#1f8f6e", "#f97316", "#3b82f6", "#ef4444", "#facc15"];

export default function ForceReqDashboard() {
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
    <div className="p-6 space-y-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Force Requisitions Dashboard</h1>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
        <div className="bg-white shadow-md p-4 rounded-lg text-sm">
          <span>Total Chalan</span>
          <div className="text-xl font-bold">{totals.totalChalan}</div>
        </div>
        <div className="bg-white shadow-md p-4 rounded-lg text-sm">
          <span>Total FIR</span>
          <div className="text-xl font-bold">{totals.totalFIR}</div>
        </div>
        <div className="bg-white shadow-md p-4 rounded-lg text-sm">
          <span>Total Warnings</span>
          <div className="text-xl font-bold">{totals.totalWarning}</div>
        </div>
        <div className="bg-white shadow-md p-4 rounded-lg text-sm">
          <span>Total Fine</span>
          <div className="text-xl font-bold">{totals.totalFine}</div>
        </div>
        <div className="bg-white shadow-md p-4 rounded-lg text-sm">
          <span>Total Attendance</span>
          <div className="text-xl font-bold">{totals.totalStrength}</div>
        </div>
        <div className="bg-white shadow-md p-4 rounded-lg text-sm">
          <span>Total Vehicles</span>
          <div className="text-xl font-bold">{totals.totalVehicles}</div>
        </div>
      </div>

      {/* Charts */}
      <div className="space-y-6">
        {/* Chalan & FIR Line Chart */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-2">Chalan & FIR by Station</h2>
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

        {/* Warnings & Fine Bar Chart */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-2">Warnings & Fines by Station</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={warningFineData} margin={{ top: 10, right: 30, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" tick={{ fontSize: 12 }} interval={4} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip wrapperStyle={{ fontSize: "12px" }} />
              <Legend wrapperStyle={{ fontSize: "12px" }} />
              <Bar dataKey="Warning" fill="#3b82f6" />
              <Bar dataKey="Fine" fill="#ef4444" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Force Strength Pie Chart */}
     <div className="bg-white p-4 rounded-lg shadow-md">
  <h2 className="text-lg font-semibold mb-2">Force Strength Distribution</h2>
  <ResponsiveContainer width="100%" height={500}>
    <PieChart>
      <Pie
        data={strengthData}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        outerRadius={180} // bigger radius
        innerRadius={60}  // optional donut effect
        labelLine={true}  // show lines connecting labels
        label={props => {
          const { x, y, name } = props;
          return (
            <text
              x={x}
              y={y}
              textAnchor="middle"
              dominantBaseline="central"
              fontSize={12}
              fill="#111"
            >
              {name}
            </text>
          );
        }}
      >
        {strengthData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip wrapperStyle={{ fontSize: "12px" }} />
    </PieChart>
  </ResponsiveContainer>
</div>


        {/* Attendance Bar Chart */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-2">Attendance by Station</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={attendanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" tick={{ fontSize: 12 }} interval={4} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip wrapperStyle={{ fontSize: "12px" }} />
              <Legend wrapperStyle={{ fontSize: "12px" }} />
              <Bar dataKey="Attendance" fill="#1f8f6e" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Vehicles Bar Chart */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-2">Vehicles by Station</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={vehiclesData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" tick={{ fontSize: 12 }} interval={4} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip wrapperStyle={{ fontSize: "12px" }} />
              <Legend wrapperStyle={{ fontSize: "12px" }} />
              <Bar dataKey="Vehicles" fill="#facc15" />
            </BarChart>
          </ResponsiveContainer>
        </div>

     
      </div>

      {/* Hover Station Info */}
      {hoverStation && (
        <div style={{
          position: "absolute",
          top: hoverStation.mouseY + 15,
          left: hoverStation.mouseX + 15,
          width: "250px",
          maxHeight: "320px",
          background: "linear-gradient(145deg, #ffffff, #f3f4f6)",
          borderRadius: "12px",
          padding: "12px",
          boxShadow: "0 4px 15px rgba(0,0,0,0.25)",
          zIndex: 1000,
          fontSize: "12px",
          overflowY: "auto",
          pointerEvents: "none",
        }}>
          <div className="flex items-center mb-3">
            <div style={{ width: "12px", height: "12px", backgroundColor: "#1f8f6e", borderRadius: "50%", marginRight: "8px", boxShadow: "0 0 8px rgba(31, 143, 110, 0.5)" }} />
            <strong style={{ fontSize: "14px", color: "#111827" }}>{hoverStation.name}</strong>
          </div>
          <div className="space-y-1 text-gray-700">
            <div><strong>Address:</strong> {hoverStation.address}</div>
            <div><strong>Strength:</strong> {hoverStation.totalStrength}</div>
            <div><strong>EO:</strong> {hoverStation.totalEO}</div>
            <div><strong>IO:</strong> {hoverStation.totalIO}</div>
            <div><strong>Requisitions:</strong> {hoverStation.totalRequisitions}</div>
            <div><strong>Inventory/Fine:</strong> {hoverStation.totalInventory}</div>
            <div><strong>Vehicles:</strong> {hoverStation.totalVehicles}</div>
            <div><strong>HR:</strong> {hoverStation.totalHR}</div>
          </div>
        </div>
      )}
    </div>
  );
}

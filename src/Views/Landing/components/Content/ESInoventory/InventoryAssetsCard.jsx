import React from "react";
import { Bike, Car, Truck, WalletCards, Camera } from "lucide-react";
import { Typography, Paper } from "@mui/material";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

export default function InventoryAssetsCard() {

  const items = [
    { icon: <Bike size={40} />, label: "Patrol Bikes", count: 12, broken: 3 },
    { icon: <Car size={40} />, label: "Patrolling Vans", count: 8, broken: 2 },
    { icon: <Truck size={40} />, label: "Body Cabin", count: 5, broken: 1 },
    { icon: <WalletCards size={40} />, label: "Rollers Allocated", count: 3, broken: 1 },
    { icon: <Camera size={40} />, label: "Body Cams", count: 2, broken: 0 },
  ];

  const totalAssets = items.reduce((acc, item) => acc + item.count, 0);
  const totalBroken = items.reduce((acc, item) => acc + item.broken, 0);

  const pieData = items.map((item) => ({ name: item.label, value: item.count }));
  const COLORS = ["#FFD700", "#1B263B", "#4A90E2", "#F5C156", "#C0C0C0"];

  return (
    <div elevation={3} className=" rounded-xl bg-white w-full">

      <Typography variant="h6" className="mb-4 font-bold text-gray-800">
        ES Inventory & Assets
      </Typography>

      <div className="flex">

        <div className="flex-1 mt-15 flex flex-wrap gap-3 justify-start">
          {items.map((item, i) => (
            <div
              key={i}
              className="w-28 h-28 bg-white rounded-md flex flex-col items-center justify-center text-center shadow-md p-2 hover:shadow-lg transition"
            >
              <div className="text-[#1B263B]">{item.icon}</div>
              <p className="text-[12px] mt-1 font-medium text-gray-700">{item.label}</p>
              <p className="text-sm font-bold text-[#4A90E2] mt-1">{item.count}</p>
              {item.broken > 0 && (
                <p className="text-xs text-red-500 mt-0.5">Broken: {item.broken}</p>
              )}
            </div>
          ))}
        </div>


        <div className="w-full lg:w-48 flex flex-col p-3 items-center gap-4">

          <div className="text-center">
            <p className="text-3xl font-bold text-[#1B263B]">{totalAssets}</p>
            <p className="text-sm text-gray-600 mt-1">
              BROKEN COUNT: <span className="font-semibold text-red-500">{totalBroken}</span>
            </p>
          </div>


          <div className="w-full h-40">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={60}
                //  label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>



    </div>
  );
}

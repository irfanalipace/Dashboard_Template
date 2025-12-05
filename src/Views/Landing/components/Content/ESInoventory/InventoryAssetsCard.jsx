// import React from "react";
// import { Bike, Car, Truck, WalletCards, Camera } from "lucide-react";
// import { Typography, Paper, LinearProgress, Tooltip } from "@mui/material";
// import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

// export default function InventoryAssetsCard() {
//   const items = [
//     { icon: <Bike size={30} />, label: "Patrol Bikes", count: 12, broken: 3 },
//     { icon: <Car size={30} />, label: "Patrolling Vans", count: 8, broken: 2 },
//     { icon: <Truck size={30} />, label: "Body Cabin", count: 5, broken: 1 },
//     { icon: <WalletCards size={30} />, label: "Rollers Allocated", count: 3, broken: 1 },
//     { icon: <Camera size={30} />, label: "Body Cams", count: 2, broken: 0 },
//     { icon: <Bike size={30} />, label: "Spare Bikes", count: 6, broken: 1 },
//     { icon: <Car size={30} />, label: "Spare Vans", count: 4, broken: 0 },
//     { icon: <Truck size={30} />, label: "Extra Cabin", count: 3, broken: 0 },
//     { icon: <WalletCards size={30} />, label: "Extra Rollers", count: 2, broken: 0 },
//     { icon: <Camera size={30} />, label: "Extra Cams", count: 1, broken: 0 },
//   ];

//   const totalAssets = items.reduce((acc, item) => acc + item.count, 0);
//   const totalBroken = items.reduce((acc, item) => acc + item.broken, 0);

//   // Data for top summary pie chart
//   const pieData = [
//     { name: "Working", value: totalAssets - totalBroken },
//     { name: "Broken", value: totalBroken },
//   ];
//   const COLORS = ["#4A90E2", "#EF4444"];

//   return (
//     <Paper elevation={4} className="rounded-xl bg-white w-full p-5">

//       <Typography >
//         ES Inventory & Assets
//       </Typography>


//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
//         {items.map((item, i) => (
//           <div
//             key={i}
//             className="flex flex-col items-center justify-center bg-gray-50 rounded-xl shadow-sm p-5 hover:shadow-md transition transform hover:scale-105 text-center"
//           >
//             <div className="text-[#1B263B] mb-1">{item.icon}</div>
//             <p className="text-[11px] font-medium text-gray-700 truncate">{item.label}</p>
//             <p className="text-sm font-bold text-[#4A90E2] mt-1">{item.count}</p>
//             {item.broken > 0 && (
//               <Tooltip title={`Broken: ${item.broken}`} arrow>
//                 <LinearProgress
//                   variant="determinate"
//                   value={(item.broken / item.count) * 100}
//                   className="w-full mt-2 h-1 rounded-full"
//                   sx={{
//                     backgroundColor: "#FEE2E2",
//                     "& .MuiLinearProgress-bar": {
//                       backgroundColor: "#EF4444",
//                     },
//                   }}
//                 />
//               </Tooltip>
//             )}
//           </div>
//         ))}
//       </div>
//     </Paper>
//   );
// }


import React from "react";
import { Bike, Truck, WalletCards, Laptop, Armchair, HardHat, Activity, Shield } from "lucide-react";
import { Typography, Paper, Box, Divider } from "@mui/material";

export default function InventoryFixedCards() {
  const items = [
    {
      icon: <Truck size={18} />,
      label: "Double Cabin",
      value: 52,
      sub: [
        { name: "42/S", val: 10 },
        { name: "43/M", val: 12 },
        { name: "44/L", val: 15 },
        { name: "45/XL", val: 15 },
        { name: "Total", val: 52 },
      ],
    },
    {
      icon: <Truck size={18} />,
      label: "Single Cabin",
      value: 87,
      sub: [
        { name: "LP", val: 40 },
        { name: "CP", val: 47 },
        { name: "Total", val: 87 },
      ],
    },
    {
      icon: <Bike size={18} />,
      label: "Motor Bikes",
      value: 786,
      sub: [
        { name: "Cat-II", val: 400 },
        { name: "Cat-III", val: 386 },
      ],
    },
    {
      icon: <WalletCards size={18} />,
      label: "Uniform Accessories",
      value: 1857,
      sub: [
        { name: "Mouse", val: 900 },
        { name: "Bags", val: 957 },
      ],
    },
    {
      icon: <WalletCards size={18} />,
      label: "Uniform Cloth",
      value: 13456,
      sub: [{ name: "Total", val: 13456 }],
    },
    {
      icon: <Laptop size={18} />,
      label: "Laptops",
      value: 147,
      sub: [
        { name: "Mouse", val: 80 },
        { name: "Bags", val: 67 },
      ],
    },
    {
      icon: <HardHat size={18} />,
      label: "Helmets",
      value: 481,
      sub: [{ name: "Total", val: 481 }],
    },
    {
      icon: <Activity size={18} />,
      label: "Batons",
      value: 494,
      sub: [{ name: "Total", val: 494 }],
    },
    {
      icon: <Shield size={18} />,
      label: "Handcuffs",
      value: 195,
      sub: [{ name: "Total", val: 195 }],
    },
    {
      icon: <Armchair size={18} />,
      label: "Furniture",
      value: 14,
      sub: [{ name: "Total", val: 14 }],
    },
  ];

  const maxVisibleSubItems = 3; 

  return (
    <Paper
      sx={{
        p: 2,
        height: 340, 
        display: "flex",
        flexDirection: "column",
        background:"white"
      }}
    >
      <Typography>
        ES Inventory & Assets
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          gap: 1,
          flex: 1,
        }}
      >
        {items.map((item, i) => (
          <Paper
            key={i}
            elevation={1}
            sx={{
              p: 1,
              borderRadius: 1.5,
              backgroundColor: "#FFFFFF",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              minHeight: 64,
              maxHeight: 300,
              overflow: "hidden",
            }}
          >
            {/* Upper Section */}
            <Box sx={{ mb: 0.5 }}>
              <Box sx={{ color: "#2563EB", mb: 0.25 }}>{item.icon}</Box>
              <Typography
                variant="caption"
                sx={{ fontWeight: 600, lineHeight: 1.1, fontSize:"9px" }}
                noWrap
              >
                {item.label}
              </Typography>
              <Typography
                variant="caption"
                sx={{ color: "#2563EB", fontWeight: 700, mt: 0.25, fontSize:"9px" }}
              >
                {" "}{item.value}
              </Typography>
            </Box>

            <Divider sx={{ width: "90%", my: 0.5 }} />

            {/* Lower Section - Sub-items */}
            <Box sx={{ width: "100%", mt: 0.5 }}>
              {item.sub.slice(0, maxVisibleSubItems).map((s, j) => (
                <Box
                  key={j}
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    py: 0.25,
                    px: 0.5,
                  }}
                >
                  <Typography
                    variant="caption"
                    sx={{ color: "#6B7280", fontSize: 10 }}
                  >
                    {s.name}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{ fontWeight: 600, fontSize: 10 }}
                  >
                    {s.val}
                  </Typography>
                </Box>
              ))}
              {item.sub.length > maxVisibleSubItems && (
                <Typography
                  variant="caption"
                  sx={{ color: "#9CA3AF", fontSize: 10, mt: 0.25 }}
                >
                  {/* +{item.sub.length - maxVisibleSubItems} more... */}
                </Typography>
              )}
            </Box>
          </Paper>
        ))}
      </Box>
    </Paper>
  );
}



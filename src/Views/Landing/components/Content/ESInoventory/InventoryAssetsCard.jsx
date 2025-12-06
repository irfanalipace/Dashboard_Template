


// import React from "react";
// import { Bike, Truck, WalletCards, Laptop, Armchair, HardHat, Activity, Shield } from "lucide-react";
// import { Typography, Paper, Box, Divider } from "@mui/material";

// export default function InventoryFixedCards() {
//   const items = [
//     {
//       icon: <Truck size={18} />,
//       label: "Double Cabin",
//       value: 52,
//       sub: [
//         { name: "42/S", val: 10 },
//         { name: "43/M", val: 12 },
//         { name: "44/L", val: 15 },
//         { name: "45/XL", val: 15 },
//         { name: "Total", val: 52 },
//       ],
//     },
//     {
//       icon: <Truck size={18} />,
//       label: "Single Cabin",
//       value: 87,
//       sub: [
//         { name: "LP", val: 40 },
//         { name: "CP", val: 47 },
//         { name: "Total", val: 87 },
//       ],
//     },
//     {
//       icon: <Bike size={18} />,
//       label: "Motor Bikes",
//       value: 786,
//       sub: [
//         { name: "Cat-II", val: 400 },
//         { name: "Cat-III", val: 386 },
//       ],
//     },
//     {
//       icon: <WalletCards size={18} />,
//       label: "Uniform Accessories",
//       value: 1857,
//       sub: [
//         { name: "Mouse", val: 900 },
//         { name: "Bags", val: 957 },
//       ],
//     },
//     {
//       icon: <WalletCards size={18} />,
//       label: "Uniform Cloth",
//       value: 13456,
//       sub: [{ name: "Total", val: 13456 }],
//     },
//     {
//       icon: <Laptop size={18} />,
//       label: "Laptops",
//       value: 147,
//       sub: [
//         { name: "Mouse", val: 80 },
//         { name: "Bags", val: 67 },
//       ],
//     },
//     {
//       icon: <HardHat size={18} />,
//       label: "Helmets",
//       value: 481,
//       sub: [{ name: "Total", val: 481 }],
//     },
//     {
//       icon: <Activity size={18} />,
//       label: "Batons",
//       value: 494,
//       sub: [{ name: "Total", val: 494 }],
//     },
//     {
//       icon: <Shield size={18} />,
//       label: "Handcuffs",
//       value: 195,
//       sub: [{ name: "Total", val: 195 }],
//     },
//     {
//       icon: <Armchair size={18} />,
//       label: "Furniture",
//       value: 14,
//       sub: [{ name: "Total", val: 14 }],
//     },
//   ];

//   const maxVisibleSubItems = 3; 

//   return (
//     <Paper
//       sx={{
//         p: 2,
//         height: 340, 
//         display: "flex",
//         flexDirection: "column",
//         background:"white"
//       }}
//     >
//       <Typography>
//         ES Inventory & Assets
//       </Typography>

//       <Box
//         sx={{
//           display: "grid",
//           gridTemplateColumns: "repeat(5, 1fr)",
//           gap: 1,
//           flex: 1,
//         }}
//       >
//         {items.map((item, i) => (
//           <Paper
//             key={i}
//             elevation={1}
//             sx={{
//               p: 1,
//               borderRadius: 1.5,
//               backgroundColor: "#FFFFFF",
//               display: "flex",
//               flexDirection: "column",
//               alignItems: "center",
//               textAlign: "center",
//               minHeight: 64,
//               maxHeight: 300,
//               overflow: "hidden",
//             }}
//           >
//             {/* Upper Section */}
//             <Box sx={{ mb: 0.5 }}>
//               <Box sx={{ color: "#2563EB", mb: 0.25 }}>{item.icon}</Box>
//               <Typography
//                 variant="caption"
//                 sx={{ fontWeight: 600, lineHeight: 1.1, fontSize:"9px" }}
//                 noWrap
//               >
//                 {item.label}
//               </Typography>
//               <Typography
//                 variant="caption"
//                 sx={{ color: "#2563EB", fontWeight: 700, mt: 0.25, fontSize:"9px" }}
//               >
//                 {" "}{item.value}
//               </Typography>
//             </Box>

//             <Divider sx={{ width: "90%", my: 0.5 }} />

//             {/* Lower Section - Sub-items */}
//             <Box sx={{ width: "100%", mt: 0.5 }}>
//               {item.sub.slice(0, maxVisibleSubItems).map((s, j) => (
//                 <Box
//                   key={j}
//                   sx={{
//                     display: "flex",
//                     justifyContent: "space-between",
//                     py: 0.25,
//                     px: 0.5,
//                   }}
//                 >
//                   <Typography
//                     variant="caption"
//                     sx={{ color: "#6B7280", fontSize: 10 }}
//                   >
//                     {s.name}
//                   </Typography>
//                   <Typography
//                     variant="caption"
//                     sx={{ fontWeight: 600, fontSize: 10 }}
//                   >
//                     {s.val}
//                   </Typography>
//                 </Box>
//               ))}
//               {item.sub.length > maxVisibleSubItems && (
//                 <Typography
//                   variant="caption"
//                   sx={{ color: "#9CA3AF", fontSize: 10, mt: 0.25 }}
//                 >
//                   {/* +{item.sub.length - maxVisibleSubItems} more... */}
//                 </Typography>
//               )}
//             </Box>
//           </Paper>
//         ))}
//       </Box>
//     </Paper>
//   );
// }


import React from "react";
import {
  Bike,
  Truck,
  WalletCards,
  Laptop,
  Armchair,
  HardHat,
  Activity,
  Shield,
} from "lucide-react";
import { Typography, Paper, Box, Divider } from "@mui/material";

export default function InventoryFixedCards() {
  const items = [
    {
      category: "Cabin",
      icon: <Truck size={18} />,
      label: "Cabin:",
      value: 139,
      sub: [
        { name: "42/S", val: 10 },
        { name: "43/M", val: 12 },
        // { name: "44/L", val: 15 },



      ],
    },


    {
      category: "Bikes",
      icon: <Bike size={18} />,
      label: "Motor Bikes:",
      value: 786,
      sub: [
        { name: "Cat-II", val: 400 },
        { name: "Cat-III", val: 386 },
      ],
    },
    {
      category: "Guns",
      icon: <Shield size={18} />,
      label: "Handcuffs:",
      value: 195,
      sub: [{ name: "Total", val: 195 }],
    },
    {
      category: "Guns",
      icon: <Activity size={18} />,
      label: "Batons:",
      value: 494,
      sub: [{ name: "Total", val: 494 }],
    },
    {
      category: "Protective",
      icon: <HardHat size={18} />,
      label: "Helmets:",
      value: 481,
      sub: [{ name: "Total", val: 481 }],
    },
    {
      category: "Accessories",
      icon: <WalletCards size={18} />,
      label: "Uniform:",
      value: 1857,
      sub: [
        { name: "Mouse", val: 900 },
        { name: "Bags", val: 957 },
      ],
    },
    {
      category: "Accessories",
      icon: <WalletCards size={18} />,
      label: "Uniform Cloth:",
      value: 13456,
      sub: [{ name: "Total", val: 1356 }],
    },
    {
      category: "IT:",
      icon: <Laptop size={18} />,
      label: "Laptops",
      value: 147,
      sub: [
        { name: "Mouse", val: 80 },
        { name: "Bags", val: 67 },
      ],
    },
    {
      category: "Furniture:",
      icon: <Armchair size={18} />,
      label: "Furniture:",
      value: 14,
      sub: [{ name: "Total", val: 14 }],
    },
    {
      category: "Protective:",
      icon: <Shield size={18} />,
      label: "Riot Gear:",
      value: 320,
      sub: [
        { name: "Helmet", val: 80 },
        { name: "Shield", val: 60 },
      ],
    },
  ];

  // Sort by sub-item count descending (priority)
  const sortedItems = [...items].sort((a, b) => b.sub.length - a.sub.length);

  return (
    <Paper sx={{ p: 2, background: "white" }}>
      <Typography sx={{ fontSize: "13px", fontWeight: 600, mb: 3 }}>
        ES Inventory & Assets
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "repeat(2, 1fr)",
            sm: "repeat(3, 1fr)",
            md: "repeat(5, 1fr)",
          },
          gap: 1,
        }}
      >
        {sortedItems.map((item, i) => (
          <Paper
            key={i}
            elevation={1}
            sx={{
              p: 1,
              borderRadius: 2,
              backgroundColor: "#FFFFFF",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              minHeight: 120,
              height: item.sub.length > 3 ? 160 : 128,
              overflow: "hidden",
            }}
          >
            {/* Header */}
            <Box sx={{ mb: 0.5 }}>
              <Box sx={{ color: "#2563EB", mb: 0.25 }}>{item.icon}</Box>
              <Typography
                variant="caption"
                sx={{ fontWeight: 600, fontSize: "9px" }}
                noWrap
              >
                {item.label}
              </Typography>
              <Typography
                variant="caption"
                sx={{ color: "#2563EB", fontWeight: 700, fontSize: "9px" }}
              >
                {item.value}
              </Typography>
            </Box>

            <Divider sx={{ width: "90%", my: 0.5 }} />

            {/* Sub-items */}
            <Box
              sx={{
                width: "100%",
                //  overflowY: "auto",
                // maxHeight: item.sub.length > 3 ? 100 : 80,
                px: 0.5,
              }}
            >
              {item.sub.map((s, j) => (
                <Box
                  key={j}
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    py: 0.25,
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
            </Box>
          </Paper>
        ))}
      </Box>
    </Paper>
  );
}

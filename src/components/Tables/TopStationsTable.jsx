import React from "react";
import { Typography } from "@mui/material";

export default function TopStationsTable({ data }) {
  const maxScore = Math.max(...data.map((d) => d.score));

  const getBarColor = (index) => {
    switch (index) {
      case 0:
        return "#FFD700";
      case 1:
        return "#C0C0C0";
      case 2:
        return "#CD7F32";
      default:
        return "#1B263B";
    }
  };

  return (
    <div className="w-full p-4 bg-white rounded-xl shadow-md">

      <Typography

        //sx={{ color: "#4a5971", mb: 2, fontWeight: 700 }}
      >
        Top 5 Performing Stations
      </Typography>

      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="text-xs text-gray-500 border-b border-gray-200">
            <th className="py-3 text-left">Rank</th>
            <th className="py-3 text-left">Station</th>
            <th className="py-3 text-left">Performance</th>
            <th className="py-3 text-right">Score</th>
          </tr>
        </thead>

        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="border-b border-gray-100 last:border-none hover:bg-gray-50 transition">

              <td className="py-3 font-bold text-gray-700">{i + 1}</td>


              <td className="py-3 font-medium text-gray-800">{row.name}</td>


              <td className="py-3">
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="h-3 rounded-full"
                    style={{
                      width: `${(row.score / maxScore) * 100}%`,
                      backgroundColor: getBarColor(i),
                      transition: "width 0.5s ease-in-out",
                    }}
                  ></div>
                </div>
              </td>


              <td className="py-3 text-right font-semibold" style={{ color: getBarColor(i) }}>
                {row.score}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}

// components/ChartCard.jsx
import React from "react";

export default function ChartCard({ title, children }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 w-full h-full">
      {/* Title */}
      <h2 className="text-lg font-semibold text-gray-800 mb-4">
        {title}
      </h2>

      {/* Chart Area */}
      <div className="w-full h-[260px] flex items-center justify-center">
        {children}
      </div>
    </div>
  );
}

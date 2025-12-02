import React from "react";
import {
  FaBuilding,
  FaUsers,
  FaFileAlt,
  FaClipboardList,
  FaBoxes,
  FaDollarSign,
  FaCar,
  FaFileInvoiceDollar,
} from "react-icons/fa";

export default function KPICard({ label, value, type, onClick }) {

  const colors = {
    stations: "bg-gradient-to-br from-blue-500 to-blue-700 text-white",
    hr: "bg-gradient-to-br from-green-500 to-green-700 text-white",
    fir: "bg-gradient-to-br from-red-500 to-red-700 text-white",
    FR: "bg-gradient-to-br from-purple-500 to-purple-700 text-white",
    ims: "bg-gradient-to-br from-yellow-400 to-yellow-600 text-black",
    TF: "bg-gradient-to-br from-pink-500 to-pink-700 text-white",
    tv: "bg-gradient-to-br from-indigo-500 to-indigo-700 text-white",
    TT: "bg-gradient-to-br from-teal-500 to-teal-700 text-white",
    default: "bg-gray-200 text-black",
  };
  const icons = {
    stations: <FaBuilding size={28} />,
    hr: <FaUsers size={28} />,
    fir: <FaFileAlt size={28} />,
    FR: <FaClipboardList size={28} />,
    ims: <FaBoxes size={28} />,
    TF: <FaDollarSign size={28} />,
    tv: <FaCar size={28} />,
    TT: <FaFileInvoiceDollar size={28} />,
    default: <FaUsers size={28} />,
  };

  return (
    <div
      onClick={onClick}
      className={`
        cursor-pointer flex flex-col items-center justify-center
        p-4 rounded-xl shadow-md border transition-all duration-300
        hover:shadow-xl hover:-translate-y-1 hover:scale-105 h-32
        ${colors[type] || colors.default}
      `}
    >
      <div className="mb-2 opacity-90">{icons[type] || icons.default}</div>
      <div className="text-lg font-bold">{value}</div>
      <div className="text-xs opacity-90 mt-1">{label}</div>
    </div>
  );
}

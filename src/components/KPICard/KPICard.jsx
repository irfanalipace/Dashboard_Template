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
    stations: "bg-gradient-to-tr from-blue-500 to-blue-600 text-white",
    hr: "bg-gradient-to-tr from-green-500 to-green-600 text-white",
    fir: "bg-gradient-to-tr from-red-500 to-red-600 text-white",
    FR: "bg-gradient-to-tr from-purple-500 to-purple-600 text-white",
    ims: "bg-gradient-to-tr from-yellow-400 to-yellow-500 text-black",
    TF: "bg-gradient-to-tr from-pink-500 to-pink-600 text-white",
    tv: "bg-gradient-to-tr from-indigo-500 to-indigo-600 text-white",
    TT: "bg-gradient-to-tr from-teal-500 to-teal-600 text-white",
    default: "bg-gray-200 text-black",
  };

  const icons = {
    stations: <FaBuilding size={24} />,
    hr: <FaUsers size={24} />,
    fir: <FaFileAlt size={24} />,
    FR: <FaClipboardList size={24} />,
    ims: <FaBoxes size={24} />,
    TF: <FaDollarSign size={24} />,
    tv: <FaCar size={24} />,
    TT: <FaFileInvoiceDollar size={24} />,
    default: <FaUsers size={24} />,
  };

  return (
    <div
      onClick={onClick}
      className={`
        cursor-pointer flex flex-col items-center justify-center
        p-3 rounded-xl shadow-md border border-gray-100
        transition-transform transform duration-300 ease-in-out
        hover:shadow-xl hover:-translate-y-1 hover:scale-105 h-28
        ${colors[type] || colors.default}
      `}
    >
      <div className="mb-1 opacity-90">{icons[type] || icons.default}</div>
      <div className="text-lg font-semibold">{value}</div>
      <div className="text-xs opacity-80 mt-0.5 text-center truncate">{label}</div>
    </div>
  );
}

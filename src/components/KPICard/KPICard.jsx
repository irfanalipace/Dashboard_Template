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

export default function KPICard({ label, value, type, isSelected, onClick }) {
  const colors = {
    stations: "bg-gradient-to-tr from-blue-500 to-blue-600 text-white",
    hr: "bg-gradient-to-tr from-green-500 to-green-600 text-white",
    fir: "bg-gradient-to-tr from-red-500 to-red-600 text-white",
    FR: "bg-gradient-to-tr from-purple-500 to-purple-600 text-white",
    ims: "bg-gradient-to-tr from-yellow-400 to-yellow-500 text-white",
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
        p-3 rounded-xl h-28 transition-all duration-300 ease-out
        ${colors[type] || colors.default}

        ${
          isSelected
            ? `
              scale-110 
              shadow-[0_0_25px_8px_rgba(0,150,255,0.7),_0_0_40px_16px_rgba(255,0,200,0.5)]
              border-4 border-white
            `
            : `
              border border-gray-200 shadow-md 
              hover:shadow-xl hover:scale-105
            `
        }
      `}
    >
      <div className="mb-1 opacity-90">{icons[type]}</div>
      <div className="text-lg font-bold">{value}</div>
      <div className="text-xs opacity-90 mt-0.5 text-center truncate">{label}</div>
    </div>
  );
}




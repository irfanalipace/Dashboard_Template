// import React from 'react';
// import { Outlet } from 'react-router-dom';
// import SideBar from './SideBar';
// import Header from '../Header';

// const Layout = () => {
//     return (
//         <div className="flex flex-col h-screen bg-gray-100">
//             <header className="w-full bg-white shadow-sm z-10">
//                 <Header />
//             </header>

//             <div className="flex flex-1">
//                 <SideBar />

//                 <main className="flex-1 h-full overflow-y-auto bg-gray-50">
//                     <Outlet />
//                 </main>
//             </div>
//         </div>
//     );
// };

// export default Layout;


import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import Header from "../Header";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Layout = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="flex flex-col h-screen bg-gray-100">

      {/* Header */}
      <header className="w-full bg-white shadow-sm z-10">
        <Header />
      </header>

      {/* Body */}
      <div className="flex flex-1 relative">

        {/* Collapse Button (TOP CENTER OF SIDEBAR) */}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="
            absolute left-64 
            -translate-x-1/2 
            top-3 
            z-50 
            bg-white 
            shadow-md 
            border 
            rounded-full 
            w-8 h-8 
            flex items-center justify-center
            hover:bg-gray-100 
            transition-all
          "
          style={{ left: collapsed ? "0.5rem" : "16rem" }}
        >
          {collapsed ? <FaChevronRight  size={18} /> : <FaChevronLeft size={18} />}
        </button>

        {/* Sidebar */}
        <div
          className={`transition-all duration-300 h-full bg-white shadow-sm border-r
            ${collapsed ? "w-0 overflow-hidden" : "w-64"}
          `}
        >
          {!collapsed && <SideBar />}
        </div>

        {/* Main Content */}
        <main className="flex-1 h-full overflow-y-auto bg-gray-50 p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;

import React, { useState } from "react";
import { FaRegBell } from "react-icons/fa6";
import { IoPersonOutline } from "react-icons/io5";
import { MdLogout, MdSettings } from "react-icons/md";

const Header = ({ pageTitle = "PUNJAB ENFORCEMENT & REGULATORY AUTHORITY" }) => {
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  return (
    <header className="flex justify-between items-center px-6 py-4 bg-white shadow-md sticky top-0 z-50">

      <div className="flex items-center space-x-4">
        <img src="logo.png" alt="Logo" className="w-14 h-16 object-contain" />
        <div>
          <h1 className="text-1xl font-bold text-gray-800">{pageTitle}</h1>
          <p className="text-sm text-gray-500">PERA 360</p>
        </div>
      </div>


      <div className="flex items-center space-x-6">

        <div className="relative">
          <button className="text-gray-700 hover:text-gray-900 transition duration-200">
            <FaRegBell className="text-3xl p-2 rounded-full hover:bg-gray-100" />
          </button>
          <span className="absolute top-1 right-1 h-3 w-3 rounded-full bg-red-500 animate-pulse"></span>
        </div>

        <div className="relative">
          <button
            onClick={() => setShowProfileMenu(!showProfileMenu)}
            className="flex items-center space-x-2 bg-[#C79A5E] from-primarycolor to-secondarycolor text-white px-3 py-1.5 rounded-full hover:from-secondarycolor hover:to-primarycolor transition-all duration-300"
          >
            <IoPersonOutline className="text-3xl" />
            <span className="font-semibold">Admin</span>
          </button>

          {showProfileMenu && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-200 z-50">
              <ul className="flex flex-col p-2 space-y-2">
                <li className="flex items-center px-4 py-2 hover:bg-gray-100 rounded-lg cursor-pointer">
                  <MdSettings className="mr-2 text-lg text-gray-600" />
                  Settings
                </li>
                <li className="flex items-center px-4 py-2 hover:bg-gray-100 rounded-lg cursor-pointer">
                  <MdLogout className="mr-2 text-lg text-gray-600" />
                  Logout
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;

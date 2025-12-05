import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
    MdDashboard,
    MdBarChart,
    MdCalendarToday,
    MdSettings,
    MdLogout,
    MdKeyboardArrowDown,
    MdKeyboardArrowUp,
    MdOutlineDashboard,
} from 'react-icons/md';
import { FaConnectdevelop } from 'react-icons/fa6';
import { PiShareNetworkThin } from 'react-icons/pi';

const SideBar = ({ collapsed }) => {
    const navigate = useNavigate();
    const location = useLocation();

    const [activeItem, setActiveItem] = useState('');
    const [openDropdown, setOpenDropdown] = useState(null);

    const menuItems = [
        { name: 'Executive ViewPoint', icon: MdOutlineDashboard, path: '/' },
        { name: 'Fields Staff Development', icon: FaConnectdevelop, path: '/chatbot-builder' },
        { name: 'Activity Management', icon: MdBarChart, path: '#' },
        { name: 'ES Inventory & Assets', icon: MdCalendarToday, path: '#' },

        {
            name: 'HRMIS Viewpoint',
            icon: PiShareNetworkThin,
            path: '/connected-account',
            submenus: [
                { name: 'Facebook', path: '/connected-account/facebook' },
                { name: 'Instagram', path: '/connected-account/instagram' },
                { name: 'Google My Business', path: '/connected-account/gmb' },
            ],
        },

        { name: 'Finance & Procurement', icon: MdBarChart, path: '#' },
        { name: 'Document Archives', icon: MdCalendarToday, path: '#' },

        { name: 'Settings', icon: MdSettings, path: '/settings' },
    ];

    useEffect(() => {
        const currentPath = location.pathname;

        const activeMainItem = menuItems.find(item =>
            item.path === currentPath ||
            (item.submenus && item.submenus.some(sub => sub.path === currentPath))
        );

        if (activeMainItem) {
            setActiveItem(activeMainItem.name);

            if (activeMainItem.submenus) {
                const activeSubItem = activeMainItem.submenus.find(sub => sub.path === currentPath);

                if (activeSubItem) {
                    setActiveItem(activeSubItem.name);
                    setOpenDropdown(activeMainItem.name);
                }
            }
        }
    }, [location.pathname]);


    const handleItemClick = (itemName, path, hasSubmenus) => {
        if (hasSubmenus) {
            if (!collapsed) {
                setOpenDropdown(openDropdown === itemName ? null : itemName);
            }
        } else {
            setActiveItem(itemName);
            setOpenDropdown(null);
            navigate(path);
        }
    };

    const handleSubmenuClick = (itemName, path) => {
        setActiveItem(itemName);
        navigate(path);
    };

    const handleLogout = () => {
        navigate('/login');
    };

    return (
        <div
            className={`
                flex flex-col h-full 
                text-white font-barlow transition-all duration-300
                ${collapsed ? "w-20" : "w-[258px]"}
            `}
         style={{
    backgroundColor: "var(--color-gold)",
    scrollbarWidth: "none"
  }}
        >

            {/* Logo / Title */}
            <div className="p-4 pt-8">
                {!collapsed && (
                    <h2 className="text-lg font-semibold mb-4 opacity-80">PERA 360</h2>
                )}

                {/* Menu */}
                {menuItems.map(item => (
                    <div key={item.name}>

                        <div
                            className={`
                                flex items-center p-3 mb-3 rounded-lg font-semibold cursor-pointer 
                                transition-all duration-200
                                
                                ${activeItem === item.name ||
                                    (item.submenus && item.submenus.some(sub => sub.name === activeItem))
                                    ? 'bg-white text-black'
                                    : 'hover:bg-white/20'
                                }
                            `}
                            onClick={() => handleItemClick(item.name, item.path, !!item.submenus)}
                        >
                            {/* ICON */}
                            <item.icon className="text-2xl" />

                            {/* TEXT (Hide When Collapsed) */}
                            {!collapsed && (
                                <span className="ml-3 text-[14px] whitespace-nowrap">
                                    {item.name}
                                </span>
                            )}

                            {/* DROPDOWN ICON */}
                            {!collapsed && item.submenus && (
                                <span className="ml-auto">
                                    {openDropdown === item.name ? (
                                        <MdKeyboardArrowUp className="text-xl" />
                                    ) : (
                                        <MdKeyboardArrowDown className="text-xl" />
                                    )}
                                </span>
                            )}
                        </div>

                        {/* SUBMENU - Only show when expanded */}
                        {!collapsed && item.submenus && openDropdown === item.name && (
                            <div className="pl-9 pb-2">
                                {item.submenus.map((submenu) => (
                                    <div
                                        key={submenu.name}
                                        className={`
                                            flex items-center p-2 my-1 rounded-lg cursor-pointer font-bold 
                                            transition-colors duration-200 text-sm
                                            ${activeItem === submenu.name ? 'bg-white text-black' : 'hover:bg-white/20'}
                                        `}
                                        onClick={() => handleSubmenuClick(submenu.name, submenu.path)}
                                    >
                                        {submenu.name}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <div className="flex-grow"></div>

            {/* Logout */}
            <div className="p-4">
                <button
                    className={`
                        flex items-center w-full p-3 rounded-lg cursor-pointer transition-colors duration-200
                        bg-white/20 hover:bg-white hover:text-black font-semibold text-lg
                        ${collapsed ? "justify-center" : ""}
                    `}
                    onClick={handleLogout}
                >
                    <MdLogout className="text-2xl" />
                    {!collapsed && <span className="ml-3">Logout</span>}
                </button>
            </div>
        </div>
    );
};

export default SideBar;

"use client";

import React from "react";
import {
  MdAssessment,
  MdInventory,
  MdDashboard,
  MdMenu,
  MdPlayCircle,
  MdSettings,
} from "react-icons/md";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const Sidebar = () => {
  const pathname = usePathname();
  const menuItems = [
    {
      title: "Reports",
      path: "/reports",
      icon: <MdAssessment className="text-2xl" />,
    },
    {
      title: "Inventory",
      path: "/reports/inventory",
      icon: <MdInventory className="text-2xl" />,
    },
    {
      title: "Layout",
      path: "/reports/layout",
      icon: <MdDashboard className="text-2xl" />,
    },
    {
      title: "Menu",
      path: "/reports/menu",
      icon: <MdMenu className="text-2xl" />,
    },
    {
      title: "Get Started",
      path: "/reports/getStarted",
      icon: <MdPlayCircle className="text-2xl" />,
    },
    {
      title: "Settings",
      path: "/reports/settings",
      icon: <MdSettings className="text-2xl" />,
    },
  ];

  return (
    <div className="flex flex-col h-full bg-white shadow-md pt-8">
      <div className="px-6 mb-2">
        <Image
          src="/logo.png" // <- Update this path to your logo
          alt="Company Logo"
          width={150}
          height={40}
          priority
        />
      </div>
      <nav className="flex-grow overflow-y-auto py-2">
        <ul className="list-none">
          {menuItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <li key={item.title} className="px-6 py-1">
                <Link
                  href={item.path}
                  className={`flex items-center gap-2 transition-colors ${
                    isActive
                      ? "bg-[#e8eefd] text-[#1B59F8] rounded-lg p-2"
                      : "text-gray-700 hover:text-[#1B59F8] p-2"
                  }`}
                >
                  <div className={isActive ? "text-[#1B59F8]" : ""}>
                    {item.icon}
                  </div>
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;

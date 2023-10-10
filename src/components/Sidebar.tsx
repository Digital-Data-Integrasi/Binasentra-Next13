"use client"
import { FaChartBar, FaRegSun, FaUserFriends, FaHome, FaBell } from "react-icons/fa";
import { PiGraphFill } from "react-icons/pi";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

interface Menu {
  label: string;
  url: string;
  icon: any;
  submenus?: {};
}

const menus: Menu[] = [
  {
    label: "Dashboard",
    url: "/framework/dashboard",
    icon: FaChartBar,
  },
  {
    label: "Entity",
    url: "/framework/entity",
    icon: FaUserFriends,
  },
  // Add Module
  //
  {
    label: "Link Analysis",
    url: "/framework/link-analysis",
    icon: PiGraphFill,
  },
  {
    label: "Alert",
    url: "/framework/alert",
    icon: FaBell,
  },
  {
    label: "Setting",
    url: "/framework/setting",
    icon: FaRegSun,
  },
];

const Sidebar = () => {
  const [toggle, setToggle] = useState(true);
  const turnToggle = () => setToggle(!toggle);
  const expandedSidebarStyle = {
    width: "15%",
    transition: "width 0.3s ease-in",
  };
  const collapsedSidebarStyle = {
    width: "5%",
    transition: "width 0.3s ease-out",
  };
  const pathName = usePathname();
  return (
    <div
      style={toggle ? expandedSidebarStyle : collapsedSidebarStyle}
      className="h-full px-3 pb-4 overflow-y-auto bg-white"
    >
      <ul className="space-y-2 font-medium">
        <li className=" text-black font-bold text-xl justify-center flex py-5">
          <button onClick={turnToggle}>
            <FaHome />
          </button>
        </li>
        {menus.map((menu, index) => (
          <li key={index}>
            <Link href={menu.url} className={`flex items-center p-2 text-black rounded-lg hover:bg-blue-600 hover:text-white group space-x-3 ${pathName === menu.url
              ? "bg-blue-600 text-white font-bold"
              : ""
              }`}>
              {<menu.icon />}
              <h1 style={{ display: toggle ? "block" : "none" }}>{menu.label}</h1>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;

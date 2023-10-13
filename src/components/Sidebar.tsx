"use client";
import React, { useState } from 'react';
import {
  MdOutlineDashboard,
  MdOutlineSettings,
} from 'react-icons/md';
import {
  BsChevronDown,
  BsServer,
} from 'react-icons/bs';
import { FaFireAlt } from 'react-icons/fa'
import { RiEarthquakeFill } from 'react-icons/ri';
import {PiPersonDuotone} from "react-icons/pi"
import Link from "next/link";
import { useSession } from 'next-auth/react';

const Menus = [
  { title: 'Dashboard', src: '/framework/dashboard', icon: <MdOutlineDashboard /> },
  {
    title: 'Penutupan',
    src: '#',
    icon: <BsServer />,
    subMenus: [
      {
        title: 'Kebakaran',
        src: '/framework/penutupan/pt-1',
        icon: <FaFireAlt />,
        cName: 'sub-nav',
      },
      {
        title: 'Jiwa',
        src: '/framework/penutupan/pt-2',
        icon: <PiPersonDuotone/>,
        cName: 'sub-nav',
      },
      {
        title: 'Gempa Bumi',
        icon: <RiEarthquakeFill/>,
        src: '/framework/penutupan/pt-3',
      },
    ],
  },

  { title: 'Setting', src: '/framework/setting', gap: true, icon: <MdOutlineSettings /> }
];

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  
  return (
    <div className=" h-screen flex items-end justify-end w-[15%] fixed">
      <div
        className={` ${open ? 'w-48 px-2 ' : 'w-0 '
          } lg:w-72 bg-black h-screen   relative duration-500`}
      >
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <>
              <li
                key={index}
                className={` ${Menu.gap ? 'mt-9' : 'mt-2'}  `}
              >
                <Link href={Menu.src} className={`flex items-center p-2 text-white text-sm rounded-lg hover:bg-cyan-400 hover:text-white group space-x-3`}>
                  {Menu.icon}
                  <div className="flex items-center justify-between w-full">
                    <h1>{Menu.title}</h1>
                    {Menu.subMenus && (
                      <BsChevronDown
                        onClick={() => setSubMenuOpen(!subMenuOpen)}
                        className={`${subMenuOpen && 'rotate-180'}`}
                      />
                    )}
                  </div>
                </Link>
              </li>
              {Menu.subMenus && subMenuOpen && open && (
                <ul className='list-none'>
                  {Menu.subMenus.map((subMenuItem, idx) => (
                    <li
                      key={idx} className='ml-3'>
                      <Link href={subMenuItem.src} className={`flex items-center p-2 text-white text-sm rounded-lg hover:bg-cyan-400 hover:text-white group space-x-3`}>
                        {subMenuItem.icon}
                        <h1>{subMenuItem.title}</h1>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

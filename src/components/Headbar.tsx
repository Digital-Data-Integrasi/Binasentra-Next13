"use client";
import React, { useState } from "react";
import { FaRegSun, FaUser, FaSignOutAlt } from "react-icons/fa";
import Image from "next/image";
import logo from "../../public/bsp.svg"
import Avatar from "./Avatar";
import { useSession, signOut } from "next-auth/react";


const HeadBar = () => {
    const { data: session }: any = useSession();
    // console.log({session}.session?.user);

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const closeDropdown = () => {
        setIsDropdownOpen(false);
    };

    return (
        <nav className="sticky top-0 z-50 bg-white flex justify-between items-center h-14 p-4 rounded-sm">
            <div className="flex items-center">
                <Image src={logo} alt="logo" className="h-8 w-auto ml-3" />
                <text className="text-black ml-10 font-bold">Application Insurance</text>
            </div>
            <div className="flex items-center">
                <Avatar />
                <button
                    type="button"
                    aria-expanded={isDropdownOpen}
                    data-dropdown-toggle="user-dropdown"
                    data-dropdown-placement="bottom"
                    onClick={toggleDropdown}
                >
                    <text className="text-black ml-3 font-bold">{session?.user?.username} ({session?.user?.role})</text>
                </button>
                {isDropdownOpen && (
                    <div
                        className="absolute bg-blue-700 w-[10%] mt-2 py-2 rounded shadow-lg z-50"
                        data-dropdown-content="user-dropdown"
                        style={{ top: "100%", right: "5px" }}
                    >
                        <ul className="list-none ml-3 mr-3 z-50">
                            <li>
                                <a href="/framework/setting/user" className="flex items-center p-2 text-white rounded-lg  hover:bg-blue-800 hover:text-white group space-x-5">
                                    <FaUser />
                                    <h1>Profile</h1>
                                </a>
                            </li>
                            <li>
                                <a href="/framework/setting" className="flex items-center p-2 text-white rounded-lg  hover:bg-blue-800 hover:text-white group space-x-5">
                                    <FaRegSun />
                                    <h1>Settings</h1>
                                </a>
                            </li>
                            <li>
                                <button className="flex items-center p-2 text-white rounded-lg  hover:bg-blue-800 hover:text-white group space-x-5" onClick={() => signOut()}>
                                    <FaSignOutAlt />
                                    <h1>Logout</h1>
                                </button>
                            </li>
                        </ul>
                    </div>
                )}
            </div>

        </nav>
    )
};

export default HeadBar;
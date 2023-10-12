"use client";
import React, { useState } from "react";
import { FaRegSun, FaUser, FaSignOutAlt } from "react-icons/fa";
import Image from "next/image";
import logo from "../../public/bsp.svg"
import Avatar from "./Avatar";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";


const HeadBar = () => {
    const { data: session }: any = useSession();

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const closeDropdown = () => {
        setIsDropdownOpen(false);
    };

    return (
        <nav className="sticky top-0 z-50 bg-blue-700 flex justify-between items-center h-14 p-4">
            <div className="flex items-center">
                {/* <Image src={logo} alt="logo" className="h-8 w-auto ml-3" /> */}
                <text className="text-white ml-10 font-bold">Binasentra Purna</text>
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
                    <text className="text-white ml-3 font-bold">{session?.user?.username}</text>
                </button>
                {isDropdownOpen && (
                    <div
                        className="absolute bg-black w-[10%] mt-2 py-2 rounded shadow-lg z-50"
                        data-dropdown-content="user-dropdown"
                        style={{ top: "100%", right: "5px" }}
                    >
                        <ul className="list-none ml-3 mr-3 z-50">
                            <li>
                                <Link href={'/framework/setting/user'} className={`flex items-center p-2 text-white text-sm rounded-lg hover:bg-cyan-400 hover:text-white group space-x-3`}>
                                    <FaUser />
                                    <h1>Profile</h1>
                                </Link>
                            </li>
                            <li>
                                <Link href={'/framework/setting'} className={`flex items-center p-2 text-white text-sm rounded-lg hover:bg-cyan-400 hover:text-white group space-x-3`}>
                                    <FaRegSun />
                                    <h1>Setting</h1>
                                </Link>
                            </li>
                            <li>
                                <button className="w-full" onClick={() => signOut()}>
                                    <Link href={'#'} className={`flex items-center p-2 text-white text-sm rounded-lg hover:bg-cyan-400 hover:text-white group space-x-3`}>
                                        <FaSignOutAlt />
                                        <h1>Logout</h1>
                                    </Link>
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
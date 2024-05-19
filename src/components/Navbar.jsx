import React from "react";
import { NavLink } from "react-router-dom";
import {
    HomeIcon,
    BriefcaseBusiness,
    TrophyIcon,
    BookText,
    CircleUser
} from "lucide-react";

function Navbar() {
    return (
        <div className="lg:px-10 px-5 py-8 sticky bg-black  shadow-xl shadow-slate-950/40 w-full h-[50px] flex items-center ml-auto">
            <ul className="flex justify-start items-center sm:gap-10 gap-5 w-full h-full text-white">
                <NavLink
                    to={"./work"}
                    className={({ isActive }) =>
                        `${
                            isActive
                                ? "text-fuchsia-500 border-gray-100"
                                : "text-white"
                        }   text-sm h-full flex items-center  hover:text-fuchsia-500 cursor-pointer sm:w-[50px] text-center justify-center`
                    }
                >
                    <p className="hidden sm:block">Work</p>
                    <BriefcaseBusiness className="sm:hidden h-5 hover:text-fuchsia-500 transition-all ease-in-out" />
                </NavLink>
                <NavLink
                    to={
                        "https://drive.google.com/file/d/1WfEGRBhxLCenYzbGr5ocVt2U1buTEXaf/view?usp=sharing"
                    }
                    target="_blank"
                    className={({ isActive }) =>
                        `  text-sm h-full flex items-center  hover:text-fuchsia-500 cursor-pointer`
                    }
                >
                    <p className="hidden sm:block">Resume</p>
                    <BookText className="sm:hidden h-5 hover:text-fuchsia-500 transition-all ease-in-out" />
                </NavLink>
                <NavLink
                    to={"./Achievement"}
                    className={({ isActive }) =>
                        `${
                            isActive
                                ? "text-fuchsia-500  border-gray-100"
                                : "text-white"
                        }   text-sm h-full flex items-center  hover:text-fuchsia-500 cursor-pointer sm:w-[100px] text-center justify-center`
                    }
                >
                    <p className="hidden sm:block">Achievements</p>
                    <TrophyIcon className="sm:hidden h-5 hover:text-fuchsia-500 transition-all ease-in-out" />
                </NavLink>
                <NavLink
                    to={"/About"}
                    className={({ isActive }) =>
                        `${
                            isActive
                                ? "text-fuchsia-500  border-gray-100"
                                : "text-white"
                        }  text-sm h-full flex items-center  hover:text-fuchsia-500 cursor-pointer w-[80px] text-center justify-center`
                    }
                >
                    <p className="hidden sm:block">About me</p>
                    <CircleUser className="sm:hidden h-5 hover:text-fuchsia-500 transition-all ease-in-out" />
                </NavLink>
            </ul>
            <NavLink
                to={"/"}
                className={({ isActive }) =>
                    `${
                        isActive
                            ? "text-fuchsia-500  border-gray-100"
                            : "text-white"
                    } text-sm h-full flex items-center justify-center  px-2 text-white hover:text-fuchsia-500 cursor-pointer`
                }
            >
                <HomeIcon className="h-5 sm:h-9 hover:text-fuchsia-500 transition-all ease-in-out" />
            </NavLink>
        </div>
    );
}

export default Navbar;

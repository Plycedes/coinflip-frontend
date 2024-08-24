import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { CustomButton } from "../components";
import { connect } from "../utils/api.js";

function Navbar() {
    const [address, setAddress] = useState("");

    const connectMetamask = async () => {
        setAddress(connect());
    };

    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <img
                            src="https://images.crunchbase.com/image/upload/c_pad,f_auto,q_auto:eco,dpr_1/zegrkovceq4qummyltgp"
                            className="mr-3 h-12"
                            alt="Logo"
                        />
                    </Link>
                    <div className="flex items-center">
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 
                                        duration-200 ${
                                            isActive ? "text-orange-700" : "text-grey-700"
                                        } border-b 
                                        border-gray-100 
                                        hover:bg-gray-50 
                                        lg:hover:bg-transparent 
                                        lg:border-0 hover:text-orange-700 
                                        lg:p-0`
                                    }
                                >
                                    Player
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/admin"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 
                                        duration-200 ${
                                            isActive ? "text-orange-700" : "text-grey-700"
                                        } border-b 
                                        border-gray-100 
                                        hover:bg-gray-50 
                                        lg:hover:bg-transparent 
                                        lg:border-0 hover:text-orange-700 
                                        lg:p-0`
                                    }
                                >
                                    Admin
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <CustomButton
                        btnType="button"
                        title={address ? "Connected" : "Connect"}
                        styles={address ? "bg-[#1dc071]" : "bg-[#8c6dfd]"}
                        handleClick={() => {
                            connectMetamask();
                        }}
                    />
                </div>
            </nav>
        </header>
    );
}

export default Navbar;

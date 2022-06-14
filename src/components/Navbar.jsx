import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/images/logo.svg";

const Navbar = () => {
    let Links = [
        { name: "Pricing", link: "/pricing" },
        { name: "Product", link: "/product" },
        { name: "About Us", link: "/about" },
        { name: "Careers", link: "/careers" },
        { name: "Community", link: "/community" },
    ];
    const [active, setActive] = useState(false);
    return (
        <>
            <nav className="relative container mx-auto p-6 ">
                <div className="flex  items-center justify-between">
                    {/* Logo */}
                    <div className="pt-2">
                        <Link to="/">
                            <img src={logo} alt="logo" />
                        </Link>
                    </div>
                    {/* Menu Items */}
                    <div
                        className={`md:flex items-center space-x-6 md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
                            active ? "top-20 " : "top-[-490px]"
                        }`}
                    >
                        {Links.map((link) => (
                            <Link
                                key={link.name}
                                to={link.link}
                                className="hover:text-darkGrayishBlue"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Button */}
                    <Link
                        to="/"
                        className=" hidden p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight md:block"
                    >
                        Get Started
                    </Link>
                    {active ? (
                        <FaTimes
                            onClick={() => setActive(false)}
                            className=" md:hidden h-5 w-5 cursor-pointer"
                        />
                    ) : (
                        <FaBars
                            onClick={() => setActive(true)}
                            className=" md:hidden h-5 w-5 cursor-pointer"
                        />
                    )}
                </div>
            </nav>
        </>
    );
};

export default Navbar;

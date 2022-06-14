import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo-white.svg";
import fb from "../../assets/images/icon-facebook.svg";
import yt from "../../assets/images/icon-youtube.svg";
import twi from "../../assets/images/icon-twitter.svg";
import pin from "../../assets/images/icon-pinterest.svg";
import insta from "../../assets/images/icon-instagram.svg";
import leftImg from "../../assets/images/illustration-intro.svg";
import avatar1 from "../../assets/images/avatar-ali.png";
import avatar2 from "../../assets/images/avatar-anisha.png";
import avatar3 from "../../assets/images/avatar-shanai.png";
import ListItem from "../ListItem";
import Cart from "../Cart";

const Home = () => {
    return (
        <>
            {/* HeroSection */}
            <section id="hero" className="bg-hero">
                {/* Flex Container */}
                <div className="container flex flex-col-reverse md:flex-row items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0">
                    {/* Left Items */}
                    <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
                        <h1 className=" text-gray-800 max-w-md text-4xl font-bold text-center md:text-5xl md:text-left ">
                            Bring everyone together to build better products
                        </h1>
                        <p className="max-w-sm text-base text-gray-500 text-center md:text-left">
                            Manage makes it simple for software teams to plan
                            day-to-day tasks while keeping the larger team goals
                            in view.
                        </p>
                        <div className="flex justify-center md:justify-start">
                            <Link
                                href="#"
                                className="p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight"
                            >
                                Get Started
                            </Link>
                        </div>
                    </div>
                    {/* Image */}
                    <div className="flex-1 p-6 md:pb-40">
                        <img src={leftImg} alt="" />
                    </div>
                </div>
            </section>
            {/* Features section */}
            <section id="features">
                <div className="container flex flex-col md:flex-row mx-auto  ">
                    {/* //Text */}
                    <div className="flex flex-col md:w-1/2 space-y-8 ">
                        <h1 className="text-5xl font-semibold md:font-medium text-center md:text-left  ">
                            What's different about Manage?
                        </h1>
                        <p className="max-w-xs text-base text-gray-500 text-center md:text-left mx-auto md:mx-0 leading-6 pb-7">
                            Manage provides all the functionality your team
                            needs, without the complexity. Our software is
                            tailor-made for modern digital product teams.
                        </p>
                    </div>
                    {/* List with num */}
                    <div className="flex flex-col p-7 space-y-10 mb-20 md:w-1/2 ">
                        {/* button number */}
                        <ListItem num="1" />
                        <ListItem num="2" />
                        <ListItem num="3" />
                    </div>
                </div>
            </section>
            <section id="testimonials">
                {/* text */}
                <h3 className=" text-gray-800 max-w-md font-medium text-center text-5xl mx-auto">
                    What they've said
                </h3>
                <div className="flex flex-col md:flex-row space-x-5 mx-10">
                    {/* Cart section */}
                    <Cart image={avatar1} />
                    <Cart image={avatar2} />
                    <Cart image={avatar3} />
                </div>
            </section>
            {/* Button */}
            <div className="flex flex-row justify-center py-16 ">
                <Link
                    href="#"
                    className="p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight"
                >
                    Get Started
                </Link>
            </div>

            {/* CTA Section */}
            <section id="cta" className="bg-brightRed h-50 p-16 bg-footer ">
                <div className="container flex flex-col  md:flex-row justify-between mx-auto ">
                    <div className="heading">
                        <h1 className=" text-3xl font-bold text-white">
                            Simplify how your team works today.
                        </h1>
                    </div>

                    <div className="py-4 mx-auto md:mx-0 ">
                        <Link
                            href="#"
                            className="p-3 px-6 pt-2 text-brightRed bg-white rounded-full baseline hover:bg-black"
                        >
                            Get Started
                        </Link>
                    </div>
                </div>
            </section>
            {/* Footer section */}
            <footer id="footer" className=" bg-veryDarkBlue md:h-auto ">
                <div className=" flex flex-col-reverse md:flex-row p-10">
                    {/* first section */}
                    <div
                        className="flex flex-col-reverse md:flex-col md:w-1/4 p-5
                     "
                    >
                        <div className="md:pb-16 mt-10 mx-auto ">
                            <img src={logo} alt="" />
                        </div>
                        {/* Social Icon */}
                        <div className="flex flex-row justify-around md:justify-between">
                            <img src={fb} alt="" />
                            <img src={yt} alt="" />
                            <img src={twi} alt="" />
                            <img src={pin} alt="" />
                            <img src={insta} alt="" />
                        </div>
                    </div>

                    {/* Second section */}
                    <div className="flex flex-row my-auto  md:w-2/4">
                        <div className="flex flex-col p-5 my-auto ">
                            <ul className="text-veryLightGray  space-y-3 ml-16">
                                <li className="text-sm ">Home</li>
                                <li className="text-sm">Pricing</li>
                                <li className="text-sm">Products</li>
                                <li className="text-sm">About Us</li>
                            </ul>
                        </div>
                        <div className="flex flex-col p-5 ">
                            <ul className="text-veryLightGray space-y-3 ml-16">
                                <li className="text-sm ">Careers</li>
                                <li className="text-sm">Community</li>
                                <li className="text-sm">Privacy Policy</li>
                            </ul>
                        </div>
                    </div>

                    <div className="flex flex-row mt-5 mx-auto space-x-3  md:w-1/4">
                        <div className="">
                            <input
                                className="rounded-3xl py-2 md:py-1 px-5 outline-none "
                                type="text"
                                placeholder="Write something"
                            />
                        </div>
                        <div>
                            <button className=" bg-brightRed px-5  py-2 md:py-1 text-white  rounded-3xl">
                                GO
                            </button>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Home;

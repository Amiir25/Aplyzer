import React from "react";
import { assets } from "../assets/assets.js";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faChartBar, faCheckDouble, faEquals, faPeace, faPen } from "@fortawesome/free-solid-svg-icons";



const Navbar = () => {
    return (
        <>
        <nav className="py-2 flex items-center justify-between text-gray-800 md:text-lg font-medium">

            {/* Logo */}
            <img src="/aplyzer-transparent.png" alt="Logo Image" className="w-40" />

            {/* Links */}
            <div className="relative gap-8 hidden md:flex pt-4">
                <Link>About</Link>
                <Link>Tips</Link>
                <Link>Contact</Link>

                {/* More tools */}
                <div className="group">
                    <button className=" flex items-center gap-2 hover:text-[#F51D28]">
                        More
                        <FontAwesomeIcon icon={ faAngleDown } />
                    </button>

                    <div className="absolute -top-100 left-0 right-0 border-b border-gray-400 px-2 pt-6 opacity-0 group-hover:top-full group-hover:opacity-100 transform translate-y-10 transition-all duration-500 z-10">
                        
                        <Link to='/' className="flex items-center gap-4 mb-6">
                            <FontAwesomeIcon icon={ faChartBar } className="w-8 p-2 bg-rose-400/50 text-rose-700
                            rounded text-2xl" />
                            <div>
                                <h2 className="text-sm font-bold">Job Application Tracker</h2>
                                <p className="text-xs">Lorem ipsum dolor sit amet consectetur.</p>
                            </div>
                        </Link>

                        <Link to='/' className="flex items-center gap-4 mb-6">
                            <FontAwesomeIcon icon={ faCheckDouble } className="w-8 p-2 bg-yellow-400/50 text-yellow-700
                            rounded text-2xl" />
                            <div>
                                <h2 className="text-sm font-bold">AI Resume Cheker</h2>
                                <p className="text-xs">Lorem ipsum dolor sit amet consectetur.</p>
                            </div>
                        </Link>

                        <Link to='/' className="flex items-center gap-4 mb-6">
                            <FontAwesomeIcon icon={ faEquals } className="w-8 p-2 bg-lime-400/50 text-lime-700
                            rounded text-2xl" />
                            <div>
                                <h2 className="text-sm font-bold">Job Description Matching</h2>
                                <p className="text-xs">Lorem ipsum dolor sit amet consectetur.</p>
                            </div>
                        </Link>

                        <Link to='/' className="flex items-center gap-4 mb-6">
                            <FontAwesomeIcon icon={ faPen } className="w-8 p-2 bg-sky-400/50 text-sky-700
                            rounded text-2xl" />
                            <div>
                                <h2 className="text-sm font-bold">Cover Letter Generator</h2>
                                <p className="text-xs">Lorem ipsum dolor sit amet consectetur.</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Sign */}
            <button className="hidden md:block border border-[#F51D28] px-4 py-2 rounded
            hover:text-white hover:bg-[#F51D28] ">
                <Link>Sign up</Link>
            </button>
        </nav>
        </>
    )
}

export default Navbar;
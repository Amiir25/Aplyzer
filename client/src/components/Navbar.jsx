import React, { useState } from "react";
// import { assets } from "../assets/assets.js";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faBars, faChartBar, faCheckDouble, faCircleXmark, faEquals, faPen } from "@fortawesome/free-solid-svg-icons";



const Navbar = () => {

    const [smallScreen, setSmallScreen] = useState(false);

    return (
        <>
        <nav className="relative py-4 flex items-center justify-between text-gray-800 md:text-lg font-medium">

            {/* Logo */}
            <Link to={'/'} className="w-1/4 md:w-1/5">
                <img src="/logo-header.png" alt="Logo Image" />
            </Link>

            {/* Links */}
            <div className="relative gap-8 hidden md:flex">
                <Link to='/' className="hover:text-gray-600">About</Link>
                <Link to='/' className="hover:text-gray-600">Tips</Link>
                <Link to='/' className="hover:text-gray-600">Contact</Link>

                {/* More tools */}
                <div className="group">
                    <button className=" flex items-center gap-2 hover:text-[#F51D28]">
                        More
                        <FontAwesomeIcon icon={ faAngleDown } />
                    </button>

                    <div className="absolute top-full left-0 right-0 px-2 pt-6 opacity-0 max-h-0 z-10
                    transform translate-y-full overflow-hidden transition-all ease-in-out duration-200
                    group-hover:max-h-82 group-hover:translate-y-0 group-hover:border-b border-gray-400
                    group-hover:opacity-100">
                        
                        <Link to='/' className="flex items-center gap-4 mb-6 hover:text-gray-600">
                            <FontAwesomeIcon icon={ faChartBar } className="w-8 p-2 bg-rose-400/50 text-rose-700
                            rounded text-2xl" />
                            <div>
                                <h2 className="text-sm font-bold">Job Application Tracker</h2>
                                <p className="text-xs">Lorem ipsum dolor sit amet consectetur.</p>
                            </div>
                        </Link>

                        <Link to='/' className="flex items-center gap-4 mb-6 hover:text-gray-600">
                            <FontAwesomeIcon icon={ faCheckDouble } className="w-8 p-2 bg-yellow-400/50 text-yellow-700
                            rounded text-2xl" />
                            <div>
                                <h2 className="text-sm font-bold">AI Resume Cheker</h2>
                                <p className="text-xs">Lorem ipsum dolor sit amet consectetur.</p>
                            </div>
                        </Link>

                        <Link to='/' className="flex items-center gap-4 mb-6 hover:text-gray-600">
                            <FontAwesomeIcon icon={ faEquals } className="w-8 p-2 bg-lime-400/50 text-lime-700
                            rounded text-2xl" />
                            <div>
                                <h2 className="text-sm font-bold">Job Description Matching</h2>
                                <p className="text-xs">Lorem ipsum dolor sit amet consectetur.</p>
                            </div>
                        </Link>

                        <Link to='/' className="flex items-center gap-4 mb-6 hover:text-gray-600">
                            <FontAwesomeIcon icon={ faPen } className="w-8 p-2 bg-sky-400/50 text-sky-700
                            rounded text-2xl" />
                            <div>
                                <h2 className="text-sm font-bold">Cover Letter Generator</h2>
                                <p className="text-xs">Lorem ipsum dolor sit amet consectetur.</p>
                            </div>
                        </Link>
                    </div>
                </div> {/* more tools */}
            </div> {/* links */}

            {/* Sign */}
            <button className="hidden md:block border border-[#F51D28] px-4 py-2 rounded
            hover:text-white hover:bg-[#F51D28] ">
                <Link>Sign up</Link>
            </button>

            {/* Small screen menu */}
            <div>
                <FontAwesomeIcon icon={ faBars } className="md:hidden text-2xl hover:text-gray-600 cursor-pointer"
                onClick={() => setSmallScreen(true)} />
            </div>

            {/* Small screen links */}
            <div className={`bg-gray-700 absolute top-0 -left-10 w-screen h-screen transform -translate-x-200
            ${ smallScreen && 'translate-x-0' } transition-all duration-300`}>
                
                {/* Close icon */}
                <FontAwesomeIcon icon={ faCircleXmark } className="float-right text-3xl p-6"
                onClick={ () => setSmallScreen(false) } />

                <Link to='/' className="hover:text-gray-600">About</Link>
                <Link to='/' className="hover:text-gray-600">Tips</Link>
                <Link to='/' className="hover:text-gray-600">Contact</Link>

                {/* More tools */}
                <div className="group">
                    <button className=" flex items-center gap-2 hover:text-[#F51D28]">
                        More
                        <FontAwesomeIcon icon={ faAngleDown } />
                    </button>

                    <div>
                        <Link to='/' className="flex items-center gap-4 mb-6 hover:text-gray-600">
                            <FontAwesomeIcon icon={ faChartBar } className="w-8 p-2 bg-rose-400/50 text-rose-700
                            rounded text-2xl" />
                            <div>
                                <h2 className="text-sm font-bold">Job Application Tracker</h2>
                                <p className="text-xs">Lorem ipsum dolor sit amet consectetur.</p>
                            </div>
                        </Link>

                        <Link to='/' className="flex items-center gap-4 mb-6 hover:text-gray-600">
                            <FontAwesomeIcon icon={ faCheckDouble } className="w-8 p-2 bg-yellow-400/50 text-yellow-700
                            rounded text-2xl" />
                            <div>
                                <h2 className="text-sm font-bold">AI Resume Cheker</h2>
                                <p className="text-xs">Lorem ipsum dolor sit amet consectetur.</p>
                            </div>
                        </Link>

                        <Link to='/' className="flex items-center gap-4 mb-6 hover:text-gray-600">
                            <FontAwesomeIcon icon={ faEquals } className="w-8 p-2 bg-lime-400/50 text-lime-700
                            rounded text-2xl" />
                            <div>
                                <h2 className="text-sm font-bold">Job Description Matching</h2>
                                <p className="text-xs">Lorem ipsum dolor sit amet consectetur.</p>
                            </div>
                        </Link>

                        <Link to='/' className="flex items-center gap-4 mb-6 hover:text-gray-600">
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

        </nav>
        </>
    )
}

export default Navbar;
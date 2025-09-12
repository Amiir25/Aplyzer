import React, { useContext, useState } from "react";
// import { assets } from "../assets/assets.js";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faBars, faChartBar, faCheckDouble, faCircleXmark, faEquals, faPen } from "@fortawesome/free-solid-svg-icons";
import { AuthContext } from "../context/AuthContext";



const Navbar = () => {

    const { user } = useContext(AuthContext);
    const location = useLocation();
    const [smallScreen, setSmallScreen] = useState(false);

    return (
        <>
        <nav className="relative px-6 md:px-16 lg:px-24 xl:px-32 py-4 flex items-center justify-between
        text-gray-800 md:text-lg font-medium">

            {/* Logo */}
            {
                !user ?
                
                <Link to={'/'}>
                    <img src="/aplyzer.png" alt="Logo Image"
                    className="w-80"/>
                </Link>
                
                :
                
                <Link to={'/'}>
                    <img src="/logo.png" alt="Logo Image"
                    className="w-24" />
                </Link>
            }

            {/* Sign In button */}
            {
                !user ?

                <div>
                    {
                        // Hide Sign In button from signin and signup pages
                        !(location.pathname.includes('signin') || location.pathname.includes('signup')) &&
                        <button className="hidden md:block border border-[#02A9EB] px-4 py-2 rounded
                        hover:text-white hover:bg-gradient-main cursor-pointer ">
                            <Link to='auth/signin'>
                                Sign In
                            </Link>
                        </button>
                    }
                </div>

                :
                
                <>
                {/* Links */}
                <div className="relative gap-8 hidden md:flex">
                    <Link to='/' className="text-sm hover:text-gray-600">Resume Builder</Link>
                    <Link to='/' className="text-sm hover:text-gray-600">Resume Job Matching</Link>
                    <Link to='/' className="text-sm hover:text-gray-600">Cover Letter Generator</Link>

                    {/* More tools */}
                    {/* <div className="group">
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
                    </div> more tools */}
                    
                </div> {/* links */}
                
                {/* Profile */}
                <p className='flex items-center justify-center text-2xl md:text-4xl text-white w-12 h-12
                    rounded-full bg-[#02A9EB]'>
                    { user.username[0] }
                </p>
                </>
            }

            {/* Small screen menu icon */}
            <div className="md:hidden">
                <FontAwesomeIcon icon={ faBars } className="text-2xl hover:text-gray-600 cursor-pointer"
                onClick={() => setSmallScreen(true)} />
            </div>

            {/* Small screen links */}
            <div className={`absolute md:hidden top-0 -left-10 w-screen h-screen bg-black/95 text-gray-200
                transform -translate-x-200 overflow-y-scroll
             ${ smallScreen && 'translate-x-0' } transition-all duration-300`}>
                
                {/* Logo */}
                <img src="/logo-header.png" alt="Logo Image"
                className="mx-auto mt-6" />
                

                {/* Close icon */}
                <FontAwesomeIcon icon={ faCircleXmark }
                className="fixed top-0 right-0 text-3xl p-4 hover:text-gray-400 cursor-pointer"
                onClick={ () => setSmallScreen(false) } />

                <div className="flex flex-col items-center gap-4 mt-20 h-screen">
                    <Link to='/' className="text-2xl hover:text-gray-400">About</Link>
                    <Link to='/' className="text-2xl hover:text-gray-400">Tips</Link>
                    <Link to='/' className="text-2xl hover:text-gray-400">Contact</Link>

                    {/* More tools */}
                    <div className="group mt-4">
                        <button className="flex items-center gap-2 text-2xl mb-4 font-bold underline">
                            More Tools
                        </button>

                        <div>
                            <Link to='/' className="flex items-center gap-4 mb-6 hover:text-gray-400">
                                <FontAwesomeIcon icon={ faChartBar } className="w-8 p-2 bg-rose-400/50 text-rose-700
                                rounded text-2xl" />
                                <div>
                                    <h2 className="text-lg font-bold">Job Application Tracker</h2>
                                    <p className="text-sm">Lorem ipsum dolor sit amet consectetur.</p>
                                </div>
                            </Link>

                            <Link to='/' className="flex items-center gap-4 mb-6 hover:text-gray-400">
                                <FontAwesomeIcon icon={ faCheckDouble } className="w-8 p-2 bg-yellow-400/50 text-yellow-700
                                rounded text-2xl" />
                                <div>
                                    <h2 className="text-lg font-bold">AI Resume Cheker</h2>
                                    <p className="text-sm">Lorem ipsum dolor sit amet consectetur.</p>
                                </div>
                            </Link>

                            <Link to='/' className="flex items-center gap-4 mb-6 hover:text-gray-400">
                                <FontAwesomeIcon icon={ faEquals } className="w-8 p-2 bg-lime-400/50 text-lime-700
                                rounded text-2xl" />
                                <div>
                                    <h2 className="text-lg font-bold">Job Description Matching</h2>
                                    <p className="text-sm">Lorem ipsum dolor sit amet consectetur.</p>
                                </div>
                            </Link>

                            <Link to='/' className="flex items-center gap-4 mb-6 hover:text-gray-400">
                                <FontAwesomeIcon icon={ faPen } className="w-8 p-2 bg-sky-400/50 text-sky-700
                                rounded text-2xl" />
                                <div>
                                    <h2 className="text-lg font-bold">Cover Letter Generator</h2>
                                    <p className="text-sm">Lorem ipsum dolor sit amet consectetur.</p>
                                </div>
                            </Link>
                        </div>
                    </div> {/* More tools */}
                </div>
            </div> {/* Small screen links */}

        </nav>
        </>
    )
}

export default Navbar;
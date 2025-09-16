import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faBars, faChartBar, faCheckDouble, faCircleXmark, faEquals, faPen } from "@fortawesome/free-solid-svg-icons";
import { AuthContext } from "../context/AuthContext";



const Navbar = () => {

    const { user, logout } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const profileRef = useRef();

    const [smallScreen, setSmallScreen] = useState(false);
    const [showProfile, setShowProfile] = useState(false);
    const [showLogoutPopup, setShowLogoutPopup] = useState(false);
    const [showAiTools, setShowAiTools] = useState(false);

    // Handle Logout
    const handleLogout = () => {
        setShowLogoutPopup(true);

        setTimeout(() => {
            logout();
            setShowLogoutPopup(false);
            navigate('/');
        }, 2000);
    }

    useEffect(() => {
        // Close profile & AI tolls on outside click
        const handleOutsideClick = (e) => {
            if (profileRef.current && !profileRef.current.contains(e.target)) {
                setShowProfile(false);
                setShowAiTools(false);
            }
        }

        document.addEventListener('mousedown', handleOutsideClick);
        return () => document.removeEventListener('mousedown', handleOutsideClick);
    }, []);

    // Open job description summarizer page
    const openAiToolsPage = (link) => {
        window.open(link, '_blank', 'noopener,noreferrer');
    }

    return (
        <>
        <nav
        ref={ profileRef }
        className="relative px-6 md:px-16 lg:px-24 xl:px-32 py-4 flex items-center justify-between
        text-gray-800 md:text-lg font-medium">

            {/* Logo */}
            {
                !user ?
                
                <Link to={'/'}>
                    <img src="/aplyzer.png" alt="Logo Image"
                    className="w-50"/>
                </Link>
                
                :
                
                <Link to={'/'}>
                    <img src="/logo.png" alt="Logo Image"
                    className="w-20" />
                </Link>
            }

            {/* --- */}
            {
                !user ?

                <div>
                    {
                        // Hide Sign In button from signin and signup pages
                        !(location.pathname.includes('signin') || location.pathname.includes('signup')) &&
                        <Link to='auth/signin'>
                            <button className="hidden md:block border border-blue-500 px-2 py-1 rounded bg-gradient-to-r
                            hover:text-white hover:border-white hover:from-blue-800 hover:to-blue-500
                            hover:opacity-90 active:opacity-100 cursor-pointer ">
                                Sign In
                            </button>
                        </Link>
                    }
                </div>

                :
                
                <>
                {/* Links */}
                {
                    <div className="relative gap-8 hidden md:flex">
                        {/* Dashbaord */}
                        <Link to={`/user/dashboard/${user.id}`}
                            className={`${ location.pathname.includes('/dashboard') && 'border-b-3 border-blue-500 text-blue-500 font-bold' }
                         hover:text-gray-600`}>
                            Dashboard
                        </Link>
                        {/* Jobs */}
                        <Link to={`/user/all-jobs/${user.id}`}
                            className={`${ location.pathname.includes('/all-jobs') && 'border-b-3 border-blue-500 text-blue-500 font-bold' }
                         hover:text-gray-600`}>
                            Jobs
                        </Link>
                        {/* Job Details */}
                        {
                            location.pathname.includes('job-details') &&
                            <Link
                                className='border-b-3 border-blue-500 text-blue-500 font-bold hover:text-gray-600'>
                                Job Details
                            </Link>
                        }
                        {/* Add new job */}
                        {
                            location.pathname.includes('add-new-job') &&
                            <Link
                                className='border-b-3 border-blue-500 text-blue-500 font-bold hover:text-gray-600'>
                                Add New Job
                            </Link>
                        }
                        {/* Update Job */}
                        {
                            location.pathname.includes('update-job') &&
                            <Link
                                className='border-b-3 border-blue-500 text-blue-500 font-bold hover:text-gray-600'>
                                Update Job
                            </Link>
                        }
                        {/* AI tools */}
                        <div
                        onClick={ () => setShowAiTools(!showAiTools) }
                        className="group">
                            <button className=" flex items-center gap-2 hover:text-gray-600 cursor-pointer">
                                AI Tools 
                                <FontAwesomeIcon icon={ faAngleDown } />
                            </button>

                            <div
                            className={`absolute top-full left-0 right-0 px-2 pt-6 z-10 overflow-hidden transition-all ease-in-out duration-200
                            ${ showAiTools ? 'max-h-100 opacity-100' : 'max-h-0 opacity-0' } bg-gray-800 text-white`}>
                                
                                <Link
                                onClick={ () => openAiToolsPage('/ai-tools/summarize-job-description') }
                                className="flex items-center gap-4 mb-6 hover:text-gray-300">
                                    <FontAwesomeIcon icon={ faChartBar } className="w-8 p-2 bg-white/20 rounded text-2xl" />
                                    <div>
                                        <h2 className="text-sm font-bold">Job Description Summarizer</h2>
                                        {/* <p className="text-xs">Lorem ipsum dolor sit amet consectetur.</p> */}
                                    </div>
                                </Link>

                                <Link to='/' className="flex items-center gap-4 mb-6 hover:text-gray-300">
                                    <FontAwesomeIcon icon={ faCheckDouble } className="w-8 p-2 bg-white/20 rounded text-2xl" />
                                    <div>
                                        <h2 className="text-sm font-bold">AI Resume Cheker</h2>
                                        {/* <p className="text-xs">Lorem ipsum dolor sit amet consectetur.</p> */}
                                    </div>
                                </Link>

                                <Link to='/' className="flex items-center gap-4 mb-6 hover:text-gray-300">
                                    <FontAwesomeIcon icon={ faEquals } className="w-8 p-2 bg-white/20 rounded text-2xl" />
                                    <div>
                                        <h2 className="text-sm font-bold">Job Description Matching</h2>
                                        {/* <p className="text-xs">Lorem ipsum dolor sit amet consectetur.</p> */}
                                    </div>
                                </Link>

                                <Link to='/' className="flex items-center gap-4 mb-6 hover:text-gray-300">
                                    <FontAwesomeIcon icon={ faPen } className="w-8 p-2 bg-white/20 rounded text-2xl" />
                                    <div>
                                        <h2 className="text-sm font-bold">Cover Letter Generator</h2>
                                        {/* <p className="text-xs">Lorem ipsum dolor sit amet consectetur.</p> */}
                                    </div>
                                </Link>
                            </div>
                        </div> {/* more tools */}
                        
                    </div>
                }

                <div>
                    {/* Avatar circle */}
                    <p 
                    onClick={ () => setShowProfile(!showProfile) }
                    className='flex items-center justify-center text-xl md:text-3xl text-white w-12 h-12
                        rounded-full bg-gradient-to-r from-blue-900 to-blue-500 cursor-pointer'>
                        { user.username[0].toUpperCase() }
                    </p>

                    {/* Profile */}
                    {
                        showProfile &&
                        <div className="fixed bg-gray-900 right-5 mt-2 w-70 rounded-xl shadow-lg p-4 z-50">
                            <div className="flex items-center gap-2">
                                <p className='flex items-center justify-center text-white w-12 h-12
                                rounded-full bg-gradient-to-r from-blue-900 to-blue-500'>
                                    { user.username[0].toUpperCase() }
                                </p>
                                <div className="flex flex-col">
                                    <p className="text-white text-sm">{ user.username.charAt(0).toUpperCase() + user.username.slice(1) }</p>
                                    <p className="text-xs text-white font-mono">{ user.email }</p>
                                </div>
                            </div>

                            <div className="text-gray-300 text-sm flex flex-col gap-4 my-4 py-4
                            border-t border-b border-gray-500">
                                <p className="hover:text-white cursor-pointer">Your profile</p>
                                <p className="hover:text-white cursor-pointer">Settings</p>
                            </div>

                            <button
                            onClick={ handleLogout }
                            className="flex items-center gap-2  text-red-500 hover:text-red-400 cursor-pointer">
                                Logout
                            </button>
                        </div>
                    }

                    {/* Logout Popup */}
                    {
                        showLogoutPopup &&
                        <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-[60]">
                            <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center gap-2">
                                <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                                <p className="text-2xl text-gray-800 font-medium mt-2">Logging out...</p>
                            </div>
                        </div>
                    }
                </div>
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


/**

<div className="absolute top-full left-0 right-0 px-2 pt-6 opacity-0 max-h-0 z-10
transform translate-y-full overflow-hidden transition-all ease-in-out duration-200
group-hover:max-h-82 group-hover:translate-y-0 group-hover:border-b border-gray-400
group-hover:opacity-100">


{
    !(location.pathname.includes('job-details') || location.pathname.includes('add-new-job') || location.pathname.includes('update-job')) &&
    <>
    <Link to='/' className="text-[15px] hover:text-gray-600">Resume Builder</Link>
    <Link to='/' className="text-[15px] hover:text-gray-600">Resume Job Matching</Link>
    <Link to='/' className="text-[15px] hover:text-gray-600">Cover Letter Generator</Link>
    </>
}



 */
import React from 'react'
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faFacebook, faGithub, faInstagram, faLinkedin, faLinkedinIn, faReddit, faTelegram, faTiktok, faTwitter, faWhatsapp, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faX } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <>
    {/* <footer className='flex flex-col items-center justify-between
     bg-black text-gray-200 p-20'>

        Logo
        <img src='/logo-header.png' alt="Logo Image" className='flex-1 w-full md:w-1/3' />


        <div className='flex flex-row flex-wrap items-start justify-center md:justify-between gap-20 w-full mt-10'>

            Links
            <div className='flex flex-wrap gap-4 items-center justify-center w-84 text-left '>
                <Link to='/' className='hover:underline'>Home</Link>
                <Link to='/' className='hover:underline'>Sign up</Link>
                <Link to='/' className='hover:underline'>Login</Link>
                <Link to='/' className='hover:underline'>Tools</Link>
                <Link to='/' className='hover:underline'>Contacts</Link>
                <Link to='/' className='hover:underline'>About</Link>
                <Link to='/' className='hover:underline'>FAQs</Link>
                <Link to='/' className='hover:underline'>How it works?</Link>
                <Link to='/' className='hover:underline'>Testimonials</Link>
            </div>

            Tools
            <div className='flex flex-col gap-2 text-left'>
                <Link to='/' className='hover:underline'>Job Application Tracker</Link>
                <Link to='/' className='hover:underline'>AI Resume Builder</Link>
                <Link to='/' className='hover:underline'>Resume Checker</Link>
                <Link to='/' className='hover:underline'>Cover Letter Generator</Link>
            </div>

            Social
            <div className='text-xl px-4 flex flex-wrap gap-8 items-center justify-center w-44'>
                <a href="" className='hover:text-[#F51D28]'>
                    <FontAwesomeIcon icon={ faFacebook } />
                </a>
                <a href="" className='hover:text-[#F51D28]'>
                    <FontAwesomeIcon icon={ faWhatsapp } />
                </a>
                <a href="" className='hover:text-[#F51D28]'>
                    <FontAwesomeIcon icon={ faTwitter } />
                </a>
                <a href="" className='hover:text-[#F51D28]'>
                    <FontAwesomeIcon icon={ faTelegram } />
                </a>
                <a href="" className='hover:text-[#F51D28]'>
                    <FontAwesomeIcon icon={ faLinkedin } />
                </a>
                <a href="" className='hover:text-[#F51D28]'>
                    <FontAwesomeIcon icon={ faInstagram } />
                </a>
                <a href="" className='hover:text-[#F51D28]'>
                    <FontAwesomeIcon icon={ faTiktok } />
                </a>
                <a href="" className='hover:text-[#F51D28]'>
                    <FontAwesomeIcon icon={ faDiscord } />
                </a>
                <a href="" className='hover:text-[#F51D28]'>
                    <FontAwesomeIcon icon={ faReddit } />
                </a>
            </div>

        </div>
    
    </footer> */}

    {/* <p className='text-center text-sm text-gray-700 bg-black pb-2'>
        Built by <a href="" className='underline hover:text-green-500'>Amir Sadik</a>
        &nbsp;•  &copy; 2025 Aplyzer •
    </p> */}

    <footer className="px-6 md:px-16 lg:px-24 xl:px-32 pt-8 w-full text-gray-300 bg-black">
        <div className="flex flex-col md:flex-row w-full gap-10 border-b border-gray-500/30 pb-6">
            <div className="flex-1">
                
                {/* Logo */}

                <img src='/logo.png' alt="Logo Image"
                className='w-40 mx-auto' />
                
                <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 md:gap-6
                mt-6 w-2/3 md:w-full mx-auto">
                    <a href="#">
                        <FontAwesomeIcon icon={ faLinkedinIn }
                        className='text-xl md:text-lg lg:text-xl text-white hover:text-gray-400 active:text-white' />
                    </a>
                    <a href="#">
                        <FontAwesomeIcon icon={ faFacebook }
                        className='text-xl md:text-lg lg:text-xl text-white hover:text-gray-400 active:text-white' />
                    </a>
                    <a href="#">
                        <FontAwesomeIcon icon={ faXTwitter }
                        className='text-xl md:text-lg lg:text-xl text-white hover:text-gray-400 active:text-white' />
                    </a>
                    <a href="#">
                        <FontAwesomeIcon icon={ faWhatsapp }
                        className='text-xl md:text-lg lg:text-xl text-white hover:text-gray-400 active:text-white' />
                    </a>
                    <a href="#">
                        <FontAwesomeIcon icon={ faTelegram }
                        className='text-xl md:text-lg lg:text-xl text-white hover:text-gray-400 active:text-white' />
                    </a>
                    <a href="#">
                        <FontAwesomeIcon icon={ faTiktok }
                        className='text-xl md:text-lg lg:text-xl text-white hover:text-gray-400 active:text-white' />
                    </a>
                    <a href="#">
                        <FontAwesomeIcon icon={ faInstagram }
                        className='text-xl md:text-lg lg:text-xl text-white hover:text-gray-400 active:text-white' />
                    </a>
                </div>
            </div>

            {/*  */}
            <div className='flex-1 w-1/2 mx-auto'>
                <div className='w-fit md:mx-auto'>
                    <h2 className="font-semibold mb-5 text-gray-500">Company</h2>
                    <ul className="text-sm space-y-2">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About us</a></li>
                        <li><a href="#">Contact us</a></li>
                        <li><a href="#">Privacy policy</a></li>
                    </ul>
                </div>
            </div>
                
            {/*  */}
            <div className='flex-1 w-1/2 mx-auto'>
                <div className='w-fit md:mx-auto'>
                    <h2 className="font-semibold mb-5 text-gray-500">Get in touch</h2>
                    <div className="text-sm space-y-2">
                        <p>+251 944 081 246</p>
                        <p>amirsadik636@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
        <p className="pt-4 text-center text-xs md:text-sm pb-5">
            Copyright 2025 © <a href="#">Aplyzer</a>. All Right Reserved.
        </p>
    </footer>
    </>
  )
}

export default Footer

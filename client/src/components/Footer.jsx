import React from 'react'
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faFacebook, faInstagram, faLinkedin, faReddit, faTelegram, faTiktok, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <>
    <footer className='flex flex-col items-center justify-between
    mt-40 bg-black text-gray-200 p-20'>

        {/* Logo */}
        <img src='/logo-header.png' alt="Logo Image" className='flex-1 w-full md:w-1/3' />


        <div className='flex flex-row flex-wrap items-start justify-center md:justify-between gap-20 w-full mt-10'>

            {/* Links */}
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

            {/* Tools */}
            <div className='flex flex-col gap-2 text-left'>
                <Link to='/' className='hover:underline'>Job Application Tracker</Link>
                <Link to='/' className='hover:underline'>AI Resume Builder</Link>
                <Link to='/' className='hover:underline'>Resume Checker</Link>
                <Link to='/' className='hover:underline'>Cover Letter Generator</Link>
            </div>

            {/* Social */}
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
    
    </footer>

    <p className='text-center text-sm text-gray-700 bg-black pb-2'>
        Built by <a href="" className='underline hover:text-green-500'>Amir Sadik</a>
        &nbsp;•  &copy; 2025 Aplyzer •
    </p>
    </>
  )
}

export default Footer

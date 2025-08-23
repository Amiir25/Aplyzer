import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import { assets } from '../assets/assets';
import Hero from '../components/Hero';
import LookInside from '../components/LookInside';
import SmarterTools from '../components/SmarterTools';
import Testimonials from '../components/Testimonials';
import FAQs from '../components/FAQs';
import CTA from '../components/CTA';

const Home = () => {
    return (
        <div>
            {/* Background image for Navbar and Hero sections */}
            <div style={{ backgroundImage: `url(${assets.bgHero})` }}
            className='bg-cover bg-center bg-no-repeat'>
                <div className='bg-gray-50/30 h-screen'>
                    <Navbar/>
                    <Hero/>
                </div>
            </div>
            
            <SmarterTools/>
            <LookInside/>
            <Testimonials/>
            <FAQs/>
            <CTA/>
        </div>
    )
}

export default Home;
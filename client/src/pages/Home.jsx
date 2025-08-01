import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import Hero from '../components/Hero';
import LookInside from '../components/LookInside';
import SmarterTools from '../components/SmarterTools';
import Testimonials from '../components/Testimonials';
import FAQs from '../components/FAQs';
import CTA from '../components/CTA';

const Home = () => {
    return (
        <div>
            <Hero/>
            <SmarterTools/>
            <LookInside/>
            <Testimonials/>
            <FAQs/>
            <CTA/>
        </div>
    )
}

export default Home;
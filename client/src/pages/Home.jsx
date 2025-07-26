import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import Hero from '../components/Hero';
import LookInside from '../components/LookInside';
import SmarterTools from '../components/SmarterTools';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';
import FAQs from '../components/FAQs';

const Home = () => {
    return (
        <div>
            <Hero/>
            <SmarterTools/>
            <LookInside/>
            <Testimonials/>
            <CTA/>
            <FAQs/>
        </div>
    )
}

export default Home

/**
 * - Favorite jobs
 * - "Keep Your Job Search Organized"
 * - <a href="https://storyset.com/job">Job illustrations by Storyset</a>
 * 
 * - Links: AI Resume Builder | AI Resume Review | Job Application Tracker
 */
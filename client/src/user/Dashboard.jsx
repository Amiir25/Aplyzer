import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import UserNavbar from './UserNavbar';
import JobCard from './JobCard';

const Dashboard = () => {
    const { userId } = useParams();
    const [user, setUser] = useState({});

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/user/dashboard/${userId}`);
                setUser(response.data.user);
            } catch (error) {
                const errorMsg = error.response?.data?.message;
            }
        }
        fetchUserData();
    }, [userId]);

    return (
        <>
        {/* Navbar */}
        <UserNavbar user={ user }/>
        
        <div className='relative px-6 md:px-12 lg:px-24 xl:px-32 mt-10'>
            <h1>Hi { user.username }</h1>
            <p>You have 8 active job applications. Keep going!</p>

            {/* Quick Stats */}
            <div className='absolute top-0 right-2 w-fit px-4 py-2 shadow-xl border-t-6 border-[#02A9EB]'>
                <h1 className='text-2xl font-semibold mb-6'>Quick Stats</h1>
                <div className='grid grid-cols-2 gap-8 mb-4'>
                    <p>Application Sent</p>
                    <p>12</p>
                </div>
                <div className='grid grid-cols-2 gap-8 mb-4'>
                    <p>Interviews Scheduled</p>
                    <p>3</p>
                </div>
                <div className='grid grid-cols-2 gap-8 mb-4'>
                    <p>Rejected</p>
                    <p>4</p>
                </div>
                <div className='grid grid-cols-2 gap-8 mb-4'>
                    <p>Offers</p>
                    <p>1</p>
                </div>
            </div>

            {/* Jobs */}
            <JobCard/>
        </div>
        </>
    )
}

export default Dashboard

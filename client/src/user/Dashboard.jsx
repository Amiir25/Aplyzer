import React, { useEffect, useState } from 'react'
import { Route, Routes, useParams } from 'react-router-dom'
import axios from 'axios';
import UserNavbar from './UserNavbar';
import StatusSummery from './StatusSummery';
import StatusBreakdown from './StatusBreakdown';
import LastWeek from './LastWeek';
import GetReady from './GetReady';
import RecentApplications from './RecentApplications';
import QuickActions from './QuickActions';

const Dashboard = () => {
    const { userId } = useParams();
    const [userData, setUserData] = useState({});

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/user/dashboard/${userId}`);
                setUserData(response.data.user);
                console.log('Dashboard response', response.data.user);
            } catch (error) {
                const errorMsg = error.response?.data?.message;
            }
        }
        fetchUserData();
    }, [userId]);

    return (
        <>
        <div>
            <UserNavbar userData={userData}/>
            {/* {alert(JSON.stringify(userData))} */}

            
            <div className='px-6 md:px-12 lg:px-24 xl:px-32 mt-20 mb-40'>
                
                <h1 className='text-2xl md:text-3xl'>
                    Hi <span className='font-mono font-bold text-shadow-lg'>{ userData.username }</span>
                </h1>
                <p className='text-lg md:text-xl text-gray-600'>Here's a quick look at your job applications </p>
            </div>            

            <StatusSummery  userData={userData} />
            <LastWeek userData={userData} />
            <GetReady userData={userData} />
            <RecentApplications userData={userData} />
            <StatusBreakdown userData={userData} />
            <QuickActions userData={userData} />

        </div>
        </>
    )
}

export default Dashboard

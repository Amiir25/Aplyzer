import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import UserNavbar from '../components/UserNavbar';
import StatusSummery from '../components/StatusSummery';
import StatusBreakdown from '../components/StatusBreakdown';
import LastWeek from '../components/LastWeek';
import FavoriteJobs from '../components/FavoriteJobs';
import RecentApplications from '../components/RecentApplications';
import QuickActions from '../components/QuickActions';
import { AuthContext } from '../../context/AuthContext';

const Dashboard = () => {
    const navigate = useNavigate();
    const {user, logout} = useContext(AuthContext);

    const [jobs, setJobs] = useState([]);
    const [recentJobs, setRecentJobs] = useState([]);

    useEffect(() => {
        if (!user) {
            navigate('/auth/signin');
            return;
        }

        const fetchUserData = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/user/dashboard/${user.id}`);
                setJobs(response.data.jobs);
                setRecentJobs(response.data.recentJobs);
            } catch (error) {
                const errorMsg = error.response?.data?.message;
                console.log('Error while fetching user data in the dashboard:', errorMsg);
                logout();
                navigate('/auth/signin');
            }
        }
        fetchUserData();
    }, [ user, logout, navigate]);

    return (
        <>
            <div>
                <div className='px-6 md:px-12 lg:px-24 xl:px-32 mt-20 mb-40'>

                    <h1 className='text-2xl md:text-3xl'>
                        Hi <span className='font-mono font-bold text-shadow-lg'>{ user.username }</span>
                    </h1>
                    <p className='text-lg md:text-xl text-gray-600'>Here's a quick look at your job applications </p>
                </div>

                <StatusSummery jobs={jobs} />
                {/* <LastWeek jobs={jobs} /> */}
                <RecentApplications recentJobs={recentJobs} />
                <StatusBreakdown jobs={jobs} />
                <FavoriteJobs jobs={jobs} />
                <QuickActions jobs={jobs} />

            </div>
        </>
    )
}

export default Dashboard

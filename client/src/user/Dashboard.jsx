import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import UserNavbar from './UserNavbar';
import JobCard from './JobCard';
import Chart from './Chart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCancel, faClockFour, faClockRotateLeft, faFileLines, faUserCheck, faUserClock, faX, faXmarkCircle } from '@fortawesome/free-solid-svg-icons';

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
        
        <div className='px-6 md:px-12 lg:px-24 xl:px-32 mt-10'>
            <h1 className='text-2xl md:text-3xl'>
                Hi <span className='font-mono font-bold'>{ user.username }</span>
            </h1>
            <p className='text-lg md:text-xl text-gray-600'>Here's a quick look at your job applications </p>

            {/* Quick Stats */}
            <div className='mt-20'>
                <h1 className='text-2xl md:text-4xl font-semibold mb-8'>Quick Stats</h1>
                
                {/* Cards */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>

                    {/* Total */}
                    <div className='w-fit px-4 py-2 shadow-xl border-t-6 border-[#02EBEB]'>
                        <FontAwesomeIcon icon={ faFileLines }
                        className='text-center text-7xl text-[#02EBEB] w-full my-4' />
                        <div>
                            <h1 className='text-2xl font-bold'>Total Applications</h1>
                            <p className='text-gray-700 text-sm'>All applications you've submitted so far.</p>
                        </div>
                        <p className='mt-2 text-xl font-black bg-[#02EBEB]/20 w-fit px-2 text-[#02EBEB]'>12</p>
                    </div>
                    
                    {/* Interviwed */}
                    <div className='w-fit px-4 py-2 shadow-xl border-t-6 border-[#5FEB02]'>
                        <FontAwesomeIcon icon={ faUserCheck }
                        className='text-center text-7xl text-[#5FEB02] w-full my-4' />
                        <div>
                            <h1 className='text-2xl font-bold'>Interviews</h1>
                            <p className='text-gray-700 text-sm'>Applications that led to interviews.</p>
                        </div>
                        <p className='mt-2 text-xl font-black bg-[#5FEB02]/20 w-fit px-2 text-[#5FEB02]'>3</p>
                    </div>

                    {/* Rejected */}
                    <div className='w-fit px-4 py-2 shadow-xl border-t-6 border-[#EB0202]'>
                        <FontAwesomeIcon icon={ faXmarkCircle }
                        className='text-center text-7xl text-[#EB0202] w-full my-4' />
                        <div>
                            <h1 className='text-2xl font-bold'>Rejected</h1>
                            <p className='text-gray-700 text-sm'>Applications that were declined or marked unsuccessful.</p>
                        </div>
                        <p className='mt-2 text-xl font-black bg-[#EB0202]/20 w-fit px-2 text-[#EB0202]'>4</p>
                    </div>

                    {/* Pending */}
                    <div className='w-fit px-4 py-2 shadow-xl border-t-6 border-[#EBE702]'>
                        <FontAwesomeIcon icon={ faClockFour }
                        className='text-center text-7xl text-[#EBE702] w-full my-4' />
                        <div>
                            <h1 className='text-2xl font-bold'>Pending</h1>
                            <p className='text-gray-700 text-sm'>Applications with no response yet or still in progress.</p>
                        </div>
                        <p className='mt-2 text-xl font-black bg-[#EBE702]/20 w-fit px-2 text-[#EBE702]'>5</p>
                    </div>

                </div>
            </div>

            {/* Chart */}
            <Chart/>
        </div>
        </>
    )
}

export default Dashboard

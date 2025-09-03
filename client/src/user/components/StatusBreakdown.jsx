import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const StatusBreakdown = ({ jobs }) => {

    const total = jobs;
    const interviewed = jobs.filter(job => job.status === 'Interviewed');
    const rejected = jobs.filter(job => job.status === 'Rejected');
    const waiting = jobs.filter(job => job.status === 'Waiting' || job.status === 'Applied');

    const data = [
        { name: 'Appied', value: total.length },
        { name: 'Interviwed', value: interviewed.length },
        { name: 'Rejected', value: rejected.length },
        { name: 'Waiting', value: waiting.length },
    ];

    // const COLORS = ['#0088FE', '#00C49F', '#FF8042', '#FFBB28'];
    const COLORS = ['#87CEEB', '#4caf50', '#F44336', '#FFBF00'];

    return (
        <>
        <div className="px-6 md:px-12 lg:px-24 xl:px-32 my-20 w-full h-160 mt-20 ">

            <h1 className='text-2xl md:text-4xl font-semibold mb-10'>Status Breakdown</h1>

            <ResponsiveContainer className='md:text-xl'>
                <PieChart>
                <Pie
                    data={data}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={'240'}
                    fill="#8884d8"
                    label
                >
                    {
                        data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))
                    }
                </Pie>
                <Tooltip />
                <Legend verticalAlign="bottom" />
                </PieChart>
            </ResponsiveContainer>
        </div>
        </>
    )
}

export default StatusBreakdown;

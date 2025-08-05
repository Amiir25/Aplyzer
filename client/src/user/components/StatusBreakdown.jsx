import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const data = [
  { name: 'Appied', value: 12 },
  { name: 'Interviwed', value: 3 },
  { name: 'Rejected', value: 4 },
  { name: 'Pending', value: 5 },
];

const COLORS = ['#0088FE', '#00C49F', '#FF8042', '#FFBB28'];

const StatusBreakdown = () => {
    return (
        <>
        <div className="px-6 md:px-12 lg:px-24 xl:px-32 my-20 w-full h-120 mt-20">

            <h1 className='text-2xl md:text-4xl font-semibold mb-10'>Status Breakdown</h1>

            <ResponsiveContainer>
                <PieChart>
                <Pie
                    data={data}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={'180'}
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

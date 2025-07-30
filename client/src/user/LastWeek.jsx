import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { month: 'Jan', sales: 400 },
  { month: 'Feb', sales: 300 },
  { month: 'Mar', sales: 500 },
  { month: 'Apr', sales: 700 },
  { month: 'May', sales: 600 },
];

const LastWeek = () => {
    return (
        <div className="px-6 md:px-12 lg:px-24 xl:px-32 w-full h-120 mx-auto my-40">
            
            <h1 className='text-2xl md:text-4xl font-semibold mb-10'>Last Week</h1>
            
            <ResponsiveContainer>
                <LineChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                    type="monotone"
                    dataKey="sales"
                    stroke="#007bff"
                    strokeWidth={3}
                    activeDot={{ r: 8 }}
                />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}

export default LastWeek;
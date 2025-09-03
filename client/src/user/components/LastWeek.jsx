import React, { useState, useEffect } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

// Helper: Get last week's Monday and Sunday
function getLastWeekRange() {
  const today = new Date();
  const dayOfWeek = today.getDay();
  
  // Go to last week's Monday
  const lastMonday = new Date(today);
  lastMonday.setDate(today.getDate() - dayOfWeek - 6);
  
  // Go to last week's Sunday
  const lastSunday = new Date(lastMonday);
  lastSunday.setDate(lastMonday.getDate() + 6);
  
  return { lastMonday, lastSunday };
}

// Format date like "Aug 11 2025"
function formatDate(date) {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul",
                  "Aug", "Sep", "Oct", "Nov", "Dec"];
  return `${months[date.getMonth()]} ${date.getDate()} ${date.getFullYear()}`;
}

export default function LastWeekLineChart() {
  const [dateRange, setDateRange] = useState(getLastWeekRange());
  const [data, setData] = useState([]);

  useEffect(() => {
    // Generate mock data for the last week
    const { lastMonday } = dateRange;
    const mockData = Array.from({ length: 7 }, (_, i) => {
      const day = new Date(lastMonday);
      day.setDate(lastMonday.getDate() + i);
      return {
        date: day.toLocaleDateString("en-US", { month: "short", day: "numeric" }),
        value: Math.floor(Math.random() * 100) // random for demo
      };
    });
    setData(mockData);
  }, [dateRange]);

  useEffect(() => {
    // Check every day if it's Monday; if yes, update date range
    const checkForMonday = setInterval(() => {
      if (new Date().getDay() === 1) {
        setDateRange(getLastWeekRange());
      }
    }, 1000 * 60 * 60 * 24); // check daily

    return () => clearInterval(checkForMonday);
  }, []);

  return (
    <div style={{ width: "100%", height: 400 }}>
      <h2>
        Last Week ({formatDate(dateRange.lastMonday)} - {formatDate(dateRange.lastSunday)})
      </h2>
      <ResponsiveContainer>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="value" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

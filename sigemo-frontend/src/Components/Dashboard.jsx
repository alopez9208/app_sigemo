import React from 'react';
import Sidebar from './Sidebar';

const Dashboard = ({ children }) => {
    return (
        <div className="flex bg-[#1b1c2f] h-screen">
            <Sidebar />
            <div className="w-full h-full">
                {children}
            </div>
        </div>
    );
};

export default Dashboard;

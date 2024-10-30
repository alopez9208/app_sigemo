import React from 'react';
import Sidebar from './Sidebar';

const Dashboard = ({ children, nombreUsuario, emailUsuario }) => {
    return (
        <div className="flex bg-[#1b1c2f] h-screen">
            <
                Sidebar nombreUsuario={nombreUsuario}
                emailUsuario={emailUsuario}
            />
            <div className="w-full h-full">
                {children}
            </div>
        </div>
    );
};

export default Dashboard;

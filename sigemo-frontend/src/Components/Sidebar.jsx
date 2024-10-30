import React from 'react';
import { useLocation } from 'react-router-dom'; 
import logo from '../assets/logo-blanco2.png'; 
import { HomeIcon, UserCircleIcon, Cog6ToothIcon, BuildingOffice2Icon } from "@heroicons/react/24/solid";

const Sidebar = () => {
    const location = useLocation(); 

    return (
        <div className="w-72 bg-[#1B1C2F] text-white min-h-screen p-8 h-full">
            <div className="flex items-center justify-between mb-4">
                <img src={logo} alt="Logo" className="h-16 w-auto " />
                <h1 className="text-2xl font-semibold flex-grow ">Sigemo</h1>
            </div>
            <hr className="border-t border-gray-500" />

            <h2 className="text-lg mt-16">MENÚ</h2>
            <ul className="mt-8">
                <li className={`mb-5 flex items-center ${location.pathname === '/Dashboard' ? 'bg-[#14dd3c] bg-opacity-40' : ''} hover:bg-[#14dd3c] hover:bg-opacity-40 transition-colors duration-300 rounded-lg p-2`}>
                    <a href="/Dashboard" className="flex items-center w-full">
                        <div className="flex items-center justify-center">
                            <div className="bg-white bg-opacity-10 rounded-lg p-2">
                                <HomeIcon className="h-6 w-6 text-gray-400" />
                            </div>
                        </div>
                        <span className="text-xl ml-4 mr-48">Inicio</span>
                    </a>
                </li>
                <li className={`mb-72 flex items-center ${location.pathname === '/empresas' ? 'bg-[#14dd3c] bg-opacity-40' : ''} hover:bg-[#14dd3c] hover:bg-opacity-40 transition-colors duration-300 rounded-lg p-2`}>
                    <a href="/empresas" className="flex items-center w-full">
                        <div className="flex items-center justify-center">
                            <div className="bg-white bg-opacity-10 rounded-lg p-2">
                                <BuildingOffice2Icon className="h-6 w-6 text-gray-400" />
                            </div>
                        </div>
                        <span className="text-xl ml-4">Empresas</span>
                    </a>
                </li>
                <li className={`mb-5 flex items-center ${location.pathname === '/configuracion' ? 'bg-[#14dd3c] bg-opacity-40' : ''} hover:bg-[#14dd3c] hover:bg-opacity-40 transition-colors duration-300 rounded-lg p-2`}>
                    <a href="/configuracion" className="flex items-center w-full">
                        <div className="flex items-center justify-center">
                            <div className="bg-white bg-opacity-10 rounded-lg p-2">
                                <Cog6ToothIcon className="h-6 w-6 text-gray-400" />
                            </div>
                        </div>
                        <span className="text-xl ml-4">Configuración</span>
                    </a>
                </li>
                <li className="flex items-center justify-between">
                    <h1 className="text-2xl flex-grow font-light text-lg">CUENTA DE USUARIO</h1>
                </li>
                <li className="mt-4 flex items-center">
                    <UserCircleIcon className="mr-2 h-14 w-14" />
                    <div className="flex flex-col">
                        <span className="text-lg font-semibold">Andrés</span>
                        <span className="text-sm text-gray-500">admin@gmail.com</span>
                    </div>
                    <span className="ml-auto text-lg cursor-pointer">⋮</span>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
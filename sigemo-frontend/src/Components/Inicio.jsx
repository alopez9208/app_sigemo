import React from 'react';
import logo from '../assets/img.png';

const Inicio = () => {
    return (
        <div className="flex-grow p-2 h-full">
            <div className="bg-[#fffafa] rounded-lg shadow-lg p-6 h-full flex">
                {/* Imagen a la izquierda */}
                <div className="w-1/2 flex justify-center items-center">
                    <img src={logo} alt="Imagen" className="w-full h-auto max-w-2xl" />
                </div>

                {/* Texto a la derecha */}
                <div className="w-1/2 flex flex-col justify-center items-start pl-6">
                    <h1 className="text-5xl font-bold mb-2">BIENVENIDO</h1>
                    <h1 className="text-5xl font-bold mb-8">A SIGEMO</h1>

                    <p className="text-xl mb-10">Sistema Integral de Gestión y Monitoreo</p>
                    
                    <div className="mb-4"></div>

                    {/* Cuadro de información */}
                    <div className="bg-white rounded-lg shadow-md p-6 w-3/4"> 
                        <h2 className="text-xl font-semibold">Asignación de turnos de vigilancia</h2>
                        <p className="mt-2">
                            Bienvenido a nuestra empresa de vigilancia, donde nos dedicamos a proporcionar soluciones de seguridad de alta calidad.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Inicio;

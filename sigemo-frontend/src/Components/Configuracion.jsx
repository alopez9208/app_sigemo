import React, { useState, useEffect } from 'react';

const Configuracion = () => {
    const [empresas, setEmpresas] = useState([]);
    const [sedes, setSedes] = useState([]);

    useEffect(() => {
        // Obtener las empresas desde la API
        fetch('http://localhost:5003/api/empresas')
            .then(response => response.json())
            .then(data => setEmpresas(data))
            .catch(error => console.error('Error al obtener empresas:', error));

        // Obtener las sedes desde la API
        fetch('http://localhost:5003/api/sedes')
            .then(response => response.json())
            .then(data => setSedes(data))
            .catch(error => console.error('Error al obtener sedes:', error));
    }, []);

    return (
        <div className="flex-grow p-2 h-full">
            <div className="bg-[#fffafa] rounded-lg shadow-lg p-4 h-full">
                <h1 className="text-2xl font-semibold">Configuración</h1>

                {/* Sección Empresas */}
                <div className="mt-6">
                    <h2 className="text-xl font-semibold mb-4">Empresas</h2>
                    <div className="mb-4">
                        <button className="bg-[#1B1C2F] text-white py-2 px-4 rounded-lg hover:bg-[#14dd3c] hover:bg-opacity-80 transition-colors duration-300 mr-2">
                            Agregar Empresa
                        </button>
                        <button className="bg-[#1B1C2F] text-white py-2 px-4 rounded-lg hover:bg-[#14dd3c] hover:bg-opacity-80 transition-colors duration-300">
                            Actualizar
                        </button>
                    </div>
                    {/* Tabla de Empresas */}
                    <table className="min-w-full border-collapse border border-gray-300">
                        <thead>
                            <tr>
                                <th className="border border-gray-300 p-2">Nombre</th>
                                <th className="border border-gray-300 p-2 w-1/6 whitespace-nowrap">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {empresas.map((empresa) => (
                                <tr key={empresa.pkid}>
                                    <td className="border border-gray-300 p-2">{empresa.nombre}</td>
                                    <td className="border border-gray-300 p-2 whitespace-nowrap flex justify-center items-center">
                                        <button className="bg-[#1B1C2F] text-white py-2 px-4 rounded-lg hover:bg-[#14dd3c] hover:bg-opacity-80 transition-colors duration-300">Editar</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                </div>

                {/* Sección Sedes */}
                <div className="mt-4">
                    <h2 className="text-xl font-semibold mb-2">Sedes</h2>
                    <div className="flex mb-4">
                        <div className="w-auto pr-4">
                            <label className="block text-gray-700">Selecciona una Empresa:</label>
                            <select className="mt-2 p-2 border rounded w-full">
                                <option value="">-- Selecciona una empresa --</option>
                                {empresas.length > 0 ? (
                                    empresas.map((empresa, index) => (
                                        <option key={index} value={empresa.nombre}>
                                            {empresa.nombre}
                                        </option>
                                    ))
                                ) : (
                                    <option value="">No hay empresas disponibles</option>
                                )}
                            </select>
                        </div>
                    </div>
                    <div className="mb-4">
                        <button className="bg-[#1B1C2F] text-white py-2 px-4 rounded-lg hover:bg-[#14dd3c] hover:bg-opacity-80 transition-colors duration-300 mr-2">
                            Agregar Sede
                        </button>
                        <button className="bg-[#1B1C2F] text-white py-2 px-4 rounded-lg hover:bg-[#14dd3c] hover:bg-opacity-80 transition-colors duration-300">
                            Actualizar
                        </button>
                    </div>
                    {/* Tabla de Sedes */}
                    <table className="min-w-full border-collapse border border-gray-300">
                        <thead>
                            <tr>
                                <th className="border border-gray-300 p-2">Nombre</th>
                                <th className="border border-gray-300 p-2 w-1/6 whitespace-nowrap">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {sedes.map((sede) => (
                                <tr key={sede.pkid}>
                                    <td className="border border-gray-300 p-2">{sede.nombre}</td>
                                    <td className="border border-gray-300 p-2 whitespace-nowrap flex justify-center items-center">
                                        <button className="bg-[#1B1C2F] text-white py-2 px-4 rounded-lg hover:bg-[#14dd3c] hover:bg-opacity-80 transition-colors duration-300">Editar</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Configuracion;

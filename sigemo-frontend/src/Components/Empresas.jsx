import React, { useState } from 'react';

const Empresas = ({ empresas, sedes, supervisores, vigilantes, zonas }) => {
    const [activeTab, setActiveTab] = useState('zonas');

    const handleRefresh = () => {
        window.location.reload();
    };

    return (
        <div className="flex-grow p-2 h-full">
            <div className="bg-[#fffafa] rounded-lg shadow-lg p-6 h-full flex flex-col">
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

                    <div className="w-auto pl-4">
                        <label className="block text-gray-700">Selecciona una Sede:</label>
                        <select className="mt-2 p-2 border rounded w-full">
                            <option value="">-- Selecciona una sede --</option>
                            {sedes.length > 0 ? (
                                sedes.map((sede, index) => (
                                    <option key={index} value={sede.nombre}>
                                        {sede.nombre}
                                    </option>
                                ))
                            ) : (
                                <option value="">No hay sedes disponibles</option>
                            )}
                        </select>
                    </div>
                </div>

                {/* Pestañas */}
                <div className="mt-6 flex-grow">
                    <div className="flex space-x-4">
                        <button
                            onClick={() => setActiveTab('zonas')}
                            className={`py-2 px-4 rounded-lg ${activeTab === 'zonas' ? 'bg-[#1B1C2F] text-white' : 'bg-gray-200 text-gray-700'}`}
                        >
                            Zonas
                        </button>
                        <button
                            onClick={() => setActiveTab('supervisores')}
                            className={`py-2 px-4 rounded-lg ${activeTab === 'supervisores' ? 'bg-[#1B1C2F] text-white' : 'bg-gray-200 text-gray-700'}`}
                        >
                            Supervisores
                        </button>
                        <button
                            onClick={() => setActiveTab('vigilantes')}
                            className={`py-2 px-4 rounded-lg ${activeTab === 'vigilantes' ? 'bg-[#1B1C2F] text-white' : 'bg-gray-200 text-gray-700'}`}
                        >
                            Vigilantes
                        </button>
                        <button
                            onClick={() => setActiveTab('asignar')}
                            className={`py-2 px-4 rounded-lg ${activeTab === 'asignar' ? 'bg-[#1B1C2F] text-white' : 'bg-gray-200 text-gray-700'}`}
                        >
                            Asignar
                        </button>
                        <button
                            onClick={() => setActiveTab('reporte')}
                            className={`py-2 px-4 rounded-lg ${activeTab === 'reporte' ? 'bg-[#1B1C2F] text-white' : 'bg-gray-200 text-gray-700'}`}
                        >
                            Reportes
                        </button>

                    </div>

                    {/* Tablas según la pestaña activa */}
                    {activeTab === 'zonas' ? (
                        <div className="mt-4 flex-grow">
                            <h2 className="text-xl font-semibold">Zonas</h2>
                            <table className="min-w-full border-collapse border border-gray-300 mt-4">
                                <thead>
                                    <tr>
                                        <th className="border border-gray-300 p-2">ID</th>
                                        <th className="border border-gray-300 p-2">Nombre</th>
                                        <th className="border border-gray-300 p-2">Nomenclatura</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {zonas.map((zona) => (
                                        <tr key={zona.pkid}>
                                            <td className="border border-gray-300 p-2">{zona.pkid}</td>
                                            <td className="border border-gray-300 p-2">{zona.nombre}</td>
                                            <td className="border border-gray-300 p-2">{zona.nomenclatura}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    ) : activeTab === 'supervisores' ? (
                        <div className="mt-4 flex-grow">
                            <h2 className="text-xl font-semibold">Supervisores</h2>
                            <table className="min-w-full border-collapse border border-gray-300 mt-4">
                                <thead>
                                    <tr>
                                        <th className="border border-gray-300 p-2">ID</th>
                                        <th className="border border-gray-300 p-2">Nombre</th>
                                        <th className="border border-gray-300 p-2">Apellido</th>
                                        <th className="border border-gray-300 p-2">Email</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {supervisores.map((supervisor) => (
                                        <tr key={supervisor.pkid}>
                                            <td className="border border-gray-300 p-2">{supervisor.pkid}</td>
                                            <td className="border border-gray-300 p-2">{supervisor.nombre}</td>
                                            <td className="border border-gray-300 p-2">{supervisor.apellido}</td>
                                            <td className="border border-gray-300 p-2">{supervisor.email}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    ) : activeTab === 'vigilantes' ? (
                        <div className="mt-4 flex-grow">
                            <h2 className="text-xl font-semibold">Vigilantes</h2>
                            <table className="min-w-full border-collapse border border-gray-300 mt-4">
                                <thead>
                                    <tr>
                                        <th className="border border-gray-300 p-2">ID</th>
                                        <th className="border border-gray-300 p-2">Nombre</th>
                                        <th className="border border-gray-300 p-2">Apellido</th>
                                        <th className="border border-gray-300 p-2">Email</th>
                                    </tr>
                                </thead>
                                <tbody className="overflow-y-auto max-h-60">
                                    {vigilantes.map((vigilante) => (
                                        <tr key={vigilante.pkid}>
                                            <td className="border border-gray-300 p-2">{vigilante.pkid}</td>
                                            <td className="border border-gray-300 p-2">{vigilante.nombre}</td>
                                            <td className="border border-gray-300 p-2">{vigilante.apellido}</td>
                                            <td className="border border-gray-300 p-2">{vigilante.email}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    ) :
                        activeTab === 'asignar' ? (
                            <div className="mt-4 flex-grow">
                                <h2 className="text-xl font-semibold">Asignación Vigilantes</h2>
                                <table className="min-w-full border-collapse border border-gray-300 mt-4">
                                    <thead>
                                        <tr>
                                            <th className="border border-gray-300 p-2  w-1"></th>
                                            <th className="border border-gray-300 p-2">Lunes</th>
                                            <th className="border border-gray-300 p-2">Martes</th>
                                            <th className="border border-gray-300 p-2">Miércoles</th>
                                            <th className="border border-gray-300 p-2">Jueves</th>
                                            <th className="border border-gray-300 p-2">Viernes</th>
                                            <th className="border border-gray-300 p-2">Sábado</th>
                                            <th className="border border-gray-300 p-2">Domingo</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="border border-gray-300 p-6">Jornada Diurna</td>
                                            <td className="border border-gray-300 p-2">
                                                {/* Cuadrícula con nombre a la izquierda y zona a la derecha */}
                                                <div className="grid grid-cols-2 gap-2">
                                                    <div>{vigilantes.find(v => v.pkid === 8)?.nombre}</div>
                                                    <div>{zonas.find(z => z.pkid === 1)?.nomenclatura}</div>
                                                </div>
                                                <br />
                                                <div className="grid grid-cols-2 gap-2">
                                                    <div>{vigilantes.find(v => v.pkid === 10)?.nombre}</div>
                                                    <div>{zonas.find(z => z.pkid === 3)?.nomenclatura}</div>
                                                </div>
                                            </td>
                                            <td className="border border-gray-300 p-2">
                                                <div className="grid grid-cols-2 gap-2">
                                                    <div>{vigilantes.find(v => v.pkid === 8)?.nombre}</div>
                                                    <div>{zonas.find(z => z.pkid === 1)?.nomenclatura}</div>
                                                </div>
                                                <br />
                                                <div className="grid grid-cols-2 gap-2">
                                                    <div>{vigilantes.find(v => v.pkid === 10)?.nombre}</div>
                                                    <div>{zonas.find(z => z.pkid === 3)?.nomenclatura}</div>
                                                </div>
                                            </td>
                                            <td className="border border-gray-300 p-2">
                                                <div className="grid grid-cols-2 gap-2">
                                                    <div>{vigilantes.find(v => v.pkid === 8)?.nombre}</div>
                                                    <div>{zonas.find(z => z.pkid === 1)?.nomenclatura}</div>
                                                </div>
                                                <br />
                                                <div className="grid grid-cols-2 gap-2">
                                                    <div>{vigilantes.find(v => v.pkid === 10)?.nombre}</div>
                                                    <div>{zonas.find(z => z.pkid === 3)?.nomenclatura}</div>
                                                </div>
                                            </td>
                                            <td className="border border-gray-300 p-2">
                                                <div className="grid grid-cols-2 gap-2">
                                                    <div>{vigilantes.find(v => v.pkid === 8)?.nombre}</div>
                                                    <div>{zonas.find(z => z.pkid === 1)?.nomenclatura}</div>
                                                </div>
                                                <br />
                                                <div className="grid grid-cols-2 gap-2">
                                                    <div>{vigilantes.find(v => v.pkid === 10)?.nombre}</div>
                                                    <div>{zonas.find(z => z.pkid === 3)?.nomenclatura}</div>
                                                </div>
                                            </td>
                                            <td className="border border-gray-300 p-2">
                                                <div className="grid grid-cols-2 gap-2">
                                                    <div>{vigilantes.find(v => v.pkid === 8)?.nombre}</div>
                                                    <div>{zonas.find(z => z.pkid === 1)?.nomenclatura}</div>
                                                </div>
                                                <br />
                                                <div className="grid grid-cols-2 gap-2">
                                                    <div>{vigilantes.find(v => v.pkid === 10)?.nombre}</div>
                                                    <div>{zonas.find(z => z.pkid === 3)?.nomenclatura}</div>
                                                </div>
                                            </td>
                                            <td className="border border-gray-300 p-2">
                                                <div className="grid grid-cols-2 gap-2">
                                                    <div>{vigilantes.find(v => v.pkid === 8)?.nombre}</div>
                                                    <div>{zonas.find(z => z.pkid === 1)?.nomenclatura}</div>
                                                </div>
                                                <br />
                                                <div className="grid grid-cols-2 gap-2">
                                                    <div>{vigilantes.find(v => v.pkid === 10)?.nombre}</div>
                                                    <div>{zonas.find(z => z.pkid === 3)?.nomenclatura}</div>
                                                </div>
                                            </td>
                                            <td className="border border-gray-300 p-2">
                                                <div className="grid grid-cols-2 gap-2">
                                                    <div>{vigilantes.find(v => v.pkid === 3)?.nombre}</div>
                                                    <div>{zonas.find(z => z.pkid === 1)?.nomenclatura}</div>
                                                </div>
                                                <br />
                                                <div className="grid grid-cols-2 gap-2">
                                                    <div>{vigilantes.find(v => v.pkid === 5)?.nombre}</div>
                                                    <div>{zonas.find(z => z.pkid === 3)?.nomenclatura}</div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-300 p-6">Jornada Diurna</td>
                                            <td className="border border-gray-300 p-2">
                                                {/* Cuadrícula con nombre a la izquierda y zona a la derecha */}
                                                <div className="grid grid-cols-2 gap-2">
                                                    <div>{vigilantes.find(v => v.pkid === 13)?.nombre}</div>
                                                    <div>{zonas.find(z => z.pkid === 1)?.nomenclatura}</div>
                                                </div>
                                                <br />
                                                <div className="grid grid-cols-2 gap-2">
                                                    <div>{vigilantes.find(v => v.pkid === 12)?.nombre}</div>
                                                    <div>{zonas.find(z => z.pkid === 3)?.nomenclatura}</div>
                                                </div>
                                            </td>
                                            <td className="border border-gray-300 p-2">
                                                <div className="grid grid-cols-2 gap-2">
                                                    <div>{vigilantes.find(v => v.pkid === 12)?.nombre}</div>
                                                    <div>{zonas.find(z => z.pkid === 1)?.nomenclatura}</div>
                                                </div>
                                                <br />
                                                <div className="grid grid-cols-2 gap-2">
                                                    <div>{vigilantes.find(v => v.pkid === 13)?.nombre}</div>
                                                    <div>{zonas.find(z => z.pkid === 3)?.nomenclatura}</div>
                                                </div>
                                            </td>
                                            <td className="border border-gray-300 p-2">
                                                <div className="grid grid-cols-2 gap-2">
                                                    <div>{vigilantes.find(v => v.pkid === 12)?.nombre}</div>
                                                    <div>{zonas.find(z => z.pkid === 1)?.nomenclatura}</div>
                                                </div>
                                                <br />
                                                <div className="grid grid-cols-2 gap-2">
                                                    <div>{vigilantes.find(v => v.pkid === 13)?.nombre}</div>
                                                    <div>{zonas.find(z => z.pkid === 3)?.nomenclatura}</div>
                                                </div>
                                            </td>
                                            <td className="border border-gray-300 p-2">
                                                <div className="grid grid-cols-2 gap-2">
                                                    <div>{vigilantes.find(v => v.pkid === 12)?.nombre}</div>
                                                    <div>{zonas.find(z => z.pkid === 1)?.nomenclatura}</div>
                                                </div>
                                                <br />
                                                <div className="grid grid-cols-2 gap-2">
                                                    <div>{vigilantes.find(v => v.pkid === 13)?.nombre}</div>
                                                    <div>{zonas.find(z => z.pkid === 3)?.nomenclatura}</div>
                                                </div>
                                            </td>
                                            <td className="border border-gray-300 p-2">
                                                <div className="grid grid-cols-2 gap-2">
                                                    <div>{vigilantes.find(v => v.pkid === 12)?.nombre}</div>
                                                    <div>{zonas.find(z => z.pkid === 1)?.nomenclatura}</div>
                                                </div>
                                                <br />
                                                <div className="grid grid-cols-2 gap-2">
                                                    <div>{vigilantes.find(v => v.pkid === 13)?.nombre}</div>
                                                    <div>{zonas.find(z => z.pkid === 3)?.nomenclatura}</div>
                                                </div>
                                            </td>
                                            <td className="border border-gray-300 p-2">
                                                <div className="grid grid-cols-2 gap-2">
                                                    <div>{vigilantes.find(v => v.pkid === 13)?.nombre}</div>
                                                    <div>{zonas.find(z => z.pkid === 1)?.nomenclatura}</div>
                                                </div>
                                                <br />
                                                <div className="grid grid-cols-2 gap-2">
                                                    <div>{vigilantes.find(v => v.pkid === 12)?.nombre}</div>
                                                    <div>{zonas.find(z => z.pkid === 3)?.nomenclatura}</div>
                                                </div>
                                            </td>
                                            <td className="border border-gray-300 p-2">
                                                <div className="grid grid-cols-2 gap-2">
                                                    <div>{vigilantes.find(v => v.pkid === 5)?.nombre}</div>
                                                    <div>{zonas.find(z => z.pkid === 1)?.nomenclatura}</div>
                                                </div>
                                                <br />
                                                <div className="grid grid-cols-2 gap-2">
                                                    <div>{vigilantes.find(v => v.pkid === 3)?.nombre}</div>
                                                    <div>{zonas.find(z => z.pkid === 3)?.nomenclatura}</div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                        ) : (
                            <div className="mt-4 flex-grow">
                                <h2 className="text-xl font-semibold">Reporte</h2>
                                <textarea
                                    className="w-full h-40 mt-4 p-2 border border-gray-300 rounded"
                                    placeholder="Escribe aquí tu reporte..."
                                ></textarea>
                                <button className="bg-[#1B1C2F] text-white py-2 px-4 rounded-lg hover:bg-[#14dd3c] hover:bg-opacity-80 transition-colors duration-300">
                                    Enviar reporte
                                </button>
                            </div>
                        )}
                </div>

                {/* Botones en la parte inferior */}
                <div className="mt-6 flex justify-end space-x-4">
                    <button
                        onClick={handleRefresh}
                        className="bg-[#1B1C2F] text-white py-2 px-4 rounded-lg hover:bg-[#14dd3c] hover:bg-opacity-80 transition-colors duration-300"
                    >
                        Actualizar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Empresas;

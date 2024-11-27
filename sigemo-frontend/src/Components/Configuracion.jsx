import React, { useState, useEffect } from 'react';

const Configuracion = ({ empresas = [], sedes = [], usuarios = [], zonas = [] }) => {
    const [activeSection, setActiveSection] = useState('empresas');
    const [selectedEmpresa, setSelectedEmpresa] = useState('');
    const [selectedSede, setSelectedSede] = useState('');
    const [selectedUsuario, setSelectedUsuario] = useState('');
    const [selectedZona, setSelectedZona] = useState('');
    const [selectedDia, setSelectedDia] = useState('');
    const [selectedJornada, setSelectedJornada] = useState('');
    const [assignType, setAssignType] = useState('');

    const filteredSedes = (selectedEmpresa && sedes) ? sedes.filter((sede) => sede.empresa === selectedEmpresa) : [];

    const filteredUsuarios = (selectedEmpresa && selectedSede && usuarios)
        ? usuarios.filter((usuario) => {
            console.log(`Filtrando usuario: Empresa: ${usuario.empresa}, Sede: ${usuario.sede}, Rol: ${usuario.rol}`);
            return usuario.empresa === selectedEmpresa &&
                usuario.sede === selectedSede &&
                usuario.rol === 'Vigilante';
        })
        : [];


    // Filtrar las zonas según la empresa y sede seleccionadas
    const filteredZonas = (selectedEmpresa && selectedSede && zonas)
        ? zonas.filter((zona) => zona.empresa === selectedEmpresa && zona.sede === selectedSede)
        : [];


    console.log("filteredUsuarios:", filteredUsuarios);
    console.log("Usuarios disponibles:", usuarios);
    console.log("Empresa seleccionada:", selectedEmpresa);
    console.log("Sede seleccionada:", selectedSede);


    return (
        <div className="flex-grow p-2 h-full">
            <div className="bg-[#fffafa] rounded-lg shadow-lg p-4 h-full">
                <h1 className="text-2xl font-semibold">Configuración</h1>

                {/* Botones para cambiar de sección */}
                <div className="mt-6 flex space-x-4">
                    <button
                        className={`py-2 px-4 rounded-lg ${activeSection === 'empresas' ? 'bg-[#1B1C2F] text-white' : 'bg-gray-200 text-gray-700'}`}
                        onClick={() => setActiveSection('empresas')}
                    >
                        Empresas
                    </button>
                    <button
                        className={`py-2 px-4 rounded-lg ${activeSection === 'sedes' ? 'bg-[#1B1C2F] text-white' : 'bg-gray-200 text-gray-700'}`}
                        onClick={() => setActiveSection('sedes')}
                    >
                        Sedes
                    </button>
                    <button
                        className={`py-2 px-4 rounded-lg ${activeSection === 'Modulo Asignar' ? 'bg-[#1B1C2F] text-white' : 'bg-gray-200 text-gray-700'}`}
                        onClick={() => setActiveSection('Modulo Asignar')}
                    >
                        Modulo Asignar
                    </button>
                </div>
                {/* Sección Empresas */}
                {activeSection === 'empresas' && (
                    <div className="mt-6">
                        <div className="flex justify-end mb-4"> {/* Flex para alinear al derecho */}
                            <button
                                className="bg-[#1B1C2F] text-white py-2 px-4 rounded-lg hover:bg-[#14dd3c] hover:bg-opacity-80 transition-colors duration-300"
                            >
                                Agregar empresa
                            </button>
                        </div>
                        <h2 className="text-xl font-semibold mb-4">Empresas</h2>
                        <div className="mb-4">
                        </div>
                        {/* Tabla de Empresas */}
                        <table className="min-w-full border-collapse border border-gray-300">
                            <thead>
                                <tr>
                                    <th className="border border-gray-300 p-2">Nombre</th>
                                </tr>
                            </thead>
                            <tbody>
                                {empresas.map((empresa) => (
                                    <tr key={empresa.pkid}>
                                        <td className="border border-gray-300 p-2">{empresa.nombre}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}

                {/* Sección Sedes */}
                {activeSection === 'sedes' && (
                    <div className="mt-4">
                        <div className="flex mb-4">
                            <div className="w-auto pr-4">
                                <label className="block text-gray-700">Selecciona una Empresa:</label>
                                <select
                                    className="mt-2 p-2 border rounded w-full"
                                    onChange={(e) => setSelectedEmpresa(e.target.value)}
                                    value={selectedEmpresa}
                                >
                                    <option value="">-- Selecciona una empresa --</option>
                                    {empresas.length > 0 ? (
                                        empresas.map((empresa) => (
                                            <option key={empresa.pkid} value={empresa.nombre}>
                                                {empresa.nombre}
                                            </option>
                                        ))
                                    ) : (
                                        <option value="">No hay empresas disponibles</option>
                                    )}
                                </select>
                            </div>
                        </div>
                        <h2 className="text-xl font-semibold mb-2">Sedes</h2>
                        {/* Tabla de Sedes filtrada */}
                        <table className="min-w-full border-collapse border border-gray-300">
                            <thead>
                                <tr>
                                    <th className="border border-gray-300 p-2">Nombre</th>
                                </tr>
                            </thead>
                            <tbody>
                                {selectedEmpresa === '' ? (
                                    <tr>
                                        <td
                                            colSpan="3"
                                            className="border border-gray-300 p-2 text-center text-gray-500"
                                        >
                                            Selecciona una empresa para ver las sedes.
                                        </td>
                                    </tr>
                                ) : (
                                    filteredSedes.map((sede) => (
                                        <tr key={sede.pkid}>
                                            <td className="border border-gray-300 p-2">{sede.nombre}</td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                )}

                {/* Sección Asignar */}
                {activeSection === 'Modulo Asignar' && (
                    <div className="mt-6">
                        {/* Botones para seleccionar el tipo de asignación */}
                        <div className="mb-6 flex space-x-4">
                            <button
                                className={`py-2 px-4 rounded-lg ${assignType === 'vigilante' ? 'bg-[#1B1C2F] text-white' : 'bg-gray-200 text-gray-700'}`}
                                onClick={() => setAssignType('vigilante')}
                            >
                                Asignar Vigilante
                            </button>
                        </div>

                        {/* Formulario de Asignar */}
                        <div>
                            <div className="flex mb-4">
                                <div className="w-full pr-4">
                                    <label className="block text-gray-700">Selecciona una Empresa:</label>
                                    <select
                                        className="mt-2 p-2 border rounded w-full"
                                        onChange={(e) => setSelectedEmpresa(e.target.value)}
                                        value={selectedEmpresa}
                                    >
                                        <option value="">-- Selecciona una empresa --</option>
                                        {empresas.map((empresa) => (
                                            <option key={empresa.pkid} value={empresa.nombre}>
                                                {empresa.nombre}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            {/* Formulario para seleccionar Sede */}
                            {selectedEmpresa && (
                                <div className="flex mb-4">
                                    <div className="w-full pr-4">
                                        <label className="block text-gray-700">Selecciona una Sede:</label>
                                        <select
                                            className="mt-2 p-2 border rounded w-full"
                                            onChange={(e) => setSelectedSede(e.target.value)}
                                            value={selectedSede}
                                        >
                                            <option value="">-- Selecciona una sede --</option>
                                            {filteredSedes.map((sede) => (
                                                <option key={sede.pkid} value={sede.nombre}>
                                                    {sede.nombre}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            )}

                            {/* Formulario para seleccionar el Usuario (solo Vigilantes) */}
                            {selectedSede && (
                                <div className="flex mb-4">
                                    <div className="w-full pr-4">
                                        <label className="block text-gray-700">
                                            Selecciona un Vigilante:
                                        </label>
                                        <select
                                            className="mt-2 p-2 border rounded w-full"
                                            onChange={(e) => {
                                                setSelectedUsuario(e.target.value);
                                                console.log("Vigilante seleccionado:", e.target.value);
                                            }}
                                            value={selectedUsuario}
                                        >
                                            <option value="">-- Selecciona un Vigilante --</option>
                                            {filteredUsuarios.length > 0 ? (
                                                filteredUsuarios.map((usuario) => (
                                                    <option key={usuario.pkid} value={usuario.nombre}>
                                                        {usuario.nombre}
                                                    </option>
                                                ))
                                            ) : (
                                                <option value="">No hay vigilantes disponibles</option>
                                            )}
                                        </select>

                                    </div>
                                </div>
                            )}


                            {/* Formulario para seleccionar Zona */}
                            {selectedUsuario && (
                                <div className="flex mb-4">
                                    <div className="w-full pr-4">
                                        <label className="block text-gray-700">Selecciona una Zona:</label>
                                        <select
                                            className="mt-2 p-2 border rounded w-full"
                                            onChange={(e) => setSelectedZona(e.target.value)}
                                            value={selectedZona}
                                        >
                                            <option value="">-- Selecciona una zona --</option>
                                            {filteredZonas.map((zona) => (
                                                <option key={zona.pkid} value={zona.nombre}>
                                                    {zona.nombre}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            )}

                            {/* Formulario para seleccionar Día y Jornada */}
                            {selectedZona && (
                                <div>
                                    <div className="flex mb-4">
                                        <div className="w-full pr-4">
                                            <label className="block text-gray-700">Selecciona el Día:</label>
                                            <select
                                                className="mt-2 p-2 border rounded w-full"
                                                onChange={(e) => setSelectedDia(e.target.value)}
                                                value={selectedDia}
                                            >
                                                <option value="">-- Selecciona un día --</option>
                                                <option value="lunes">Lunes</option>
                                                <option value="martes">Martes</option>
                                                <option value="miércoles">Miércoles</option>
                                                <option value="jueves">Jueves</option>
                                                <option value="viernes">Viernes</option>
                                                <option value="sábado">Sábado</option>
                                                <option value="domingo">Domingo</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="flex mb-4">
                                        <div className="w-full pr-4">
                                            <label className="block text-gray-700">Selecciona la Jornada:</label>
                                            <select
                                                className="mt-2 p-2 border rounded w-full"
                                                onChange={(e) => setSelectedJornada(e.target.value)}
                                                value={selectedJornada}
                                            >
                                                <option value="">-- Selecciona una jornada --</option>
                                                <option value="diurna">Diurna</option>
                                                <option value="nocturna">Nocturna</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Configuracion;

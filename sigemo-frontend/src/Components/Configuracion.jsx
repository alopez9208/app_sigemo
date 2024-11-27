import React, { useState, useEffect } from 'react';

const Configuracion = ({ empresas = [], sedes = [], usuarios = [], zonas = [] }) => {
    const [activeSection, setActiveSection] = useState('empresas');
    const [selectedEmpresa, setSelectedEmpresa] = useState('');
    const [selectedSede, setSelectedSede] = useState('');
    const [selectedUsuario, setSelectedUsuario] = useState('');
    const [selectedZona, setSelectedZona] = useState('');
    const [selectedDia, setSelectedDia] = useState('');
    const [selectedJornada, setSelectedJornada] = useState('');

    // Filtrar las sedes según la empresa seleccionada
    const filteredSedes = selectedEmpresa ? sedes.filter((sede) => sede.empresa === selectedEmpresa) : [];

    // Filtrar los usuarios según la empresa y sede seleccionadas, y rol 'Vigilante'
    const filteredUsuarios = (selectedEmpresa && selectedSede)
        ? usuarios.filter((usuario) => {
            return usuario.empresa === selectedEmpresa &&
                usuario.sede === selectedSede &&
                usuario.rol === 'Vigilante'; // Filtrar por rol 'Vigilante'
        })
        : [];

    // Filtrar las zonas según la empresa y sede seleccionadas
    const filteredZonas = (selectedEmpresa && selectedSede)
        ? zonas.filter((zona) => zona.empresa === selectedEmpresa && zona.sede === selectedSede)
        : [];

    useEffect(() => {
        console.log("Usuarios filtrados:", filteredUsuarios);
    }, [filteredUsuarios]);

    // Función para manejar el guardar la configuración
    const handleGuardar = () => {
        // Aquí puedes realizar la lógica de guardar o enviar los datos seleccionados
        console.log({
            empresa: selectedEmpresa,
            sede: selectedSede,
            usuario: selectedUsuario,
            zona: selectedZona,
            dia: selectedDia,
            jornada: selectedJornada,
        });
        alert('Configuración guardada con éxito');
    };

    // Función para manejar la edición de empresas o sedes
    const handleEditar = (tipo, id) => {
        console.log(`Editar ${tipo} con ID: ${id}`);
        // Aquí podrías agregar la lógica para abrir un formulario de edición
        // o cambiar el estado para mostrar los detalles de la edición.
    };

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
                        <div className="flex justify-end mb-4">
                            <button
                                className="bg-[#1B1C2F] text-white py-2 px-4 rounded-lg hover:bg-[#14dd3c] hover:bg-opacity-80 transition-colors duration-300"
                            >
                                Agregar empresa
                            </button>
                        </div>
                        <h2 className="text-xl font-semibold mb-4">Empresas</h2>
                        <table className="min-w-full border-collapse border border-gray-300">
                            <thead>
                                <tr>
                                    <th className="border border-gray-300 p-2">Nombre</th>
                                    <th className="border border-gray-300 p-2 w-32">Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {empresas.map((empresa) => (
                                    <tr key={empresa.pkid}>
                                        <td className="border border-gray-300 p-2">{empresa.nombre}</td>
                                        <td className="border border-gray-300 p-2 w-32 flex justify-center items-center">
                                            <button
                                                className="bg-[#1B1C2F] text-white py-2 px-4 rounded-lg hover:bg-[#14dd3c] hover:bg-opacity-80 transition-colors duration-300"
                                                onClick={() => handleEditar('empresa', empresa.pkid)}
                                            >
                                                Editar
                                            </button>
                                        </td>

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
                                    {empresas.map((empresa) => (
                                        <option key={empresa.pkid} value={empresa.nombre}>
                                            {empresa.nombre}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div className="flex justify-end mb-4">
                            <button
                                className="bg-[#1B1C2F] text-white py-2 px-4 rounded-lg hover:bg-[#14dd3c] hover:bg-opacity-80 transition-colors duration-300"
                            >
                                Agregar sede
                            </button>
                        </div>
                        <h2 className="text-xl font-semibold mb-2">Sedes</h2>
                        <table className="min-w-full border-collapse border border-gray-300">
                            <thead>
                                <tr>
                                    <th className="border border-gray-300 p-2">Nombre</th>
                                    <th className="border border-gray-300 p-2 w-32">Acciones</th> {/* Ancho fijo para la columna Acciones */}
                                </tr>
                            </thead>
                            <tbody>
                                {filteredSedes.length === 0 ? (
                                    <tr>
                                        <td colSpan="3" className="border border-gray-300 p-2 text-center text-gray-500">
                                            Selecciona una empresa para ver las sedes.
                                        </td>
                                    </tr>
                                ) : (
                                    filteredSedes.map((sede) => (
                                        <tr key={sede.pkid}>
                                            <td className="border border-gray-300 p-2">{sede.nombre}</td>
                                            <td className="border border-gray-300 p-2 w-32 flex justify-center items-center"> {/* Ancho fijo para la celda de acciones */}
                                                <button
                                                    className="bg-[#1B1C2F] text-white py-2 px-4 rounded-lg hover:bg-[#14dd3c] hover:bg-opacity-80 transition-colors duration-300"
                                                    onClick={() => handleEditar('sede', sede.pkid)}
                                                >
                                                    Editar
                                                </button>
                                            </td>
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
                                        <label className="block text-gray-700">Selecciona un Vigilante:</label>
                                        <select
                                            className="mt-2 p-2 border rounded w-full"
                                            onChange={(e) => setSelectedUsuario(e.target.value)}
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

                            {/* Formulario para seleccionar Día */}
                            {selectedZona && (
                                <div className="flex mb-4">
                                    <div className="w-full pr-4">
                                        <label className="block text-gray-700">Selecciona un Día:</label>
                                        <select
                                            className="mt-2 p-2 border rounded w-full"
                                            onChange={(e) => setSelectedDia(e.target.value)}
                                            value={selectedDia}
                                        >
                                            <option value="">-- Selecciona un día --</option>
                                            <option value="Lunes">Lunes</option>
                                            <option value="Martes">Martes</option>
                                            <option value="Miércoles">Miércoles</option>
                                            <option value="Jueves">Jueves</option>
                                            <option value="Viernes">Viernes</option>
                                            <option value="Sábado">Sábado</option>
                                            <option value="Domingo">Domingo</option>
                                        </select>
                                    </div>
                                </div>
                            )}

                            {/* Formulario para seleccionar Jornada */}
                            {selectedDia && (
                                <div className="flex mb-4">
                                    <div className="w-full pr-4">
                                        <label className="block text-gray-700">Selecciona una Jornada:</label>
                                        <select
                                            className="mt-2 p-2 border rounded w-full"
                                            onChange={(e) => setSelectedJornada(e.target.value)}
                                            value={selectedJornada}
                                        >
                                            <option value="">-- Selecciona una jornada --</option>
                                            <option value="Mañana">Mañana</option>
                                            <option value="Tarde">Tarde</option>
                                            <option value="Noche">Noche</option>
                                        </select>
                                    </div>
                                </div>
                            )}
                        </div>
                        {/* Botón Guardar */}
                        <div className="flex justify-center mt-6">
                            <button
                                onClick={handleGuardar}
                                className="bg-[#1B1C2F] text-white py-2 px-6 rounded-lg hover:bg-[#14dd3c] transition-colors duration-300"
                            >
                                Guardar
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Configuracion;

import { Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import Inicio from './Components/Inicio';
import Empresas from './Components/Empresas';
import Configuracion from './Components/Configuracion';
import React, { useEffect, useState } from 'react';

function App() {
    const [usuarios, setUsuarios] = useState([]);
    const [empresas, setEmpresas] = useState([]);
    const [sedes, setSedes] = useState([]);
    const [supervisores, setSupervisores] = useState([]);
    const [vigilantes, setVigilantes] = useState([]);
    const [zonas, setZonas] = useState([]);

    // Inicializar los datos del usuario desde localStorage
    const [nombreUsuario, setNombreUsuario] = useState(localStorage.getItem('nombreUsuario') || '');
    const [emailUsuario, setEmailUsuario] = useState(localStorage.getItem('emailUsuario') || '');

    useEffect(() => {
        // Guardar en localStorage cuando los datos del usuario cambien
        if (nombreUsuario && emailUsuario) {
            localStorage.setItem('nombreUsuario', nombreUsuario);
            localStorage.setItem('emailUsuario', emailUsuario);
        }
    }, [nombreUsuario, emailUsuario]);

    useEffect(() => {
        const fetchUsuarios = async () => {
            try {
                const response = await fetch('http://localhost:5003/api/usuarios');
                const data = await response.json();
                setUsuarios(data);
                const supervisorsData = data.filter(usuario => usuario.rol === 'Supervisor');
                setSupervisores(supervisorsData);
                const vigilantesData = data.filter(usuario => usuario.rol === 'Vigilante');
                setVigilantes(vigilantesData);
            } catch (error) {
                console.error('Error al obtener usuarios:', error);
            }
        };

        fetchUsuarios();
    }, []);

    useEffect(() => {
        const fetchEmpresas = async () => {
            try {
                const response = await fetch('http://localhost:5003/api/empresas');
                const data = await response.json();
                setEmpresas(data);
            } catch (error) {
                console.error('Error al obtener empresas:', error);
            }
        };

        fetchEmpresas();
    }, []);

    useEffect(() => {
        const fetchSedes = async () => {
            try {
                const response = await fetch('http://localhost:5003/api/sedes');
                const data = await response.json();
                setSedes(data);
            } catch (error) {
                console.error('Error al obtener sedes:', error);
            }
        };

        fetchSedes();
    }, []);

    useEffect(() => {
        const fetchZonas = async () => {
            try {
                const response = await fetch('http://localhost:5003/api/zonas');
                const data = await response.json();
                setZonas(data);
            } catch (error) {
                console.error('Error al obtener zonas:', error);
            }
        };

        fetchZonas();
    }, []);



    return (
        <div className="min-h-screen bg-gray-200" style={{ background: "url(src/assets/bg.jpg)" }}>
            <Routes>
                <Route
                    path='/'
                    element={
                        <Login
                            setNombreUsuario={setNombreUsuario}
                            setEmailUsuario={setEmailUsuario}
                        />
                    }
                />
                <Route
                    path='/Dashboard'
                    element={
                        <Dashboard
                            nombreUsuario={nombreUsuario}
                            emailUsuario={emailUsuario}
                        >
                            <Inicio />
                        </Dashboard>
                    }
                />
                <Route
                    path='/empresas'
                    element={
                        <Dashboard
                            nombreUsuario={nombreUsuario}
                            emailUsuario={emailUsuario}
                        >
                            <Empresas
                                empresas={empresas}
                                sedes={sedes}
                                supervisores={supervisores}
                                vigilantes={vigilantes}
                                zonas={zonas}
                            />
                        </Dashboard>
                    }
                />
                <Route
                    path='/configuracion'
                    element={
                        <Dashboard
                            nombreUsuario={nombreUsuario}
                            emailUsuario={emailUsuario}
                        >
                            <Configuracion
                                empresas={empresas}
                                sedes={sedes}
                                supervisores={supervisores}
                                vigilantes={vigilantes}
                                zonas={zonas}
                            />
                        </Dashboard>
                    }
                />
            </Routes>
        </div>
    );
}

export default App;

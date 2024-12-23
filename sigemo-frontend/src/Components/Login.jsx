import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ setNombreUsuario, setEmailUsuario }) => { 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await fetch('http://localhost:5003/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();
            
            if (response.ok) {
                // Guardar en el estado y en localStorage
                setNombreUsuario(data.nombre);
                setEmailUsuario(data.email);
                localStorage.setItem('nombreUsuario', data.nombre);
                localStorage.setItem('emailUsuario', data.email);

                navigate('/Dashboard');
            } else {
                console.error('Error:', data.message);
                alert(data.message);
            }
        } catch (error) {
            console.error('Error de conexión:', error);
            alert('Error de conexión al servidor.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='flex justify-center items-center min-h-screen'>
            <div className='bg-slate-800 border border-slate-400 rounded-md p-10 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative'>
                <h1 className='text-4xl text-white font-bold text-center mb-6'>Login</h1>
                <form onSubmit={handleLogin}>
                    <div className='relative my-4'>
                        <input
                            type="email"
                            id="email"
                            className="block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer"
                            placeholder=""
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            autoComplete="off"
                        />
                        <label
                            htmlFor="email"
                            className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-blue-600"
                        >
                            Tu email
                        </label>
                    </div>
                    <div className='relative my-4'>
                        <input
                            type="password"
                            id="password"
                            className="block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer"
                            placeholder=""
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <label
                            htmlFor="password"
                            className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-blue-600"
                        >
                            Tu contraseña
                        </label>
                    </div>

                    <button
                        type="submit"
                        className={`w-full mb-4 text-[18px] mt-6 rounded-full bg-white text-emerald-800 hover:bg-emerald-600 hover:text-white py-2 transition-colors duration-300`}
                    >
                        {loading ? 'Cargando...' : 'Login'}
                    </button>

                </form>
            </div>
        </div>
    );
};

export default Login;

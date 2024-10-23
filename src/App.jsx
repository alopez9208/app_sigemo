import { Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './Components/Login';
import Bienvenido from './components/bienvenido'; 
import React, { useEffect, useState } from 'react';

function App() {  
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    const fetchUsuarios = async () => {
      try {
        const response = await fetch('http://localhost:5004/api/usuarios');
        const data = await response.json();
        setUsuarios(data);
      } catch (error) {
        console.error('Error al obtener usuarios:', error);
      }
    };

    fetchUsuarios();
  }, []);

  return (    
    <div className='text-white h-[100vh] flex justify-center items-center bg-cover' style={{"background":"url(src/assets/bg.jpg)"}}>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/bienvenido' element={<Bienvenido />} />
      </Routes>       
    </div>    
  );
}

export default App;


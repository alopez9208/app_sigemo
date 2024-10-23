import express from 'express';
import cors from 'cors'; // Importar cors
import pool from './src/database/connectionPostgreSQL.js'; // Asegúrate de que la ruta sea correcta

const app = express();
const PORT = 5004;

app.use(cors()); // Habilitar CORS
app.use(express.json()); // Middleware para parsear JSON

// Ruta para manejar el inicio de sesión
app.post('/api/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const result = await pool.query('SELECT * FROM tbl_usuario WHERE email = $1 AND password = $2', [email, password]);
        if (result.rows.length > 0) {
            res.status(200).json({ message: 'Inicio de sesión exitoso' });
        } else {
            res.status(401).json({ message: 'Credenciales incorrectas' });
        }
    } catch (error) {
        console.error('Error en el inicio de sesión:', error);
        res.status(500).json({ message: 'Error en el servidor' });
    }
});

// Ruta para obtener usuarios
app.get('/api/usuarios', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM tbl_usuario');
        res.status(200).json(result.rows);
    } catch (error) {
        console.error('Error al obtener usuarios:', error);
        res.status(500).json({ message: 'Error en el servidor' });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

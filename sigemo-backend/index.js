import express from 'express';
import cors from 'cors';
import pool from './src/database/connectionPostgreSQL.js';

const app = express();
const PORT = 5003;

app.use(cors()); // Habilitar CORS
app.use(express.json()); // Middleware para parsear JSON

app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const result = await pool.query('SELECT * FROM tbl_usuario WHERE email = $1 AND password = $2', [email, password]);

    if (result.rows.length > 0) {
      const usuario = result.rows[0];
      res.status(200).json({
        message: 'Inicio de sesión exitoso',
        nombre: usuario.nombre,
        email: usuario.email,        
      });
    } else {
      res.status(401).json({ message: 'Credenciales incorrectas' });
    }
  } catch (error) {
    console.error('Error en el inicio de sesión:', error);
    res.status(500).json({ message: 'Error en el servidor' });
  }
});


app.get('/api/usuarios', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM tbl_usuario');
    res.status(200).json(result.rows);
  } catch (error) {
    console.error('Error al obtener usuarios:', error);
    res.status(500).json({ message: 'Error en el servidor' });
  }
});

app.get('/api/empresas', async (req, res) => {
  try {
    const result = await pool.query('SELECT nombre FROM tbl_empresas');
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al obtener nombres de empresas');
  }
});

app.get('/api/sedes', async (req, res) => {
  try {
    const result = await pool.query('SELECT nombre,empresa FROM tbl_sedes');
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al obtener nombres de sedes');
  }
});

app.get('/api/zonas', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM tbl_zonas');
    res.status(200).json(result.rows);
  } catch (error) {
    console.error('Error al obtener zonas:', error);
    res.status(500).json({ message: 'Error en el servidor' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

// Eliminar asignación

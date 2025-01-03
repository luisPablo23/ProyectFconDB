// Importar dependencias necesarias
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

// Crear la aplicación Express
const app = express();
const PORT = 3000;

// Middleware
app.use(cors()); // Habilitar CORS para permitir peticiones desde Angular
app.use(express.json()); // Parsear JSON en las solicitudes

// Configurar la conexión a la base de datos MySQL
const db = mysql.createConnection({
  host: 'localhost', // Cambia esto según tu configuración
  user: 'root', // Usuario de tu base de datos
  password: '9824597Sc%', // Contraseña de tu base de datos
  database: 'prueba', // Nombre de tu base de datos
});

// Conectar a la base de datos
db.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err);
    return;
  }
  console.log('¡Conexión a la base de datos exitosa!');
});

// Endpoint de prueba
app.get('/api/test', (req, res) => {
  res.send({ message: 'El backend está funcionando correctamente.' });
});

// Endpoint para obtener datos desde la base de datos
app.get('/api/data', (req, res) => {
  const query = 'SELECT * FROM tabla_ejemplo'; // Cambia esto según tu tabla
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error al ejecutar la consulta:', err);
      res.status(500).send(err);
    } else {
      res.json(results);
    }
  });
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

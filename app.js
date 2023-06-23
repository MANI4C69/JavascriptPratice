const express = require('express');
const axios = require('axios');
const app = express();

// Configurar PUG como el motor de plantillas
app.set('view engine', 'pug');
app.set('views', './views');

// Ruta de inicio
app.get('/', async (req, res) => {
  try {
    // Realizar solicitud a la API-FOOTBALL para obtener los datos de los equipos
    const response = await axios.get('https://api-football.com/endpoint', {
      headers: {
        'X-RapidAPI-Key': '18273645',
      },
    });

    // Pasar los datos obtenidos a la vista
    res.render('index', { teams: response.data });
  } catch (error) {
    console.error(error);
    res.render('error', { error: 'Ocurrió un error al obtener los datos de los equipos.' });
  }
});
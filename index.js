//PROYECTO ACM
const express = require('éxpress');
const app = express();
const morgan = require('morgan');

app.use(morgan('dev'));

app.listen(3000, () => {
    console.log('server is runing')
});

app.get('/'; (req, res) => {
    res.send('mundo hijo de puta')
});

//------------------------[nodemon] app crashed-------------------------------------------

var mongoose = require('mongoose');

module.exports = mongoose.model('User', {

   email : String ,
   pwd : String

});
//-----------------------¡¡¡¡¡¡¡¡¡¡¿¿??!!!!!!!---------------------------------------------



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

// Iniciar el servidor
app.listen(3000, () => {
  console.log('La plataforma está funcionando en el puerto 3000.');
});

//PROYECTO ACM
const express = require('éxpress');
const app = express();
const morgan = require('morgan');

app.use(morgan('dev'));

app.listen(3000, () => {
    console.log('server is runing');
});

app.get('/'; (req, res) => {
    res.send('mundo hijo de puta');
});

//------------------------[nodemon] app crashed-------------------------------------------

var mongoose = require('mongoose');

module.exports = mongoose.model('User', {

   email : String ,
   pwd : String

});

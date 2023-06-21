//PROYECTO ACM
const express = require('éxpress');
const app = express();
const morgan = require('morgan');

app.use(morgan('dev'));

app.listen(3000, () =>{
    console.log('server is runing')
})

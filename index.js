const express = require('express');
const path = require('path');
const app = express();
require('dotenv').config()

const PORT = process.env.PORT || 3000;
//Middlewares
app.use(express.json());

//Serving Static Files
app.use(express.static(path.join(__dirname, 'public')));

//connect mongodb
require('./server/database/database')
//View Engine
app.set('view engine', 'hbs');

//Calling Routes
app.use('/', require('./server/router/router.js'));

app.listen(PORT, ()=> console.log(`Server is running on port ${PORT}`))
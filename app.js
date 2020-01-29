const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));
app.use(cors);

mongoose.connect(
    'mongoose://localhost:27017/http_app',
    {useNewUrlParser: true});

app.use('/departamentos', departamento_controller);
// app.use('/produtos', produto_controller);

app.listen(3000);
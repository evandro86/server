var express = require('express');
var router = express.Router();
var Departamento = require('./departamento');

router.post('/', function(req, res) {
    console.log(req.body);
    let d = new Departamento({ nome: req.body.nome });
    d.save((err, dep) => {
        if (err)
            res.status(500).send(err);
        else
            res.status(200).send(dep);
    })
})

router.get('/', function(req, res) {
    Departamento.find().exec((err, dep) => {
        if (err)
            res.status(500).send(err);
        else
            res.status(200).send(deps);
    })
})
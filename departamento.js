var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DepartamentoSchema = new Schema({
    nome: String,
}, {versionKey: false});

module.exports = mongoose.model("Departamento", DepartamentoSchema);
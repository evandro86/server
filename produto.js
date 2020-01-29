var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var produtoSchema = new Schema({
    nome: String,
    preco: Number,
    estoque: Number,
    departamentos: []
}, {versionKey: false});

module.exports = mongoose.model("Produto", produtoSchema);

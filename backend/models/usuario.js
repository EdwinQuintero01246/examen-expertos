var mongoose = require('mongoose');
var esquema = new mongoose.Schema(
    {
        nombre:String,
        imagen:String,
        contactos:Array,
        conversaciones:Array
    }
);

module.exports = mongoose.model('usuarios', esquema);
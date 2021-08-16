var mongoose = require('mongoose');
var esquema = new mongoose.Schema(
    {
        ultimoMensaje:String,
        fechaConversacionn:String,
        emisor:Array,
        receptor:Array,
        mensajes:Array,
    }
);

module.exports = mongoose.model('conversaciones', esquema);
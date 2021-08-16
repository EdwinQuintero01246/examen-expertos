var mongoose = require('mongoose');
var esquema = new mongoose.Schema(
    {
        sticker:String
    }
);

module.exports = mongoose.model('stickers', esquema);
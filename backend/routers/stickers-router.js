var express = require('express');
var router = express.Router();
var sticker = require('../models/stickers');
var mongoose = require('mongoose');

//obtener todos los stickes
router.get('/',function (req, res){
    sticker.find({},{})
    .then(result=>{
        res.send(result);
        res.end();
    })
    .catch(error=>{
        res.send(error);
        res.end();
    });
});

module.exports = router;
var express = require('express');
var router = express.Router();
var usuario = require('../models/usuario');
var mongoose = require('mongoose');

router.get('/',function (req, res){
    usuario.find({},{})
    .then(result=>{
        res.send(result);
        res.end();
    })
    .catch(error=>{
        res.send(error);
        res.end();
    });
});

router.get('/:idUsuario',function (req, res){
    usuario.find({_id:mongoose.Types.ObjectId(req.params.idUsuario)},{
        imagen:true,
        nombre:true,
    })
    .then(result=>{
        res.send(result[0]);
        res.end();
    })
    .catch(error=>{
        res.send(error);
        res.end();
    });
});


router.post('/:idUsuario/contacto',function (req, res) {
    usuario.update(
        {
            _id:mongoose.Types.ObjectId(req.params.idUsuario)
        },
        {
            $push:{
                "contactos":{
                    _id:req.body.id
                }
            }
        }
    ).then(result=>{
        res.send(result);
        res.end();
    }).catch(error=>{
        res.send(error);
        res.end();
    });
});

router.post('/:idUsuario/convesacion',function (req, res) {
    usuario.update(
        {
            _id:mongoose.Types.ObjectId(req.params.idUsuario)
        },
        {
            $push:{
                "conversaciones":{
                    _id:mongoose.Types.ObjectId(req.body.id),
                    ultimoMensaje: req.body.ultimoMensaje,
                    horaUltimoMensaje: req.body.horaUltimoMensaje,
                    nombreDestinatario: req.body.nombreDestinatario,
                    imagenDestinatario: req.body.imagenDestinatario,
                }
            }
        }
    ).then(result=>{
        res.send(result);
        res.end();
    }).catch(error=>{
        res.send(error);
        res.end();
    });
});

module.exports = router;
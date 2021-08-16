var express = require('express');
var router = express.Router();
var conversacion = require('../models/conversaciones');
var mongoose = require('mongoose');

router.get('/:idConversacion',function (req, res){
    conversacion.find({
        _id:req.params.idConversacion
    },{})
    .then(result=>{
        res.send(result);
        res.end();
    })
    .catch(error=>{
        res.send(error);
        res.end();
    });
});
// responder msj usuario typo texto
router.post('/:idConversacion/mensajesText',function (req, res) {
    conversacion.update(
        {
            _id:mongoose.Types.ObjectId(req.params.idConversacion)
        },
        {
            $push:{
                "mensajes":{
                    _id:mongoose.Types.ObjectId(),
                    emisor: mongoose.Types.ObjectId(req.body.emisor),
                    receptor: mongoose.Types.ObjectId(req.body.receptor),
                    mensaje: req.body.mensaje,
                    tipo: 'text',
                    hora:req.body.hora,
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
// responder msj usuario typo Stickes
router.post('/:idConversacion/mensajesStickes',function (req, res) {
    conversacion.update(
        {
            _id:mongoose.Types.ObjectId(req.params.idConversacion)
        },
        {
            $push:{
                "mensajes":{
                    _id:mongoose.Types.ObjectId(),
                    emisor: mongoose.Types.ObjectId(req.body.emisor),
                    receptor: mongoose.Types.ObjectId(req.body.receptor),
                    stiker: req.body.stiker,
                    tipo: 'sticker',
                    hora:req.body.hora,
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


router.post('/',function(req,res){
    let u = new conversacion({
        _id:mongoose.Types.ObjectId(),
        emisor:[{
            _id:mongoose.Types.ObjectId(req.body.idEmisor),
            nombre:req.body.nombreEmisor,
            imagen:req.body.imagenEmisor,
        }],
        receptor:[{
            _id:mongoose.Types.ObjectId(req.body.idReceptor),
            nombre:req.body.nombreReceptor,
            imagen:req.body.imagenReceptor,
        }],
        ultimoMensaje:req.body.mensaje,
        fechaConversacionn:req.body.fechaConversacion,
        mensajes:[{
            _id:mongoose.Types.ObjectId(),
            emisor :mongoose.Types.ObjectId(req.body.idEmisor),
            receptor:mongoose.Types.ObjectId(req.body.idReceptor),
            mensaje :req.body.mensaje,
            tipo : 'text',
            hora:req.body.hora
        }]
    });
    u.save().then(result=>{
        res.send(result);
        res.end();
    }).catch(error=>{
        res.send(error);
        res.end();
    });
});
module.exports = router;
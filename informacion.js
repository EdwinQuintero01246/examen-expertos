db.usuarios.insertMany([
    {
        nombre: "Goku",
        imagen: "goku.jpg",
        contactos: [],
        conversaciones: []
    },
    {
        nombre: "Gohan",
        imagen: "gohan.jpg",
        contactos: [],
        conversaciones: []
    },
    {
        nombre: "Vegeta",
        imagen: "vegeta.jpg",
        contactos: [],
        conversaciones: []
    },
    {
        nombre: "Trunks",
        imagen: "trunks.jpg",
        contactos: [],
        conversaciones: []
    },
    {
        nombre: "Patricio",
        imagen: "patricio.jpg",
        contactos: [],
        conversaciones: []
    },
])
db.conversaciones.insertMany([
    {
    _id: ObjectId(),
    emisor: {
        _id: ObjectId('61197bf11d711d5356b2c409'),
        nombre: 'Goku',
        imagen: 'goku.jpg'
    },
    receptor: {
        _id: ObjectId('61197bf11d711d5356b2c40b'),
        nombre: 'Vegeta',
        imagen: 'vegeta.jpg'
    },
    ultimoMensaje: 'sticker',
    fechaConversacionn: '12/12/2021',
    mensajes: 
        [
            {
                _id:ObjectId(),
                emisor: ObjectId('61197bf11d711d5356b2c409'),
                receptor: ObjectId('61197bf11d711d5356b2c40b'),
                mensaje: "Chat de prueba 1",
                tipo: "text",
                hora: "10:11 PM"
            },
            {
                _id:ObjectId(),
                emisor: ObjectId('61197bf11d711d5356b2c40b'),
                receptor: ObjectId('61197bf11d711d5356b2c409'),
                mensaje: "Respuesta de prueba 1",
                tipo: "text",
                hora: "10:11 PM"
            },
            {
                _id:ObjectId('61197bf11d711d5356b2c40b'),
                emisor: ObjectId('61197bf11d711d5356b2c409'),
                receptor: ObjectId(),
                tipo: "sticker",
                stiker: '6119837d1d711d5356b2c413',
                hora: "10:11 PM"
            },
            {
                _id:ObjectId(),
                emisor: ObjectId('61197bf11d711d5356b2c40b'),
                receptor: ObjectId('61197bf11d711d5356b2c409'),
                tipo: "text",
                mensaje: "Adios",
                hora: "10:11 PM"
            }
        ]
    }
])


// {
//     _id: '',
//     ultimoMensaje: "sticker",
//     horaUltimoMensaje: "10:11 PM",
//     nombreDestinatario: "Goku",
//     imagenDestinatario: "goku.jpg"
// },
// {
//     _id: '',
//     ultimoMensaje: "yey!",
//     horaUltimoMensaje: "10:13 PM",
//     nombreDestinatario: "Goku",
//     imagenDestinatario: "goku.jpg"
// }


db.stickers.insertMany([
    {
        sticker: '1.webp',
    },
    {
        sticker: '2.webp',
    },
    {
        sticker: '3.webp',
    },
    {
        sticker: '4.webp',
    },
    {
        sticker: '5.webp',
    },
    {
        sticker: '6.webp',
    },
    {
        sticker: '7.webp',
    }
])
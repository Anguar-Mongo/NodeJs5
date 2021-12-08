const mongoose = require('mongoose');
const {Schema} = mongoose;

const ApartadoSchema = new Schema({
    id_producto: {type:String, required: true},
    fecha_limite:{type:String, required:true},
    monto_pagado:{type:Number, required:true},
    piezas:{type:Number, required:true},
    id_usuario: {type:String, required: true},

    


})

module.exports =mongoose.model('Apartado', ApartadoSchema);

//module.exports = mongoose.model('Usuario', )
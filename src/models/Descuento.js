const mongoose = require('mongoose');
const {Schema} = mongoose;

const DescuentoSchema = new Schema({
    nombre: {type:String, required: true},
    porcentaje:{type:Number, required:true},
    fecha_emision:{type:String, required:true},
    fecha_termino:{type:String, required:true},
    numero_usado:{type:Number, required:true},
    active:{type:Boolean, required:true},
    descripcion:{type:String, required:false},
    producto:{type:String, required:true},
    _id:{type:String, required:true},



})

module.exports =mongoose.model('Descuento', DescuentoSchema);

//module.exports = mongoose.model('Usuario', )
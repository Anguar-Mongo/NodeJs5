const mongoose = require('mongoose');
const {Schema} = mongoose;

const CuponSchema = new Schema({
    nombre: {type:String, required: true},
    porcentaje:{type:Number, required:true},
    fecha_emision:{type:String, required:true},
    fecha_termino:{type:String, required:true},
    numero_usado:{type:Number, required:true},
    active:{type:Boolean, required:true},
    codigo:{type:String, required:false},
    id_usuario:{type:String, required:true},


})

module.exports =mongoose.model('Cupon', CuponSchema);

//module.exports = mongoose.model('Usuario', )
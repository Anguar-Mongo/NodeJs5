const mongoose = require('mongoose');
const {Schema} = mongoose;

const ProductoSchema = new Schema({
    marca: {type:String, required: true},
    nombre:{type:String, required:true},
    acabado:{type:String, required:false},
    descripcion:{type:String, required:true},
    fecha_compra: {type:String, required:true},
    peso: {type:String, required:true}, 
    precio: {type:String, required:true},
    notas: {type:String, required:true},
    status: {type:String, required:true},
    cantidad: {type:String, required:true},
    categoria: {type:String, required:true},
    link_imagen: {type:String, required:true},
    link_producto_pagina:{type:String, required:true}
})

module.exports =mongoose.model('Producto', ProductoSchema);

//module.exports = mongoose.model('Usuario', )
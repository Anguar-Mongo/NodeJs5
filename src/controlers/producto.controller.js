const modelProducto = require('../models/Producto');
const ProductoController = {};
const mongoose = require('mongoose');


//TODOS LOS USUARIOS
ProductoController.getProductos = async (req, res ) =>{
    const Producto =  await modelProducto.find();
   // console.log(Producto);
    res.json(Producto)
}
    


 
//UN SOLO USUARIO
ProductoController.getOneProducto = async (req, res ) =>{
    console.log("ID:",req.params.id);
    const Producto =  await modelProducto.findById(req.params.id);
   res.json(Producto)
}

//UN SOLO USUARIO
ProductoController.getOneProductoName = async (req, res ) =>{
    var query = {nombre:{ $regex: req.params.nombre} };
    console.log("ID:",req.params.nombre);
    const Producto =  await modelProducto.find(query);
    console.log(Producto)
   res.json(Producto)
}

//OBTIENE DE UNA CATEGORIA EN ESPECIFICO
ProductoController.getProductoCategoria = async (req, res ) =>{
    console.log("categoria:",req.params.categoria);
    const Producto =  await modelProducto.find({"categoria": req.params.categoria});
   res.json(Producto)
}



//AGREGAR USUARIO
ProductoController.addProductos = async (req, res ) =>{
    req.body._id= mongoose.Types.ObjectId();
    const producto = new modelProducto(req.body);
    const productoMetida = await producto.save();
    console.log(productoMetida)
    res.json(productoMetida);
} 

//ELIMINAR USUARIO
ProductoController.deleteProductos = async (req, res ) =>{
    console.log("ID:",req.params.id);
    const Producto =  await modelProducto.findByIdAndRemove(req.params.id);
   res.json(Producto)
}

//UPDATe USUARIO
ProductoController.updateProductos = async (req, res ) =>{
    console.log("ID:",req.params.id);
    const producto = {
        marca:req.body.marca,
        nombre:req.body.nombre,
        acabado:req.body.acabado,
        descripcion:req.body.descripcion,
        fecha_compra:req.body.fecha_compra,
        peso:req.body.peso,
        precio:req.body.precio,
        notas:req.body.notas,
        status:req.body.status,
        cantidad:req.body.cantidad,
        categoria:req.body.categoria,
        link_imagen:req.body.link_imagen,
        link_producto_pagina:req.body.link_producto_pagina
        }
        //Si no existe lo crea con el new:true
    const Producto =  await modelProducto.findByIdAndUpdate(req.params.id, {$set: producto}, {new: true} )
    
    res.json(Producto)
}



module.exports = ProductoController;
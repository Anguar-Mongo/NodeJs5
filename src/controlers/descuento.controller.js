const modelDescuento = require('../models/Descuento');
const DescuentoController = {};
const mongoose = require('mongoose');


//TODOS LOS USUARIOS
DescuentoController.getDescuentos = async (req, res ) =>{
    const Descuento =  await modelDescuento.find();
   // console.log(Descuento);
    res.json(Descuento)
}
    


 
//UN SOLO USUARIO
DescuentoController.getOneDescuento = async (req, res ) =>{
    var query = {producto:req.params.id };
    console.log("ID:",req.params.id);
    const Descuento =  await modelDescuento.find(query);
   res.json(Descuento)
}


//AGREGAR USUARIO
DescuentoController.addDescuentos = async (req, res ) =>{
    req.body._id= mongoose.Types.ObjectId();
    const descuento = new modelDescuento(req.body);
    const descuentoMetida = await descuento.save();
    console.log(descuentoMetida)
    res.json(descuentoMetida);
} 

//ELIMINAR USUARIO
DescuentoController.deleteDescuentos = async (req, res ) =>{
    console.log("ID:",req.params.id);
    const Descuento =  await modelDescuento.findByIdAndRemove(req.params.id);
   res.json(Descuento)
}

//UPDATe USUARIO
DescuentoController.updateDescuentos = async (req, res ) =>{
    console.log(req.params);
    const descuento = {
        nombre:req.body.nombre,
        porcentaje:req.body.porcentaje,
        fecha_emision:req.body.fecha_emision,
        fecha_termino:req.body.fecha_termino,
        numero_usado:req.body.numero_usado,
        active:req.body.active,
        descripcion:req.body.codigo,
        producto:req.body.id_usuario,
        }
        //Si no existe lo crea con el new:true
    const Descuento =  await modelDescuento.findByIdAndUpdate(req.params.id, {$set: descuento}, {new: true} )
    
    res.json(Descuento)
}



module.exports = DescuentoController;
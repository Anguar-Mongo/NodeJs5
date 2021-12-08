const modelTransporte = require('../models/Transporte');
const TransporteController = {};
const mongoose = require('mongoose');


//TODOS LOS USUARIOS
TransporteController.getTransportes = async (req, res ) =>{
    const Transporte =  await modelTransporte.find();
   // console.log(Transporte);
    res.json(Transporte)
}
    


 
//UN SOLO USUARIO
TransporteController.getOneTransporte = async (req, res ) =>{
    console.log("ID:",req.params.id);
    const Transporte =  await modelTransporte.findById(req.params.id);
   res.json(Transporte)
}



//AGREGAR USUARIO
TransporteController.addTransportes = async (req, res ) =>{
    req.body._id= mongoose.Types.ObjectId();
    const transporte = new modelTransporte(req.body);
    const transporteMetida = await transporte.save();
    console.log(transporteMetida)
    res.json(transporteMetida);
} 

//ELIMINAR USUARIO
TransporteController.deleteTransportes = async (req, res ) =>{
    console.log("ID:",req.params.id);
    const Transporte =  await modelTransporte.findByIdAndRemove(req.params.id);
   res.json(Transporte)
}

//UPDATe USUARIO
TransporteController.updateTransportes = async (req, res ) =>{
    console.log("ID:",req.params.id);
    const transporte = {
        placa:req.body.placa,
        empleado:req.body.empleado,
        fecha_compra:req.body.fecha_compra
        }
        //Si no existe lo crea con el new:true
    const Transporte =  await modelTransporte.findByIdAndUpdate(req.params.id, {$set: transporte}, {new: true} )
    
    res.json(Transporte)
}



module.exports = TransporteController;
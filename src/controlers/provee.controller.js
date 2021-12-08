const modelProvee = require('../models/Provee');
const ProveeController = {};
const mongoose = require('mongoose');


//TODOS LOS USUARIOS
ProveeController.getProvees = async (req, res ) =>{
    const Provee =  await modelProvee.find();
   // console.log(Provee);
    res.json(Provee)
}
    


 
//UN SOLO USUARIO
ProveeController.getOneProvee = async (req, res ) =>{
    console.log("ID:",req.params.id);
    const Provee =  await modelProvee.findById(req.params.id);
   res.json(Provee)
}


//AGREGAR USUARIO
ProveeController.addProvees = async (req, res ) =>{
    req.body._id= mongoose.Types.ObjectId();
    
    const provee = new modelProvee(req.body);
    const proveeMetida = await provee.save();
    console.log(proveeMetida)
    res.json(proveeMetida);
} 

//ELIMINAR USUARIO
ProveeController.deleteProvees = async (req, res ) =>{
    console.log("ID:",req.params.id);
    const Provee =  await modelProvee.findByIdAndRemove(req.params.id);
   res.json(Provee)
}

//UPDATe USUARIO
ProveeController.updateProvees = async (req, res ) =>{
    console.log("ID:",req.params.id);
    const provee = {
        proveedor: req.body.proveedor,
        id_producto:req.body.id_producto,
        cantidad:req.body.id_producto
        }
        //Si no existe lo crea con el new:true
    const Provee =  await modelProvee.findByIdAndUpdate(req.params.id, {$set: provee}, {new: true} )
    
    res.json(Provee)
}



module.exports = ProveeController;
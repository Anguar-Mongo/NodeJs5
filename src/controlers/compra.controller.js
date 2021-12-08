const modelCompra = require('../models/Compra');
const CompraController = {};
const mongoose = require('mongoose');


//TODOS LOS USUARIOS
CompraController.getCompras = async (req, res ) =>{
    const Compra =  await modelCompra.find();
   // console.log(Compra);
    res.json(Compra)
}
    


 
//UN SOLO USUARIO
CompraController.getOneCompra = async (req, res ) =>{
    console.log("ID:",req.params.id);
    const Compra =  await modelCompra.findById(req.params.id);
   res.json(Compra)
}


//AGREGAR USUARIO
CompraController.addCompras = async (req, res ) =>{
    req.body._id= mongoose.Types.ObjectId();
    const compra = new modelCompra(req.body);
    console.log("AQUIIIIIII");
    console.log(req.body);
    const compraMetida = await compra.save();
    console.log(compraMetida)
    res.json(compraMetida);
} 

//ELIMINAR USUARIO
CompraController.deleteCompras = async (req, res ) =>{
    console.log("ID:",req.params.id);
    const Compra =  await modelCompra.findByIdAndRemove(req.params.id);
   res.json(Compra)
}

//UPDATe USUARIO
CompraController.updateCompras = async (req, res ) =>{
    console.log("ID:",req.params.id);
    const compra = {
        id_usuario: req.body.id_usuario,
        producto: req.body.producto,
        domicilio: {
            calle:req.body.domicilio.calle,
            colonia:req.body.domicilio.colonia,
            estado:req.body.domicilio.estado,
            municipio:req.body.domicilio.municipio,
            numero_exterior:req.body.domicilio.numero_exterior,
            numero_interior:req.body.domicilio.numero_interior
        },
        total:req.body.total,
        id_envio:req.body.id_envio,
        }
        //Si no existe lo crea con el new:true
    const Compra =  await modelCompra.findByIdAndUpdate(req.params.id, {$set: compra}, {new: true} )
    
    res.json(Compra)
}



module.exports = CompraController;
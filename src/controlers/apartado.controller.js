const modelApartado = require('../models/Apartado');
const ApartadoController = {};

//TODOS LOS USUARIOS
ApartadoController.getApartados = async (req, res ) =>{
    const Apartado =  await modelApartado.find();
   // console.log(Apartado);
    res.json(Apartado)
}
    


 
//UN SOLO USUARIO
ApartadoController.getOneApartado = async (req, res ) =>{
    var query = {id_usuario:req.params.id };
    console.log("ID:",req.params.id);
    const Apartado =  await modelApartado.find(query);
   res.json(Apartado)
}


//AGREGAR USUARIO
ApartadoController.addApartados = async (req, res ) =>{
    
    const apartado = new modelApartado(req.body);
    const apartadoMetida = await apartado.save();
    console.log(apartadoMetida)
    res.json(apartadoMetida);
} 

//ELIMINAR USUARIO
ApartadoController.deleteApartados = async (req, res ) =>{
    console.log("ID:",req.params.id);
    const Apartado =  await modelApartado.findByIdAndRemove(req.params.id);
   res.json(Apartado)
}

//UPDATe USUARIO
ApartadoController.updateApartados = async (req, res ) =>{
    console.log("ID:",req.params.id);
    const apartado = {
        id_producto: req.body.id_producto,
        fecha_limite:req.body.fecha_limite,
        monto_pagado:req.body.monto_pagado,
        piezas:req.body.piezas,
        id_usuario:req.body.id_usuario
        }
        //Si no existe lo crea con el new:true
    const Apartado =  await modelApartado.findByIdAndUpdate(req.params.id, {$set: apartado}, {new: true} )
    
    res.json(Apartado)
}



module.exports = ApartadoController;
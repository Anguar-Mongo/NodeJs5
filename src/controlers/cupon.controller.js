const modelCupon = require('../models/Cupon');
const CuponController = {};

//TODOS LOS USUARIOS
CuponController.getCupons = async (req, res ) =>{
    const Cupon =  await modelCupon.find();
   // console.log(Cupon);
    res.json(Cupon)
}
    


 
//UN SOLO USUARIO
CuponController.getOneCupon = async (req, res ) =>{
    var query = {id_usuario:req.params.id };
    console.log("ID:",req.params.id);
    const Cupon =  await modelCupon.find(query);
   res.json(Cupon)
}


//AGREGAR USUARIO
CuponController.addCupons = async (req, res ) =>{
    
    const cupon = new modelCupon(req.body);
    const cuponMetida = await cupon.save();
    console.log(cuponMetida)
    res.json(cuponMetida);
} 

//ELIMINAR USUARIO
CuponController.deleteCupons = async (req, res ) =>{
    console.log("ID:",req.params.id);
    const Cupon =  await modelCupon.findByIdAndRemove(req.params.id);
   res.json(Cupon)
}

//UPDATe USUARIO
CuponController.updateCupons = async (req, res ) =>{
    console.log(req.params);
    const cupon = {
        nombre:req.body.nombre,
        porcentaje:req.body.porcentaje,
        fecha_emision:req.body.fecha_emision,
        fecha_termino:req.body.fecha_termino,
        numero_usado:req.body.numero_usado,
        active:req.body.active,
        codigo:req.body.codigo,
        id_usuario:req.body.id_usuario,
        }
        //Si no existe lo crea con el new:true
    const Cupon =  await modelCupon.findByIdAndUpdate(req.params.id, {$set: cupon}, {new: true} )
    
    res.json(Cupon)
}



module.exports = CuponController;
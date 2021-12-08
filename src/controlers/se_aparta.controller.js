const modelSe_aparta = require('../models/Se_aparta');
const Se_apartaController = {};

//TODOS LOS USUARIOS
Se_apartaController.getSe_apartas = async (req, res ) =>{
    const Se_aparta =  await modelSe_aparta.find();
   // console.log(Se_aparta);
    res.json(Se_aparta)
}
    


 
//UN SOLO USUARIO
Se_apartaController.getOneSe_aparta = async (req, res ) =>{
    console.log("ID:",req.params.id);
    const Se_aparta =  await modelSe_aparta.findById(req.params.id);
   res.json(Se_aparta)
}


//AGREGAR USUARIO
Se_apartaController.addSe_apartas = async (req, res ) =>{
    
    const se_aparta = new modelSe_aparta(req.body);
    const se_apartaMetida = await se_aparta.save();
    console.log(se_apartaMetida)
    res.json(se_apartaMetida);
} 

//ELIMINAR USUARIO
Se_apartaController.deleteSe_apartas = async (req, res ) =>{
    console.log("ID:",req.params.id);
    const Se_aparta =  await modelSe_aparta.findByIdAndRemove(req.params.id);
   res.json(Se_aparta)
}

//UPDATe USUARIO
Se_apartaController.updateSe_apartas = async (req, res ) =>{
    console.log("ID:",req.params.id);
    const se_aparta = {
        id_producto:req.body.id_producto,
        id_apartado:req.body.id_apartado
    }
        //Si no existe lo crea con el new:true
    const Se_aparta =  await modelSe_aparta.findByIdAndUpdate(req.params.id, {$set: se_aparta}, {new: true} )
    
    res.json(Se_aparta)
}



module.exports = Se_apartaController;
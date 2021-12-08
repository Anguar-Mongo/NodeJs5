const modelSe_compra = require('../models/Se_compra');
const Se_compraController = {};

//TODOS LOS USUARIOS
Se_compraController.getSe_compras = async (req, res ) =>{
    const Se_compra =  await modelSe_compra.find();
   // console.log(Se_compra);
    res.json(Se_compra)
}
    


 
//UN SOLO USUARIO
Se_compraController.getOneSe_compra = async (req, res ) =>{
    console.log("ID:",req.params.id);
    const Se_compra =  await modelSe_compra.findById(req.params.id);
   res.json(Se_compra)
}


//AGREGAR USUARIO
Se_compraController.addSe_compras = async (req, res ) =>{
    
    const se_compra = new modelSe_compra(req.body);
    console.log("AQUIIII");
    console.log(req.body);
    const se_compraMetida = await se_compra.save();
    console.log(se_compraMetida)
    res.json(se_compraMetida);
} 

//ELIMINAR USUARIO
Se_compraController.deleteSe_compras = async (req, res ) =>{
    console.log("ID:",req.params.id);
    const Se_compra =  await modelSe_compra.findByIdAndRemove(req.params.id);
   res.json(Se_compra)
}

//UPDATe USUARIO
Se_compraController.updateSe_compras = async (req, res ) =>{
    console.log("ID:",req.params.id);
    console.log(req.body.producto[0].id_producto);
    const se_compra = {
        producto:req.body.producto
    }
        //Si no existe lo crea con el new:true
    const Se_compra =  await modelSe_compra.findByIdAndUpdate(req.params.id, {$set: se_compra}, {new: true} )
    
    res.json(Se_compra)
}



module.exports = Se_compraController;
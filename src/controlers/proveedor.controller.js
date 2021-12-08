const modelProveedor = require('../models/Proveedor');
const ProveedorController = {};
const mongoose = require('mongoose');


//TODOS LOS USUARIOS
ProveedorController.getProveedores = async (req, res ) =>{
    const Proveedor =  await modelProveedor.find();
   // console.log(Proveedor);
    res.json(Proveedor)
}
    


 
//UN SOLO USUARIO
ProveedorController.getOneProveedor = async (req, res ) =>{
    console.log("ID:",req.params.id);
    const Proveedor =  await modelProveedor.findById(req.params.id);
   res.json(Proveedor)
}


//AGREGAR USUARIO
ProveedorController.addProveedores = async (req, res ) =>{
    req.body._id= mongoose.Types.ObjectId();

    const proveedor = new modelProveedor(req.body);
    const proveedorMetida = await proveedor.save();
    console.log(proveedorMetida)
    res.json(proveedorMetida);
} 

//ELIMINAR USUARIO
ProveedorController.deleteProveedores = async (req, res ) =>{
    console.log("ID:",req.params.id);
    const Proveedor =  await modelProveedor.findByIdAndRemove(req.params.id);
   res.json(Proveedor)
}

//UPDATe USUARIO
ProveedorController.updateProveedores = async (req, res ) =>{
    console.log("ID:",req.params.id);
    const proveedor = {
        nombre: req.body.nombre,
        RFC:req.body.RFC,
        telefono:req.body.telefono,
        correo:req.body.correo,
        domicilio: {
            calle:req.body.domicilio.calle,
            colonia:req.body.domicilio.colonia,
            estado:req.body.domicilio.estado,
            municipio:req.body.domicilio.municipio,
            numero_exterior:req.body.domicilio.numero_exterior,
            numero_interior:req.body.domicilio.numero_interior
        },
        productos:req.body.productos
        }
        //Si no existe lo crea con el new:true
    const Proveedor =  await modelProveedor.findByIdAndUpdate(req.params.id, {$set: proveedor}, {new: true} )
    
    res.json(Proveedor)
}



module.exports = ProveedorController;
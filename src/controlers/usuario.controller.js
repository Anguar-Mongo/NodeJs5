const modelUsuario = require('../models/Usuario');
const UsuarioController = {};
const mongoose = require('mongoose');

//TODOS LOS USUARIOS
UsuarioController.getUsuarios = async (req, res ) =>{
    const Usuario =  await modelUsuario.find();
   // console.log(Usuario);
    res.json(Usuario)
}
    


 
//UN SOLO USUARIO
UsuarioController.getOneUsuario = async (req, res ) =>{
    console.log("ID:",req.params.id);
    const Usuario =  await modelUsuario.findById(req.params.id);
   res.json(Usuario)
}
busq =""
UsuarioController.getOneUsuarioName = async (req, res ) =>{
    console.log("ID:",req.params.nombre);
    //busq ="/";
    busq+=req.params.nombre;
    //busq+='/';
    var query = {nombre:{ $regex: req.params.nombre} };
    console.log(query);
    const Usuario = await  modelUsuario.find(query)
    //const Usuario =  await modelUsuario.findById(req.params.id);
   res.json(Usuario)
}

UsuarioController.getOneUsuarioLogin = async (req, res ) =>{
    console.log("Correo:",req.params.correo);
    console.log("Password:",req.params.password);
    const Usuario =  await modelUsuario.find({$and: [{correo: req.params.correo}, {password: req.params.password}] }     );
    
   res.json(Usuario)
}

//AGREGAR USUARIO
UsuarioController.addUsuarios = async (req, res ) =>{
    req.body._id= mongoose.Types.ObjectId();
    const usuario = new modelUsuario(req.body);
    const usuarioMetida = await usuario.save();
    console.log(usuarioMetida)
    res.json(usuarioMetida);
} 

//ELIMINAR USUARIO
UsuarioController.deleteUsuarios = async (req, res ) =>{
    console.log("ID:",req.params.id);
    const Usuario =  await modelUsuario.findByIdAndRemove(req.params.id);
   res.json(Usuario)
}

//UPDATe USUARIO
UsuarioController.updateUsuarios = async (req, res ) =>{
    console.log("ID:",req.params.id);
    const usuario = {
        nombre: req.body.nombre,
        apellido_pat:req.body.apellido_pat,
        apellido_mat:req.body.apellido_mat,
        correo:req.body.correo,
        password: req.body.password,
        domicilio: {
            calle:req.body.domicilio.calle,
            colonia:req.body.domicilio.colonia,
            estado:req.body.domicilio.estado,
            municipio:req.body.domicilio.municipio,
            numero_exterior:req.body.domicilio.numero_exterior,
            numero_interior:req.body.domicilio.numero_interior
        },
        telefono:req.body.telefono 
        }
        //Si no existe lo crea con el new:true
    const Usuario =  await modelUsuario.findByIdAndUpdate(req.params.id, {$set: usuario}, {new: true} )
    
    res.json(Usuario)
}



module.exports = UsuarioController;
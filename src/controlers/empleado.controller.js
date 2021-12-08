const modelEmpleado = require('../models/Empleado');
const EmpleadoController = {};
const mongoose = require('mongoose');


//TODOS LOS USUARIOS
EmpleadoController.getEmpleados = async (req, res ) =>{
    const Empleado =  await modelEmpleado.find();
   // console.log(Empleado);
    res.json(Empleado)
}
    


 
//UN SOLO USUARIO
EmpleadoController.getOneEmpleado = async (req, res ) =>{
    console.log("ID:",req.params.id);
    const Empleado =  await modelEmpleado.findById(req.params.id);
   res.json(Empleado)
}


//AGREGAR USUARIO
EmpleadoController.addEmpleados = async (req, res ) =>{
    req.body._id= mongoose.Types.ObjectId();
    const empleado = new modelEmpleado(req.body);
    const empleadoMetida = await empleado.save();
    console.log(empleadoMetida)
    res.json(empleadoMetida);
} 

//ELIMINAR USUARIO
EmpleadoController.deleteEmpleados = async (req, res ) =>{
    console.log("ID:",req.params.id);
    const Empleado =  await modelEmpleado.findByIdAndRemove(req.params.id);
   res.json(Empleado)
}

//UPDATe USUARIO
EmpleadoController.updateEmpleados = async (req, res ) =>{
    console.log("ID:",req.params.id);
    const empleado = {
        nombre: req.body.nombre,
        apellido_pat:req.body.apellido_pat,
        apellido_mat:req.body.apellido_mat,
        domicilio: {
            calle:req.body.domicilio.calle,
            colonia:req.body.domicilio.colonia,
            estado:req.body.domicilio.estado,
            municipio:req.body.domicilio.municipio,
            numero_exterior:req.body.domicilio.numero_exterior,
            numero_interior:req.body.domicilio.numero_interior
        },
        telefono:req.body.telefono,
        puesto:req.body.puesto,
        salario:req.body.salario,
        fecha_ingreso:req.body.fecha_ingreso   
        }
        //Si no existe lo crea con el new:true
    const Empleado =  await modelEmpleado.findByIdAndUpdate(req.params.id, {$set: empleado}, {new: true} )
    
    res.json(Empleado)
}



module.exports = EmpleadoController;
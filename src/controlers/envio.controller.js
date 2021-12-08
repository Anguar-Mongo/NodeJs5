const modelEnvio = require('../models/Envio');
const EnvioController = {};

//TODOS LOS USUARIOS
EnvioController.getEnvios = async (req, res ) =>{
    const Envio =  await modelEnvio.find();
   // console.log(Envio);
    res.json(Envio)
}
    


 
//UN SOLO USUARIO
EnvioController.getOneEnvio = async (req, res ) =>{
    console.log("ID:",req.params.id);
    const Envio =  await modelEnvio.findById(req.params.id);
   res.json(Envio)
}


//AGREGAR USUARIO
EnvioController.addEnvios = async (req, res ) =>{
    
    const envio = new modelEnvio(req.body);
    console.log(req.body.domicilio)
    const envioMetida = await envio.save();
    console.log(envioMetida)
    res.json(envioMetida);
} 

//ELIMINAR USUARIO
EnvioController.deleteEnvios = async (req, res ) =>{
    console.log("ID:",req.params.id);
    const Envio =  await modelEnvio.findByIdAndRemove(req.params.id);
   res.json(Envio)
}

//UPDATe USUARIO
EnvioController.updateEnvios = async (req, res ) =>{
    console.log("ID:",req.params.id);
    const envio = {
        id_compra: req.body.id_compra,
        fechas:req.body.fechas,
        notas:req.body.notas,
        id_empleado:req.body.id_empleado,
        domicilio: {
            calle:req.body.domicilio.calle,
            colonia:req.body.domicilio.colonia,
            estado:req.body.domicilio.estado,
            municipio:req.body.domicilio.municipio,
            numero_exterior:req.body.domicilio.numero_exterior,
            numero_interior:req.body.domicilio.numero_interior
        },
        }
        //Si no existe lo crea con el new:true
    const Envio =  await modelEnvio.findByIdAndUpdate(req.params.id, {$set: envio}, {new: true} )
    
    res.json(Envio)
}



module.exports = EnvioController;
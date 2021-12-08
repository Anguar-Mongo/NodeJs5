const mongoose = require('mongoose');
const {Schema} = mongoose;

const EnvioSchema = new Schema({
    id_compra: {type:String, required: false},
    fechas:{
        empaque:{type:String, required: false},
        envio:{type:String, required: false},
        recibido:{type:String, required: false}
    },
    notas:{type:String, required:false},
    id_empleado:{type:String, required:true},
    domicilio: {
        calle:{type:String, required:true},
        colonia:{type:String, required:true},
        estado:{type:String, required:true},
        municipio:{type:String, required:true},
        numero_exterior:{type:String, required:true},
        numero_interior:{type:String, required:false}
    },
    active:{type:Boolean, required:false}


})

module.exports =mongoose.model('Envio', EnvioSchema);

//module.exports = mongoose.model('Usuario', )
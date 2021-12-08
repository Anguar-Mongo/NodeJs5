const mongoose = require('mongoose');
const {Schema} = mongoose;

const EmpleadoSchema = new Schema({
    nombre: {type:String, required: true},
    apellido_pat:{type:String, required:true},
    apellido_mat:{type:String, required:false},
    domicilio: {
        calle:{type:String, required:true},
        colonia:{type:String, required:true},
        estado:{type:String, required:true},
        municipio:{type:String, required:true},
        numero_exterior:{type:String, required:true},
        numero_interior:{type:String, required:false}
    },
    telefono:{type:String, required:true},
    puesto:{type:String, required:false},
    salario:{type:Number, required:true},
    fecha_ingreso:{type:String, required:true}


})

module.exports =mongoose.model('Empleado', EmpleadoSchema);

//module.exports = mongoose.model('Usuario', )
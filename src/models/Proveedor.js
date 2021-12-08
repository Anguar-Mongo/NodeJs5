const mongoose = require('mongoose');
const {Schema} = mongoose;

const ProveedoreSchema = new Schema({
    nombre: {type:String, required: true},
    RFC:{type:String, required:true},
    telefono:{type:String, required:true},
    correo:{type:String, required:false},
    domicilio: {
        calle:{type:String, required:true},
        colonia:{type:String, required:true},
        estado:{type:String, required:true},
        municipio:{type:String, required:true},
        numero_exterior:{type:String, required:true},
        numero_interior:{type:String, required:false}
    },
    productos:{type:Array, required:false},
    
})

module.exports =mongoose.model('Proveedor', ProveedoreSchema);

//module.exports = mongoose.model('Usuario', )
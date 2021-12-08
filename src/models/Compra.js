const mongoose = require('mongoose');
const {Schema} = mongoose;

const CompraSchema = new Schema({
    id_usuario: {type:String, required: true},
    producto:[{
        id_producto:{type:String, required:true},
        cantidad:{type:String, required:true}
    }],
    domicilio: {
        calle:{type:String, required:false},
        colonia:{type:String, required:false},
        estado:{type:String, required:false},
        municipio:{type:String, required:false},
        numero_exterior:{type:String, required:false},
        numero_interior:{type:String, required:false} 
    }, 
    total:{type:Number, required:true},
    id_envio:{type:String, required:true},


})

module.exports =mongoose.model('Compra', CompraSchema);

//module.exports = mongoose.model('Usuario', )
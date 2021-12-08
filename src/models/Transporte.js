const mongoose = require('mongoose');
const {Schema} = mongoose;

const TransporteSchema = new Schema({
    placa: {type:String, required: true},
    empleado:{type:String, required:false},
    fecha_compra:{type:String, required:true},
    active:{type:Boolean, require:true},
    
})

module.exports =mongoose.model('Transporte', TransporteSchema);

//module.exports = mongoose.model('Usuario', )
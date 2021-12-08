const mongoose = require('mongoose');
const {Schema} = mongoose;

const ProveeSchema = new Schema({
    proveedor: {type:String, required: true},
    id_producto:{type:String, required:true},
    cantidad:{type:String, required:true},

    


})

module.exports =mongoose.model('Provee', ProveeSchema);

//module.exports = mongoose.model('Usuario', )
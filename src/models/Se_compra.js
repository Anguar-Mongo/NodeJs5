const mongoose = require('mongoose');
const {Schema} = mongoose;

const Se_compraSchema = new Schema({
        id_producto:{type:String, required:true},
        cantidad:{type:Number, required:true},
        id_compra:{type:String, required:true}
    


})

module.exports =mongoose.model('Se_compra', Se_compraSchema);

//module.exports = mongoose.model('Usuario', )
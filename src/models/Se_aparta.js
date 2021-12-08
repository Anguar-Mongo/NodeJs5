const mongoose = require('mongoose');
const {Schema} = mongoose;

const Se_apartaSchema = new Schema({
    id_producto:{type:String, required:true},
    id_apartado:{type:String, required:true}

})

module.exports =mongoose.model('Se_aparta', Se_apartaSchema);

//module.exports = mongoose.model('Usuario', )
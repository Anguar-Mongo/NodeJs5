const express = require('express');
const router = express.Router();

const se_compra =require('../controlers/se_compra.controller');

router.get('/', se_compra.getSe_compras );

router.post('/', se_compra.addSe_compras );

router.get('/:id', se_compra.getOneSe_compra );

router.put('/:id', se_compra.updateSe_compras ); 

router.delete('/:id', se_compra.deleteSe_compras ); 
 
 
module.exports = router;
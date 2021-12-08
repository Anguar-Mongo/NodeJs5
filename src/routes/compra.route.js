const express = require('express');
const router = express.Router();

const compra =require('../controlers/compra.controller');

router.get('/', compra.getCompras );

router.post('/', compra.addCompras );

router.get('/:id', compra.getOneCompra );

router.put('/:id', compra.updateCompras ); 

router.delete('/:id', compra.deleteCompras ); 
 
 
module.exports = router;
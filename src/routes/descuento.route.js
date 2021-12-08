const express = require('express');
const router = express.Router();

const descuento =require('../controlers/descuento.controller');

router.get('/', descuento.getDescuentos );

router.post('/', descuento.addDescuentos );

router.get('/:id', descuento.getOneDescuento );

router.put('/:id', descuento.updateDescuentos ); 

router.delete('/:id', descuento.deleteDescuentos ); 
 
 
module.exports = router;
const express = require('express');
const router = express.Router();

const transporte =require('../controlers/transporte.controller');

router.get('/', transporte.getTransportes );

router.post('/', transporte.addTransportes );

router.get('/:id', transporte.getOneTransporte );

router.put('/:id', transporte.updateTransportes ); 

router.delete('/:id', transporte.deleteTransportes ); 
 
 
module.exports = router;
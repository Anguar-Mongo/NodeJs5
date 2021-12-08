const express = require('express');
const router = express.Router();

const apartado =require('../controlers/apartado.controller');

router.get('/', apartado.getApartados );

router.post('/', apartado.addApartados );

router.get('/:id', apartado.getOneApartado );

router.put('/:id', apartado.updateApartados ); 

router.delete('/:id', apartado.deleteApartados ); 
 
 
module.exports = router;
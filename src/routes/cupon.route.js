const express = require('express');
const router = express.Router();

const cupon =require('../controlers/cupon.controller');

router.get('/', cupon.getCupons );

router.post('/', cupon.addCupons );

router.get('/:id', cupon.getOneCupon );

router.put('/:id', cupon.updateCupons ); 

router.delete('/:id', cupon.deleteCupons ); 
 
 
module.exports = router;
const express = require('express');
const router = express.Router();

const envio =require('../controlers/envio.controller');

router.get('/', envio.getEnvios );

router.post('/', envio.addEnvios );

router.get('/:id', envio.getOneEnvio );

router.put('/:id', envio.updateEnvios ); 

router.delete('/:id', envio.deleteEnvios ); 
 
 
module.exports = router;
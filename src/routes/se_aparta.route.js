const express = require('express');
const router = express.Router();

const se_aparta =require('../controlers/se_aparta.controller');

router.get('/', se_aparta.getSe_apartas );

router.post('/', se_aparta.addSe_apartas );

router.get('/:id', se_aparta.getOneSe_aparta );

router.put('/:id', se_aparta.updateSe_apartas ); 

router.delete('/:id', se_aparta.deleteSe_apartas ); 
 
 
module.exports = router;
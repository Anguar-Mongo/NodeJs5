const express = require('express');
const router = express.Router();

const provee =require('../controlers/provee.controller');

router.get('/', provee.getProvees );

router.post('/', provee.addProvees );

router.get('/:id', provee.getOneProvee );

router.put('/:id', provee.updateProvees ); 

router.delete('/:id', provee.deleteProvees ); 
 
 
module.exports = router;
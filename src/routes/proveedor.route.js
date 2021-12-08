const express = require('express');
const router = express.Router();

const proveedor =require('../controlers/proveedor.controller');

router.get('/', proveedor.getProveedores );

router.post('/', proveedor.addProveedores );

router.get('/:id', proveedor.getOneProveedor );

router.put('/:id', proveedor.updateProveedores ); 

router.delete('/:id', proveedor.deleteProveedores ); 
 
 
module.exports = router;
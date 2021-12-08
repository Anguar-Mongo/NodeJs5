const express = require('express');
const router = express.Router();

const producto =require('../controlers/producto.controller');

router.get('/', producto.getProductos );

router.post('/', producto.addProductos );

router.get('/:id', producto.getOneProducto );

router.get('/buscador/:nombre', producto.getOneProductoName );

router.get('/categoria/:categoria', producto.getProductoCategoria );


router.put('/:id', producto.updateProductos ); 

router.delete('/:id', producto.deleteProductos );  
 
 
module.exports = router; 
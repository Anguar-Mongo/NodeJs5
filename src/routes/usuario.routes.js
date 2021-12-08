const express = require('express');
const router = express.Router();

const usuario =require('../controlers/usuario.controller');

router.get('/', usuario.getUsuarios );

router.post('/', usuario.addUsuarios );

router.get('/:id', usuario.getOneUsuario );

router.get('/buscador/:nombre', usuario.getOneUsuarioName );

router.get('/:correo/:password', usuario.getOneUsuarioLogin );

router.put('/:id', usuario.updateUsuarios ); 

router.delete('/:id', usuario.deleteUsuarios ); 
 
 
module.exports = router;
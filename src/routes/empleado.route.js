const express = require('express');
const router = express.Router();

const empleado =require('../controlers/empleado.controller');

router.get('/', empleado.getEmpleados );

router.post('/', empleado.addEmpleados );

router.get('/:id', empleado.getOneEmpleado );

router.put('/:id', empleado.updateEmpleados ); 

router.delete('/:id', empleado.deleteEmpleados ); 
 
 
module.exports = router;
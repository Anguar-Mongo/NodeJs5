const  express = require ('express');
const app = express();

const morgan = require('morgan');
const {mongoose} = require('./database');

//configuracion
app.set('port', process.env.PORT || 3000);

app.use(morgan('dev'));
app.use(express.json());


//Middlewares

// Add headers before the routes are defined
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});


//routes
app.use('/api/usuario',require('./routes/usuario.routes')); 
app.use('/api/producto',require('./routes/producto.route')); 
app.use('/api/transporte',require('./routes/transporte.route')); 
app.use('/api/proveedor',require('./routes/proveedor.route')); 
app.use('/api/empleado',require('./routes/empleado.route')); 
app.use('/api/envio',require('./routes/envio.route')); 
app.use('/api/compra',require('./routes/compra.route')); 
app.use('/api/apartado',require('./routes/apartado.route')); 
app.use('/api/provee',require('./routes/provee.route')); 
app.use('/api/se_compra',require('./routes/se_compra.route')); 
app.use('/api/se_aparta',require('./routes/se_aparta.route')); 
app.use('/api/cupon',require('./routes/cupon.route')); 
app.use('/api/descuento',require('./routes/descuento.route')); 







//INICIO
app.listen(app.get('port') , ()=>{
    console.log('Server');
})
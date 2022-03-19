const Producto = require('./producto');
const convertidor = require('./Decorator');


const nintendo = new Producto('nintendo', '64', 150, 'USD');
const ferrari = new Producto('ferrari', 'i40', 50000, 'GBP');
const lg = new Producto('lg', 'p20', 500, 'CAD');

convertidor(nintendo, 'EUR');
convertidor(ferrari, 'EUR');
convertidor(lg, 'EUR');


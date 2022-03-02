const Producto = require('./producto');
const Decorator = require('./Decorator');


const nintendo = new Producto('nintendo', '64', 150, 'USD');
const ferrari = new Producto('ferrari', 'i40', 50000, 'GBP');
const lg = new Producto('lg', 'p20', 500, 'CAD');


const nintendo2 = new Decorator(nintendo);
const ferrari2 = new Decorator(ferrari);
const lg2 = new Decorator(lg);

nintendo2.convertidor('EUR');
ferrari2.convertidor('EUR');
lg2.convertidor('EUR');


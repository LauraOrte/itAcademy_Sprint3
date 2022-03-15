const Middleware = require('./middleware.js')
const numeros = require('./parameters.json')

const calculadora = (operacion, valors) => {
  let resultado;
  
  switch (operacion) {
      case 'suma': resultado = valors.reduce((a, b) => a + b); break;
      case 'resta': resultado = valors.reduce((a, b) => a - b); break;
      case 'multiplicacion': resultado = valors.reduce((a, b) => a * b); break;
      default: break;
  }
  
  return resultado;
};

const middleware = new Middleware();

middleware.use(function (info, next){
    console.log(`El cuadrado de ${numeros[1].a} es igual a ${Math.pow(numeros[1].a, numeros[2].b)}`); 
    next();
});

middleware.use(function (info, next) {
    console.log(`El cubo de ${numeros[1].a} es igual a ${Math.pow(numeros[1].a, numeros[0].a)}`); 
    next();
});

middleware.use(function (info, next) {
    console.log(`La división de ${numeros[1].a} entre ${numeros[1].b} es igual a ${numeros[1].a / numeros[1].b}`);
    next();
});

// Ejecuta la función suma despues de los middlewares
middleware.run(calculadora('suma', [numeros[1].a, numeros[1].b]));


const Middleware = require('./middleware.js')
const Calculadora = require('./calculadora.js')
const numeros = require('./parameters.json')


const calculadora = new Calculadora();
const app = new Middleware();

cuadrado = (next) =>{
    console.log(`El cuadrado de ${numeros[1].a} es igual a ${Math.pow(numeros[1].a, numeros[2].b)}`); 
    next();
}

cubo = (next) =>{ 
    console.log(`El cubo de ${numeros[1].a} es igual a ${Math.pow(numeros[1].a, numeros[0].a)}`); 
    next();
}

division = (next) =>{
    console.log(`La división de ${numeros[1].a} entre ${numeros[1].b} es igual a ${numeros[1].a / numeros[1].b}`);
    next();
}

app.use(cuadrado)
app.use(cubo)
app.use(division)
app.get(calculadora.suma)

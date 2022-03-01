const calculator = require('./functions')
const numeros = require('./parameters.json')

const a = numeros[1].a;
const b = numeros[1].b;
console.log(`Números del archivo json :  ${a}, ${b}`);

const App = () => {
  const middlewares = []

  const use = fn => middlewares.push(fn)

  const runMiddlewares = index => {
    if(index < middlewares.length){
      middlewares[index].call(null, ()=> runMiddlewares(index + 1))
    }
  }
  const get = () => {
    runMiddlewares(0)
  }
  return {
    get,
    use
  }
}

const app = App()

app.use((next)=>{
  console.log(`El cuadrado: ${Math.pow(numeros[1].a, numeros[2].b)}`);
  next()
})
app.use((next)=>{
  console.log(`El cubo: ${Math.pow(numeros[1].a, numeros[0].a)}`); 
  next()
})
app.use((next)=>{
  console.log(`La división de ${numeros[1].a} entre ${numeros[1].b} es igual a ${numeros[1].a / numeros[1].b}`);
  next()
})

app.get(calculator.suma)

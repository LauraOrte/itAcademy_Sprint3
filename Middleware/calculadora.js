const numeros = require('./parameters.json')

class Calculadora {

    suma(){
        console.log(`suma: ${numeros[0].a + numeros[0].b}`)

    }

    resta(){

        console.log(`resta: ${numeros[1].a - numeros[1].b}`)
    }

    multiplicacion(){

        console.log (`multiplicacion: ${numeros[2].a * numeros[2].b}`)

    }
}

module.exports = Calculadora;
const div = require('./currency_conversions.json');


class Decorator {
    constructor(producto) {
        this.producto = producto;
    };

    elProducto() {
        return this.producto;
    };

    convertidor(divisa) {
        try {
            const regex = new RegExp(this.elProducto().divisa + '_' + divisa);
            const conversion = this.elProducto().precio * Object.entries(div).find(n => regex.test(n))[1]

            console.log(`Se hará la conversión de: ${this.elProducto().divisa} a ${divisa}`);

            console.log(`${this.elProducto().nom} ${this.elProducto().modelo} con un precio de: ${this.elProducto().precio} ${this.elProducto().divisa} será de: ${conversion.toFixed(2)} ${divisa} en el cambio de divisa`);
        } catch (error) {
            if(divisa !== 'EUR'){
                console.log('Solo se puede hacer la conversión a Euros');
            }else if(this.elProducto().divisa === 'EUR'){
                console.log('Solo se hará la conversión a euros, cambie la divisia inicial')
            }else{
                console.log(`La divisia no existe`);
            }
        }
    };
}

module.exports = Decorator;
const div = require('./currency_conversions.json');


function convertidor(Producto, divisa) {
        try {
            const regex = new RegExp(Producto.divisa + '_' + divisa);
            const Producto.precioEur = Producto.precio * Object.entries(div).find(n => regex.test(n))[1]

            console.log(`Se hará la conversión de: ${Producto.divisa} a ${divisa}`);

            console.log(`${Producto.nom} ${Producto.modelo} con un precio de: ${Producto.precio} ${Producto.divisa} será de: ${Producto.precioEur.toFixed(2)} ${divisa} en el cambio de divisa`);
        } catch (error) {
            if(divisa !== 'EUR'){
                console.log('Solo se puede hacer la conversión a Euros');
            }else if(Producto.divisa === 'EUR'){
                console.log('Solo se hará la conversión a euros, cambie la divisia inicial')
            }else{
                console.log(`La divisia no existe`);
            }
        }
    };

module.exports = convertidor;

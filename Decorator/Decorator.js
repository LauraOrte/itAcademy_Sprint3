const div = require('./currency_conversions.json');


function convertidor(Producto, divisa) {
        try {
            const regex = new RegExp(Producto.divisa + '_' + divisa);
            Producto.precioEur = Producto.precio * Object.entries(div).find(n => regex.test(n))[1].toFixed(2);
            console.log(Producto.precioEur);
            
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
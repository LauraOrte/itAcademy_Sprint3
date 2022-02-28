const EventEmitter = require('events');
let emitter = new EventEmitter();

emitter.on('mensaje', (usuari, mensaje, tema) => {
    console.log(`hi, el usuario: '${usuari.nom}' a mandado el siguiente mensaje: '${mensaje} en el tema: '${tema}'`);
});

class Tema{
    constructor(){
    this.temas = [];
    this.suscripcio = [];
  }

CrearTema(usuari, tema){
    if(usuari.nom === undefined){
        console.log(`el usuario no está registrado`);
    } else {
    console.log(`el usuario: '${usuari.nom}' ha creado el tema: '${tema}'`);
    this.temas.push(tema);
    }

}
 
suscripcioTemas(usuari, tema){
    if(usuari.nom === undefined && tema === undefined){
        console.log(`el usuario i/o tema no están registrados`);
    } else {
        console.log(`el usuario: '${usuari.nom}' se ha suscripto al tema: '${tema}'`);
        this.suscripcio.push(tema);
    }

}

comunicarMembres (usuari, mensaje, tema){
emitter.emit('mensaje', usuari, mensaje, tema);

}
}


module.exports = Tema;

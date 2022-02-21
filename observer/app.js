const Usuari = require('./usuari');
const EventEmitter = require('events');
let emitter = new EventEmitter();

let temas = [];
let suscripcio = [];

emitter.on('mensaje', (usuari, mensaje, tema) => {
    console.log(`hi, el usuario: '${usuari.nom}' a mandado el siguiente mensaje: '${mensaje} en el tema: '${tema}'`);
}
);

function CrearTema(usuari, tema){
    if(usuari.nom === undefined){
        console.log(`el usuario no está registrado`);
    } else {
    console.log(`el usuario: '${usuari.nom}' a creado el tema: '${tema}'`);
    temas.push(tema);
    }

}
 
function suscripcioTemas(usuari, tema){
    if(usuari.nom === undefined && tema === undefined){
        console.log(`el usuario i/o tema no están registrados`);
    } else {
        console.log(`el usuario: '${usuari.nom}' se ha suscripto al tema: '${tema}'`);
        suscripcio.push(tema);
    }

}

function comunicarMembres (usuari, mensaje, tema){
emitter.emit('mensaje', usuari, mensaje, tema);

}

//crear usuarios
let usuari1 = new Usuari('Maria');
console.log(usuari1);

let usuari2 = new Usuari('Pol');
console.log(usuari2);

//crear temas
let tema1 = new CrearTema(usuari1,'Opiniones')
let tema2 = new CrearTema(usuari2, 'Bienvenida')

//Suscripcio a temas
let suscrip1= new suscripcioTemas(usuari1, 'Opiniones');
let suscrip2 = new suscripcioTemas(usuari2, 'Bienvenida');


// Saldría en la consola del usuario que está suscrito
comunicarMembres (usuari1, 'TODO OOOOK!', 'Opiniones');
comunicarMembres (usuari2, 'HOLIIIITAAA', 'Bienvenidas')
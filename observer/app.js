const Usuari = require('./usuari');
const Tema = require('./tema');

//crear usuarios
let usuari1 = new Usuari('Maria');
console.log(usuari1);

let usuari2 = new Usuari('Pol');
console.log(usuari2);

//crear temas
let tema = new Tema();

tema.CrearTema(usuari1,'Opiniones');
tema.CrearTema(usuari2, 'Bienvenida');

//Suscripcio a temas

tema.suscripcioTemas(usuari2, 'Bienvenida');


// Saldría en la consola del usuario que está suscrito

tema.comunicarMembres (usuari1, 'TODO OOOOK!', 'Opiniones');
tema.comunicarMembres (usuari2, 'HOLIIIITAAA', 'Bienvenidas')
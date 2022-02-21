class Juego {
    constructor(){
        this.jugadores = [];
        
    }

    anyadirjugador(jugador){
        if(jugador.nom === undefined) {
            return console.log(`El jugador '${jugador}' no existe, registralo`);
        } else {
            this.jugadores.push(jugador);
            return console.log(`El jugador '${jugador.nom}' se ha añadido al juego correctamente`);
            
    };

    }

    subirPuntos(jugador, puntosMas){
        if(jugador.nom === undefined) {
            return console.log(`El jugador '${jugador}' no existe, registralo`);
        } else {
            jugador.puntosMas.push(puntosMas);
            return console.log(`Al jugador '${jugador.nom}' se le ha añadido '${puntosMas}' correctamente`);
        
        }

    };

    quitarPuntos(jugador, puntosMenos){
        if(jugador.nom === undefined) {
            return console.log(`El jugador '${jugador}' no existe, registralo`);
        } else {
            jugador.puntosMenos.push(puntosMenos);
            return console.log(`Al jugador '${jugador.nom}' se le ha restado '${puntosMenos}' correctamente`);
    
        }
    };

    mostrarPuntos(jugador){
        const suma = jugador.puntosMas.map(n => n).reduce((a, b) => a + b, 0);
        const resta = jugador.puntosMenos.map(n => n).reduce((a, b) => a - b, 0);
        const total = jugador.puntosTotal.push(suma  + resta);
        console.log(`El jugador '${jugador.nom}' tiene '${jugador.puntosTotal}' puntos en total.`);
    }

}

module.exports = Juego;
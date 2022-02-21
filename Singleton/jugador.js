class Jugador {
    constructor (nom){
        this.nom = nom;
        this.puntosMas = [];
        this.puntosMenos = [];
        this.puntosTotal = [];
    }

    crearJugador(nom){
        return new Jugador(nom);
    }

}

module.exports = Jugador;
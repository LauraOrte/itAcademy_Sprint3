let instance = null;

class Marcador {

  constructor(){
    this.puntosMas = [];
    this.puntosMenos = [];
    this.puntosTotal= [];
    if (!instance) {
      instance = this;
  }

    return instance;
}

  subirPuntos(jugador, puntosMas){
    if(jugador.nom === undefined) {
        return console.log(`El jugador '${jugador}' no existe, registralo`);
    } else {
        this.puntosMas.push(puntosMas);
        return console.log(`Al jugador '${jugador.nom}' se le ha añadido '${puntosMas}' correctamente`);
    
    }

};

quitarPuntos(jugador, puntosMenos){
    if(jugador.nom === undefined) {
        return console.log(`El jugador '${jugador}' no existe, registralo`);
    } else {
        this.puntosMenos.push(puntosMenos);
        return console.log(`Al jugador '${jugador.nom}' se le ha restado '${puntosMenos}' correctamente`);

    }
};

mostrarPuntos(jugador){
  const suma = this.puntosMas.map(n => n).reduce((a, b) => a + b, 0)
  const resta = this.puntosMenos.map(n => n).reduce((a, b) => a - b, 0)
  const total = this.puntosTotal.push(suma + resta);
  console.log(`El jugador '${jugador.nom}' tiene '${this.puntosTotal}' puntos en total.`);
}

ganador(){
      const ganador = Math.max(...this.puntosTotal);
      console.log(`la máxima puntuación ha sido: '${ganador}', HAS SIDO EL GANADOR!`);
  }



}

module.exports = Marcador;
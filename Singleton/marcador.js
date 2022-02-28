let instance = null;

class Marcador {

  constructor(){
    this.marcador = []
    if (!instance) {
      instance = this;
  }

    return instance;
}

  subirPuntos(nom, puntosMas){
   
      let jugadorMarcadorIndex = this.marcador.findIndex(obj => nom === obj.nom);
      this.marcador[jugadorMarcadorIndex].points += puntosMas
    }



quitarPuntos(){
 
      return this.sort((a, b) => b.points - a.points);

    }

ganador(){
  console.log(`El ganador es: ${this.sort()[0]}!!`)
  }

mostrarPuntos(){
  console.log("marcador: ",
  this.sort())
}



}

module.exports = Marcador;
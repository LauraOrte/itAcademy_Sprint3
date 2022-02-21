class Marcador{

    constructor(){
        this.singleton = false;
    }

    static ganador(jugador){
        if(!this.singleton){
            const ganador = Math.max(...jugador);
            console.log(`la máxima puntuación ha sido: '${ganador}'`);
            this.singleton = true;
        } else {
            console.log(`El ganador ya ha sido elegido.`);
        }
    }
}

module.exports = Marcador;
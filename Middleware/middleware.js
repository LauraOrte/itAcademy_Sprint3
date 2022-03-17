class Middleware{
    constructor(){
        this.middlewares = new Array(0)
    }
     use = (x) =>{
         this.middlewares.push(x)
      }
     runMW = (i) =>{
         if(i < this.middlewares.length){
             this.middlewares[i](()=> this.runMW(i+1))
         }
     }
     get = (fn) =>{
         this.use(fn)
         this.runMW(0)
         this.middlewares.pop()
     }
 }

module.exports = Middleware;
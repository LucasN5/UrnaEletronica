export class TituloDeEleitorMasculino {
    constructor(nome, rg, comprovanteResidencia, reservista){

    this._nome = nome;
    this._rg = rg;
    this._comprovanteResidencia = comprovanteResidencia;
    this._reservista = reservista;
    }

    set reservista(reservista){
        if(reservista = true){
            this._reservista = reservista
        } else if (reservista = false){
            console.log("É necessário possuir o documento de reservista.");
            return;
        }
    }

    get comprovanteResidencia(){
        return this._comprovanteResidencia;
    }

    get rg(){
        return this._rg;
    }




    votar(numero, reservista){

      if(reservista == true){
        
        if( numero == 183){
            console.log("Você votou para Pedro.");
        } else if(numero == 555){
            console.log("Você votou para Ana.");
        } else if(numero == 678){
            console.log("Você votou para Junior.");
        } else {
            console.log("Número não identificado.");
        }
      } else {
          console.log("Não é possível votar sem reservista");
      }
    }

    
    votarEmBranco(numero, reservista){
      if(reservista == true){
        if(numero == 0){
            console.log("Você votou em branco.");
        }
     } else {
         console.log("Não é possível votar sem reservista");
     }
    }
    
}
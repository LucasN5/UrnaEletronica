import {TituloDeEleitorMasculino} from "./TituloDeEleitorMasculino.js"

export class TituloDeEleitorFeminino extends TituloDeEleitorMasculino{
    constructor(nome, rg, comprovanteResidencia){
        super(nome, rg, comprovanteResidencia);
    }

    votar(numero){

    
          
          if( numero == 183){
              console.log("Você votou para Pedro.");
          } else if(numero == 555){
              console.log("Você votou para Ana.");
          } else if(numero == 678){
              console.log("Você votou para Junior.");
          } else {
              console.log("Número não identificado.");
          }
      }
  
      votarEmBranco(numero){
          if(numero == 0){
              console.log("Você votou em branco.");
          }
            
      }
}
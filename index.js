import {TituloDeEleitorMasculino} from "./TituloDeEleitorMasculino.js"
import {TituloDeEleitorFeminino} from "./TituloDeEleitorFeminino.js"

const eleitor1 = new TituloDeEleitorMasculino ("Junin", 156489, "São Vicente", false);

eleitor1.votar(183);
eleitor1.votarEmBranco(0);

const eleitor2 = new TituloDeEleitorMasculino("Paulo", 654569, "Santos", true);

eleitor2.votar(555, true);
eleitor2.votar(3, true);
eleitor2.votarEmBranco(0, true);

const eleitor3 = new TituloDeEleitorFeminino("Julia", 9541581, "Praia Grande");

eleitor3.votar(678);

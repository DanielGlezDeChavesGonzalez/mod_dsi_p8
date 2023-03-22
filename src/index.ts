import { PokemonFigureCreator } from "./PokemonFigureCreator";
import { ElectricCreator } from "./ElectricCreator";
import { FireCreator } from "./FireCreator";
import { FairyCreator } from "./FairyCreator";

function clientCode(PokemonFigureCreator: PokemonFigureCreator) {
  console.log(PokemonFigureCreator.logic());
}

clientCode(new ElectricCreator("Pikachu", "Electric", 35, 55, 40));
clientCode(new FireCreator("Charmander", "Fire", 39, 52, 43));
clientCode(new ElectricCreator("Raichu", "Electric", 60, 90, 55));
clientCode(new FairyCreator("Jigglypuff", "Fairy", 115, 45, 20));

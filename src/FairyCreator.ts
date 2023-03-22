import { PokemonFigureCreator } from "./PokemonFigureCreator";
import { Pokemon } from "./Pokemon";
import { Fairy } from "./Fairy";

export class FairyCreator extends PokemonFigureCreator {
  constructor(
    private name: string,
    private type: string,
    private hp: number,
    private attack: number,
    private defense: number
  ) {
    super();
  }

  public factoryMethod(): Pokemon {
    return new Fairy(this.name, this.type, this.hp, this.attack, this.defense);
  }
}

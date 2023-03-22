import { PokemonFigureCreator } from "./PokemonFigureCreator";
import { Pokemon } from "./Pokemon";
import { Electric } from "./Electric";

export class ElectricCreator extends PokemonFigureCreator {
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
    return new Electric(
      this.name,
      this.type,
      this.hp,
      this.attack,
      this.defense
    );
  }
}

import { PokemonFigureCreator } from "./PokemonFigureCreator";
import { Pokemon } from "./Pokemon";
import { Fairy } from "./Fairy";

/**
 * Creator of the Fairy Pokemon.
 */
export class FairyCreator extends PokemonFigureCreator {
  /**
   * constructor of the FairyCreator class.
   * @param name name of the Pokemon
   * @param type type of the Pokemon
   * @param hp hp of the Pokemon
   * @param attack attack of the Pokemon
   * @param defense defense of the Pokemon
   */
  constructor(
    private name: string,
    private type: string,
    private hp: number,
    private attack: number,
    private defense: number
  ) {
    super();
  }

  /**
   * factory method of the FairyCreator class.
   * @returns a new Fairy Pokemon.
   */
  public factoryMethod(): Pokemon {
    return new Fairy(this.name, this.type, this.hp, this.attack, this.defense);
  }
}

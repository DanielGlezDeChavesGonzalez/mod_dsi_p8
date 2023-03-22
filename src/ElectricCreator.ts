import { PokemonFigureCreator } from "./PokemonFigureCreator";
import { Pokemon } from "./Pokemon";
import { Electric } from "./Electric";
/**
 * creator of the Electric Pokemon.
 */
export class ElectricCreator extends PokemonFigureCreator {
  /**
   * constructor of the ElectricCreator class.
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
   * factory method of the ElectricCreator class.
   * @returns a new Electric Pokemon.
   */
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

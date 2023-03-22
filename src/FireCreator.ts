import { PokemonFigureCreator } from "./PokemonFigureCreator";
import { Pokemon } from "./Pokemon";
import { Fire } from "./Fire";

/**
 * Creator of the Fire Pokemon.
 */
export class FireCreator extends PokemonFigureCreator {
  /**
   * constructor of the FireCreator class.
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
   * factory method of the FireCreator class.
   * @returns a new Fire Pokemon.
   */
  public factoryMethod(): Pokemon {
    return new Fire(this.name, this.type, this.hp, this.attack, this.defense);
  }
}

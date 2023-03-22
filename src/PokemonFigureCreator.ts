import { Pokemon } from "./Pokemon";

/**
 * abstract class for the PokemonFigureCreator.
 */
export abstract class PokemonFigureCreator {
  /**
   * abstract factory method.
   */
  public abstract factoryMethod(): Pokemon;

  /**
   * function that returns the logic of the Pokemon.
   * @returns the logic of the Pokemon.
   */
  public logic(): string {
    const pokemon = this.factoryMethod();
    return `Pokemon: ${pokemon.getName()}, Type: ${pokemon.getType()}, HP: ${pokemon.getHP()}, Attack: ${pokemon.getAttack()}, Defense: ${pokemon.getDefense()}`;
  }
}

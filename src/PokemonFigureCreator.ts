import { Pokemon } from "./Pokemon";

export abstract class PokemonFigureCreator {
  public abstract factoryMethod(): Pokemon;

  public logic(): string {
    const pokemon = this.factoryMethod();
    return `Pokemon: ${pokemon.getName()}, Type: ${pokemon.getType()}, HP: ${pokemon.getHP()}, Attack: ${pokemon.getAttack()}, Defense: ${pokemon.getDefense()}`;
  }
}


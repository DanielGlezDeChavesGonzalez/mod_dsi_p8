import { PokemonFigureCreator } from "./PokemonFigureCreator";
import { Pokemon } from "./Pokemon";
import { Fire } from "./Fire";

export class FireCreator extends PokemonFigureCreator {
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
      return new Fire(
        this.name,
        this.type,
        this.hp,
        this.attack,
        this.defense
      );
    }
  }
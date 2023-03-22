import { Pokemon } from "./Pokemon";

export class Fire implements Pokemon {
  /**
   * constructor of the Fire Pokemon.
   * @param name name of the Pokemon.
   * @param type type of the Pokemon.
   * @param hp hp of the Pokemon.
   * @param attack attack of the Pokemon.
   * @param defense defense of the Pokemon.
   */
  constructor(
    private name: string,
    private type: string,
    private hp: number,
    private attack: number,
    private defense: number
  ) {}

  /**
   * getter for the name of the Pokemon.
   * @returns the name of the Pokemon.
   */
  public getName(): string {
    return this.name;
  }

  /**
   * getter for the type of the Pokemon.
   * @returns the type of the Pokemon.
   */
  public getType(): string {
    return this.type;
  }

  /**
   * getter for the hp of the Pokemon.
   * @returns the hp of the Pokemon.
   */
  public getHP(): number {
    return this.hp;
  }

  /**
   * getter for the attack of the Pokemon.
   * @returns the attack of the Pokemon.
   */
  public getAttack(): number {
    return this.attack;
  }

  /**
   * getter for the defense of the Pokemon.
   * @returns the defense of the Pokemon.
   */
  public getDefense(): number {
    return this.defense;
  }

  /**
   * setter for the name of the Pokemon.
   * @param name name of the Pokemon.
   */
  public setName(name: string): void {
    this.name = name;
  }

  /**
   * setter for the type of the Pokemon.
   * @param type type of the Pokemon.
   */
  public setType(type: string): void {
    this.type = type;
  }

  /**
   * setter for the hp of the Pokemon.
   * @param hp hp of the Pokemon.
   */
  public setHP(hp: number): void {
    this.hp = hp;
  }

  /**
   * setter for the attack of the Pokemon.
   * @param attack attack of the Pokemon.
   */
  public setAttack(attack: number): void {
    this.attack = attack;
  }

  /**
   * setter for the defense of the Pokemon.
   * @param defense defense of the Pokemon.
   */
  public setDefense(defense: number): void {
    this.defense = defense;
  }
}

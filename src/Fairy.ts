import { Pokemon } from "./Pokemon";

export class Fairy implements Pokemon {
  constructor(
    private name: string,
    private type: string,
    private hp: number,
    private attack: number,
    private defense: number
  ) {}

  public getName(): string {
    return this.name;
  }

  public getType(): string {
    return this.type;
  }

  public getHP(): number {
    return this.hp;
  }

  public getAttack(): number {
    return this.attack;
  }

  public getDefense(): number {
    return this.defense;
  }

  public setName(name: string): void {
    this.name = name;
  }

  public setType(type: string): void {
    this.type = type;
  }

  public setHP(hp: number): void {
    this.hp = hp;
  }

  public setAttack(attack: number): void {
    this.attack = attack;
  }

  public setDefense(defense: number): void {
    this.defense = defense;
  }
}

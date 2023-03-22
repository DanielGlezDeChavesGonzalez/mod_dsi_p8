/**
 * Pokemon interface
 */
export interface Pokemon {
  getName(): string;
  getType(): string;
  getHP(): number;
  getAttack(): number;
  getDefense(): number;
}

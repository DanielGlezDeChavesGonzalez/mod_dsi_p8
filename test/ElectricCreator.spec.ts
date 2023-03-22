import "mocha";
import { expect } from "chai";
import { ElectricCreator } from "../src/ElectricCreator";

describe("ElectricCreator", () => {
  it("should be able to create a new ElectricCreator instance", () => {
    const electricCreator = new ElectricCreator(
      "Pikachu",
      "Electric",
      35,
      55,
      40
    );
    expect(electricCreator).to.be.an.instanceOf(ElectricCreator);
  });
  it("should be able to create a new Electric instance", () => {
    const electricCreator = new ElectricCreator(
      "Pikachu",
      "Electric",
      35,
      55,
      40
    );
    expect(electricCreator.logic()).to.equal(
      "Pokemon: Pikachu, Type: Electric, HP: 35, Attack: 55, Defense: 40"
    );
  });
});

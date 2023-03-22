import "mocha";
import { expect } from "chai";
import { FireCreator } from "../src/FireCreator";

describe("FireCreator", () => {
  it("should be able to create a new FireCreator instance", () => {
    const fireCreator = new FireCreator("Charmander", "Fire", 50, 35, 45);
    expect(fireCreator).to.be.an.instanceOf(FireCreator);
  });
  it("should be able to create a new Fire instance", () => {
    const fireCreator = new FireCreator("Charmander", "Fire", 50, 35, 45);
    expect(fireCreator.logic()).to.equal(
      "Pokemon: Charmander, Type: Fire, HP: 50, Attack: 35, Defense: 45"
    );
  });
});

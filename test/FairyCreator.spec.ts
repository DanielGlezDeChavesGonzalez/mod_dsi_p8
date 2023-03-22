import "mocha";
import { expect } from "chai";
import { FairyCreator } from "../src/FairyCreator";

describe("FairyCreator", () => {
  it("should be able to create a new FairyCreator instance", () => {
    const fairyCreator = new FairyCreator("Jigglypuff", "Fairy", 115, 45, 20);
    expect(fairyCreator).to.be.an.instanceOf(FairyCreator);
  });
  it("should be able to create a new Fairy instance", () => {
    const fairyCreator = new FairyCreator("Jigglypuff", "Fairy", 115, 45, 20);
    expect(fairyCreator.logic()).to.equal(
      "Pokemon: Jigglypuff, Type: Fairy, HP: 115, Attack: 45, Defense: 20"
    );
  });
});

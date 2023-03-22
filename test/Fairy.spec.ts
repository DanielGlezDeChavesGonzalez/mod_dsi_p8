import "mocha";
import { expect } from "chai";
import { Fairy } from "../src/Fairy";

describe("Fairy", () => {
  it("should be able to create a new Fairy instance", () => {
    const fairy = new Fairy("Jigglypuff", "Fairy", 115, 45, 20);
    expect(fairy).to.be.an.instanceOf(Fairy);
  });
  it("should be able to get the name of the Fairy instance", () => {
    const fairy = new Fairy("Jigglypuff", "Fairy", 115, 45, 20);
    expect(fairy.getName()).to.equal("Jigglypuff");
  });
  it("should be able to get the type of the Fairy instance", () => {
    const fairy = new Fairy("Jigglypuff", "Fairy", 115, 45, 20);
    expect(fairy.getType()).to.equal("Fairy");
  });

  it("should be able to get the HP of the Fairy instance", () => {
    const fairy = new Fairy("Jigglypuff", "Fairy", 115, 45, 20);
    expect(fairy.getHP()).to.equal(115);
  });
  it("should be able to get the attack of the Fairy instance", () => {
    const fairy = new Fairy("Jigglypuff", "Fairy", 115, 45, 20);
    expect(fairy.getAttack()).to.equal(45);
  });
  it("should be able to get the defense of the Fairy instance", () => {
    const fairy = new Fairy("Jigglypuff", "Fairy", 115, 45, 20);
    expect(fairy.getDefense()).to.equal(20);
  });
  it("should be able to set the name of the Fairy instance", () => {
    const fairy = new Fairy("Jigglypuff", "Fairy", 115, 45, 20);
    fairy.setName("Wigglytuff");
    expect(fairy.getName()).to.equal("Wigglytuff");
  });
  it("should be able to set the type of the Fairy instance", () => {
    const fairy = new Fairy("Jigglypuff", "Fairy", 115, 45, 20);
    fairy.setType("Fairies");
    expect(fairy.getType()).to.equal("Fairies");
  });
  it("should be able to set the HP of the Fairy instance", () => {
    const fairy = new Fairy("Jigglypuff", "Fairy", 115, 45, 20);
    fairy.setHP(100);
    expect(fairy.getHP()).to.equal(100);
  });
  it("should be able to set the attack of the Fairy instance", () => {
    const fairy = new Fairy("Jigglypuff", "Fairy", 115, 45, 20);
    fairy.setAttack(90);
    expect(fairy.getAttack()).to.equal(90);
  });
  it("should be able to set the defense of the Fairy instance", () => {
    const fairy = new Fairy("Jigglypuff", "Fairy", 115, 45, 20);
    fairy.setDefense(60);
    expect(fairy.getDefense()).to.equal(60);
  });
});

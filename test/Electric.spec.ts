import "mocha";
import { expect } from "chai";
import { Electric } from "../src/Electric";

describe("Electric", () => {
  it("should be able to create a new Electric instance", () => {
    const electric = new Electric("Pikachu", "Electric", 35, 55, 40);
    expect(electric).to.be.an.instanceOf(Electric);
  });
  it("should be able to get the name of the Electric instance", () => {
    const electric = new Electric("Pikachu", "Electric", 35, 55, 40);
    expect(electric.getName()).to.equal("Pikachu");
  });
  it("should be able to get the type of the Electric instance", () => {
    const electric = new Electric("Pikachu", "Electric", 35, 55, 40);
    expect(electric.getType()).to.equal("Electric");
  });

  it("should be able to get the HP of the Electric instance", () => {
    const electric = new Electric("Pikachu", "Electric", 35, 55, 40);
    expect(electric.getHP()).to.equal(35);
  });
  it("should be able to get the attack of the Electric instance", () => {
    const electric = new Electric("Pikachu", "Electric", 35, 55, 40);
    expect(electric.getAttack()).to.equal(55);
  });
  it("should be able to get the defense of the Electric instance", () => {
    const electric = new Electric("Pikachu", "Electric", 35, 55, 40);
    expect(electric.getDefense()).to.equal(40);
  });
  it("should be able to set the name of the Electric instance", () => {
    const electric = new Electric("Pikachu", "Electric", 35, 55, 40);
    electric.setName("Raichu");
    expect(electric.getName()).to.equal("Raichu");
  });
  it("should be able to set the type of the Electric instance", () => {
    const electric = new Electric("Pikachu", "Electric", 35, 55, 40);
    electric.setType("Electric");
    expect(electric.getType()).to.equal("Electric");
  });
  it("should be able to set the HP of the Electric instance", () => {
    const electric = new Electric("Pikachu", "Electric", 35, 55, 40);
    electric.setHP(60);
    expect(electric.getHP()).to.equal(60);
  });
  it("should be able to set the attack of the Electric instance", () => {
    const electric = new Electric("Pikachu", "Electric", 35, 55, 40);
    electric.setAttack(90);
    expect(electric.getAttack()).to.equal(90);
  });
  it("should be able to set the defense of the Electric instance", () => {
    const electric = new Electric("Pikachu", "Electric", 35, 55, 40);
    electric.setDefense(60);
    expect(electric.getDefense()).to.equal(60);
  });
});

import "mocha";
import { expect } from "chai";
import { Fire } from "../src/Fire";

describe("Fire", () => {
  it("should be able to create a new Fire instance", () => {
    const fire = new Fire("Pikachu", "Fire", 35, 55, 40);
    expect(fire).to.be.an.instanceOf(Fire);
  });
  it("should be able to get the name of the Fire instance", () => {
    const fire = new Fire("Pikachu", "Fire", 35, 55, 40);
    expect(fire.getName()).to.equal("Pikachu");
  });
  it("should be able to get the type of the Fire instance", () => {
    const fire = new Fire("Pikachu", "Fire", 35, 55, 40);
    expect(fire.getType()).to.equal("Fire");
  });

  it("should be able to get the HP of the Fire instance", () => {
    const fire = new Fire("Pikachu", "Fire", 35, 55, 40);
    expect(fire.getHP()).to.equal(35);
  });
  it("should be able to get the attack of the Fire instance", () => {
    const fire = new Fire("Pikachu", "Fire", 35, 55, 40);
    expect(fire.getAttack()).to.equal(55);
  });
  it("should be able to get the defense of the Fire instance", () => {
    const fire = new Fire("Pikachu", "Fire", 35, 55, 40);
    expect(fire.getDefense()).to.equal(40);
  });
  it("should be able to set the name of the Fire instance", () => {
    const fire = new Fire("Pikachu", "Fire", 35, 55, 40);
    fire.setName("Raichu");
    expect(fire.getName()).to.equal("Raichu");
  });
  it("should be able to set the type of the Fire instance", () => {
    const fire = new Fire("Pikachu", "Fire", 35, 55, 40);
    fire.setType("Fire");
    expect(fire.getType()).to.equal("Fire");
  });
  it("should be able to set the HP of the Fire instance", () => {
    const fire = new Fire("Pikachu", "Fire", 35, 55, 40);
    fire.setHP(60);
    expect(fire.getHP()).to.equal(60);
  });
  it("should be able to set the attack of the Fire instance", () => {
    const fire = new Fire("Pikachu", "Fire", 35, 55, 40);
    fire.setAttack(90);
    expect(fire.getAttack()).to.equal(90);
  });
  it("should be able to set the defense of the Fire instance", () => {
    const fire = new Fire("Pikachu", "Fire", 35, 55, 40);
    fire.setDefense(60);
    expect(fire.getDefense()).to.equal(60);
  });
});

const { expect } = require("chai");

describe("SDH25 contract", function () {
  it("Deployment should assign the total supply of tokens to the owner", async function () {
    const [owner] = await ethers.getSigners();

    const SDH25 = await ethers.getContractFactory("SDH25");

    const hardhatSDH25 = await SDH25.deploy();

    const ownerBalance = await hardhatSDH25.balanceOf(owner.address);
    expect(await hardhatSDH25.totalSupply()).to.equal(ownerBalance);
  });
});

import {
  time,
  loadFixture,
} from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("SimpleOwnable", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  async function deploySimpleOwnerFixture() {
    // Contracts are deployed using the first signer/account by default
    const [owner, otherAccount] = await ethers.getSigners();

    const SimpleOwnable = await ethers.getContractFactory("SimpleOwnable");
    const simpleOwnable = await SimpleOwnable.deploy();

    return { simpleOwnable, owner, otherAccount };
  }

  describe("Deploy", function () {
    it("Should deploy the contract", async function () {
      const { simpleOwnable, owner } = await loadFixture(
        deploySimpleOwnerFixture
      );

      expect(await simpleOwnable.owner()).to.equal(owner.address);
    });
  });

  describe("Set Owner", function () {
    it("Should set the owner", async function () {
      const { simpleOwnable, owner, otherAccount } = await loadFixture(
        deploySimpleOwnerFixture
      );

      const setOwner = await (
        await simpleOwnable.setOwner(otherAccount)
      ).wait();
      expect(otherAccount).to.not.equal(ethers.ZeroAddress);
      expect(await simpleOwnable.owner()).to.equal(otherAccount.address);
    });
  });
});

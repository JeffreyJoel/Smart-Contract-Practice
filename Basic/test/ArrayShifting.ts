// import {
//   time,
//   loadFixture,
// } from "@nomicfoundation/hardhat-toolbox/network-helpers";
// import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
// import { expect } from "chai";
// import { ethers } from "hardhat";

// describe("ArrayShifting", function () {
//   // We define a fixture to reuse the same setup in every test.
//   // We use loadFixture to run this setup once, snapshot that state,
//   // and reset Hardhat Network to that snapshot in every test.
//   async function deployArrayShiftingFixture() {
//     // Contracts are deployed using the first signer/account by default
//     const [owner, otherAccount] = await ethers.getSigners();

//     const ArrayShifting = await ethers.getContractFactory("ArrayShifting");
//     const arrayShifting = await ArrayShifting.deploy();

//     return { arrayShifting, owner, otherAccount };
//   }

//   describe("Deploy", function () {
//     it("Should check the existing array", async function () {
//       const { arrayShifting } = await loadFixture(
//         deployArrayShiftingFixture
//       );

// // const array =  await arrayShifting.arrayOfNumbers()

//       expect(await arrayShifting.arrayOfNumbers(0)).to.equal(1);
//       // expect(arrayShifting.arrayOfNumbers.length).to.not.equal(0);

//       // const arrayLength = await arrayShifting.arrayOfNumbers().length;
//       //  const arrayLength = await arrayShifting.arrayOfNumbers().length;
//       //  const array = await arrayShifting.arrayOfNumbers();
//     // console.log(arrayLength);
//     //   console.log(arrayLength);
      
      
//     });
//   });

//   describe("delete Array", function () {
//     it("Should delete the array", async function () {
//       const { arrayShifting } = await loadFixture(
//         deployArrayShiftingFixture
//       );

//       const shift =await arrayShifting.shiftArray(0)
 
//         console.log(shift);
        

//       //  expect(arrayShifting.arrayOfNumbers.length).to.not.equal(0);
//       // expect(await simpleOwnable.owner()).to.equal(otherAccount.address);
//     });
//   });
// });

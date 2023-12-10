const hre = require("hardhat");
require("@nomicfoundation/hardhat-verify");
async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function main() {
  const LoyalityToken = await ethers.deployContract("LoyalityToken");
  await LoyalityToken.waitForDeployment();

  const UnitToken = await ethers.deployContract("UnitToken");
  await UnitToken.waitForDeployment();

  await sleep(30 * 1000);

  // Verify the RektLock Contract
  // await hre.run("verify:verify", {
  //   address: LoyalityToken.target,
  //   contract: "contracts/LoayalityToken.sol:LoyalityToken",
  // });

  console.log("Verified Loyality Token :", LoyalityToken.target);

  console.log("Verifying Unit Token ...");

  // await hre.run("verify:verify", {
  //   address: UnitToken.target,
  //   contract: "contracts/UnitToken.sol:UnitToken",
  // });

  console.log("Verified Unit Token :", UnitToken.target);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

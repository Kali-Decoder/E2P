const hre = require("hardhat");
const  utilsAddress  = require("../constants");
async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function main() {
  const market = await ethers.deployContract("EnergyMarket", [
    utilsAddress.UnitToken,
    utilsAddress.AnonContractVerifier,
  ]);
  await market.waitForDeployment();

  await sleep(30 * 1000);

  // Verify the RektLock Contract
  await hre.run("verify:verify", {
    address: market.target,
    constructorArguments: [
      utilsAddress.UnitToken,
      utilsAddress.AnonContractVerifier,
    ],
  });
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

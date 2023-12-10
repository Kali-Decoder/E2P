const hre = require("hardhat");
const  utilsAddress  = require("../constants");
async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function main() {
  const nft = await ethers.deployContract("EnergyNFT");
  await nft.waitForDeployment();

  await sleep(30 * 1000);

  // Verify the RektLock Contract
  await hre.run("verify:verify", {
    address: nft.target,
    constructorArguments: [],
  });
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

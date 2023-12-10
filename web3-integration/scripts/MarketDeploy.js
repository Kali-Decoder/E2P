const hre = require("hardhat");
const  utilsAddress  = require("../constants");
async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function main() {
  const market = await ethers.deployContract("EnergyMarket", [
    "0xDD0570Edb234A1753e5aD3f8Be8fa7515cdA1C12",
    "0x26Ca7d950d8CCC74A1114B63b3A47d3Ba6F64916",
  ]);
  await market.waitForDeployment();
  console.log("Verified Market :", market.target);
  await sleep(30 * 1000);

  // Verify the RektLock Contract
  // await hre.run("verify:verify", {
  //   address: market.target,
  //   constructorArguments: [
  //     "0xDD0570Edb234A1753e5aD3f8Be8fa7515cdA1C12",
  //     "0x26Ca7d950d8CCC74A1114B63b3A47d3Ba6F64916",
  //   ],
  // });
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

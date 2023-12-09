const hre = require("hardhat");

async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function main() {
  const verifier = await ethers.deployContract("Verifier");
  await verifier.waitForDeployment();

  const _verifierAddress = verifier.target;

  const appId = BigInt(
    "609246576999142755181287323616835836365844250624"
  ).toString();

  const anonAadhaarVerifier = await ethers.deployContract(
    "AnonAadhaarVerifier",
    [_verifierAddress, appId]
  );
  let anonContractAddress= await anonAadhaarVerifier.waitForDeployment();
    console.log(`AnonAadharVerifier Address  ${anonContractAddress.target}`)
  const _anonAadhaarVerifierAddress = verifier.target;
  console.log(`AnonAadharVerifier Address  ${await _anonAadhaarVerifierAddress}`);

  await sleep(30 * 1000);

  // Verify the RektLock Contract
  await hre.run("verify:verify", {
    address: anonAadhaarVerifier.target,
    constructorArguments: [_anonAadhaarVerifierAddress, appId],
  });
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

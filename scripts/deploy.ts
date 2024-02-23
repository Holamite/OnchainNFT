import { ethers } from "hardhat";

async function main() {
  const chainNFT = await ethers.deployContract("ChainNFT");

  await chainNFT.waitForDeployment();

  console.log(`Contract deployed to ${chainNFT.target}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

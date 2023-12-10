require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
const { HardhatUserConfig } = require("hardhat/config");
require("hardhat-dependency-compiler");
const { PRIVATE_KEY, POLYGON_API_KEY, CELO_API_KEY, SCROLL_API_KEY } =
  process.env;
module.exports = {
  defaultNetwork: "localhost",
  networks: {
    localhost: {
      url: " http://127.0.0.1:8545/",
    },
    hardhat: {},
    PolygonMumbai: {
      url: "https://rpc-mumbai.maticvigil.com",
      accounts: [PRIVATE_KEY],
    },
    matic: {
      url: "https://rpc-mainnet.maticvigil.com",
      accounts: [PRIVATE_KEY],
    },
    alfajores: {
      url: "https://alfajores-forno.celo-testnet.org",
      accounts: [PRIVATE_KEY],
    },
    scrollSepolia: {
      url: "https://sepolia-rpc.scroll.io/",
      accounts: [PRIVATE_KEY],
    },
    BaseSepolia: {
      url: "https://sepolia.base.org",
      accounts: [PRIVATE_KEY],
    },
  },
  etherscan: {
    // apiKey: POLYGON_API_KEY,
    apiKey: {
      alfajores: CELO_API_KEY,
      celo: "<CELOSCAN_API_KEY>"
  },
    scrollSepolia: SCROLL_API_KEY,
    customChains: [
      {
          network: "alfajores",
          chainId: 44787,
          urls: {
              apiURL: "https://api-alfajores.celoscan.io/api",
              browserURL: "https://alfajores.celoscan.io",
          },
      },
      {
          network: "celo",
          chainId: 42220,
          urls: {
              apiURL: "https://api.celoscan.io/api",
              browserURL: "https://celoscan.io/",
          },
      },
  ]
  },
  solidity: {
    version: "0.8.19",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  dependencyCompiler: {
    paths: ["anon-aadhaar-contracts/contracts/Verifier.sol"],
  },
};

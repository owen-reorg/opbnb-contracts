import {HardhatUserConfig, task} from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomicfoundation/hardhat-foundry";
import dotenv from 'dotenv';
dotenv.config();

const config: HardhatUserConfig = {
  networks: {
    opbnb: {
      url: "https://opbnb-testnet-rpc.bnbchain.org/",
      chainId: 5611, // Replace with the correct chainId for the "opbnb" network
      gasPrice: 20000000000,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: {
      opbnb: process.env.NODEREAL_KEY,//replace your nodereal API key
    },
    customChains: [
      {
        network: "opbnb",
        chainId: 5611, // Replace with the correct chainId for the "opbnb" network
        urls: {
          apiURL:    `https://open-platform.nodereal.io/${process.env.NODEREAL_KEY}/op-bnb-testnet/contract/`,
          browserURL: "https://opbnbscan.com/",
        },
      },
    ],
  },
  // etherscan: {
  //   apiKey: {
  //     opbnb: process.env.BSCSCAN_KEY,  // bscscan key
  //   },
  //   customChains: [
  //     {
  //       network: "opbnb",
  //       chainId: 5611,
  //       urls: {
  //         apiURL:    "https://api-opbnb-testnet.bscscan.com/api",
  //         browserURL: "https://opbnb-testnet.bscscan.com",
  //       },
  //     },
  //   ],
  // },
  solidity: {
    compilers: [
      {
        version: '0.8.15',
        settings: {
          optimizer: {enabled: true, runs: 10_000},
        },
      },
      {
        version: '0.5.17', // Required for WETH9
        settings: {
          optimizer: {enabled: true, runs: 10_000},
        },
      },
    ],
  },
};

export default config;

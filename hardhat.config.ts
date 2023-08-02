import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  networks: {
    opbnb: {
      url: "https://opbnb-testnet-rpc.bnbchain.org/",
      chainId: 5611, // Replace with the correct chainId for the "opbnb" network
      gasPrice: 20000000000,
    },
  },
  etherscan: {
    apiKey: {
      opbnb: "b056e97a746c46a3937b48150293fdea",//replace your nodereal API key
    },
    customChains: [
      {
        network: "opbnb",
        chainId: 5611, // Replace with the correct chainId for the "opbnb" network
        urls: {
          apiURL:    "https://open-platform.nodereal.io/b056e97a746c46a3937b48150293fdea/op-bnb-testnet/contract/",
          browserURL: "https://opbnbscan.com/",
        },
      },
    ],
  },
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

require("@nomiclabs/hardhat-waffle");
// require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");
// require("hardhat-gas-reporter");
require("solidity-coverage");
const chai = require("chai");
const { solidity } = require("ethereum-waffle");
chai.use(solidity);

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
const ALCHEMY_ROPSTEN_API_KEY = "_fkmtC9cThIfpPEuNQ2G2VR6VJPFyEyF";
const ALCHEMY_RINKEBY_API_KEY = "LY7RQD9L3-7DuQaXqDY9ulOH7egxbmum";
const INFURA_RINKEBY_API_KEY = "ffd3c0f0346e495291d9407a54a14b72";
const PRIVATE_KEY = "15eb7e6896aa88a02bf1e5d8fa3497d2fb29964c5889955078b0a7448f95b33f";

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: `https://eth-ropsten.alchemyapi.io/v2/${ALCHEMY_ROPSTEN_API_KEY}`,
      accounts: [`${PRIVATE_KEY}`]
    },
    rinkeby: {
      url: `https://eth-rinkeby.alchemyapi.io/v2/${ALCHEMY_RINKEBY_API_KEY}`,
      accounts: [`${PRIVATE_KEY}`]
    },
    infura_rinkeby: {
      url: `https://rinkeby.infura.io/v3/${INFURA_RINKEBY_API_KEY}`,
      accounts: [`${PRIVATE_KEY}`]
    }
  },
  // gasReporter: {
  //   gasPrice: 100,
  //   showTimeSpent: true,
  //   currency: "USD"
  // },
	etherscan: {
    apiKey: {
      ropsten: "SD61EDRUZ7W3KHXXFTSG7YI5Q66CPHFT5R",
      rinkeby: "SD61EDRUZ7W3KHXXFTSG7YI5Q66CPHFT5R"
    }
  }
};

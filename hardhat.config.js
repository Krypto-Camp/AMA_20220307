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
const ALCHEMY_ROPSTEN_API_KEY = YOUR_ALCHEMY_ROPSTEN_API_KEY;
const ALCHEMY_RINKEBY_API_KEY = YOUR_ALCHEMY_RINKEBY_API_KEY;
const INFURA_RINKEBY_API_KEY = YOUR_INFURA_RINKEBY_API_KEY;
const PRIVATE_KEY = YOUR_PRIVATE_KEY;

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
      ropsten: YOUR_apiKey,
      rinkeby: YOUR_apiKey
    }
  }
};

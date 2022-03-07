# AMA_20220307
AMA for ERC20 practice
## npm
```
npx hardhat accounts
  - Create an empty hardhat.config.js
npm init -y
npm install --save-dev hardhat
npm install --save-dev @openzeppelin/contracts @openzeppelin/hardhat-upgrades @openzeppelin/hardhat-defender 
npm install --save-dev ethereum-waffle @nomiclabs/hardhat-ethers @nomiclabs/hardhat-etherscan solidity-coverage ethers dotenv
npm install --save-dev hardhat-gas-reporter @nomiclabs/hardhat-waffle chai
```

## mkdir contracts && npx hardhat compile
```
mkdir contracts
npx hardhat compile
```
## mkdir test / gas-report && npx hardhat test
```
npx hardhat test
npx hardhat coverage
```

## mkdir scripts
```
npx hardhat run scripts/deploy.js --network rinkeby
```
## verify
```
npx hardhat verify --network rinkeby YOUR_CONTRACT_ADDRESS
```
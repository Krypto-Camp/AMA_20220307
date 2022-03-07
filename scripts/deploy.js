async function main() {
  const [deployer, user1] = await ethers.getSigners();
  console.log(
    "Deploying the contracts with the account:",
    await deployer.getAddress()
  );

  console.log("Account balance:", (await deployer.getBalance()).toString());

  // Token1 Contract deployment
  const Token1 = await ethers.getContractFactory("Token1");
  const token1 = await Token1.deploy();
  await token1.deployed();

  console.log("Token1 address:", token1.address);

  // Token2 Contract deployment
  const Token2 = await ethers.getContractFactory("Token2");
  const token2 = await Token2.deploy();
  await token2.deployed();

  console.log("Token2 address:", token2.address);

  // TokenSwap Contract deployment
  const TokenSwap = await ethers.getContractFactory("TokenSwap");
  const tokenSwap = await TokenSwap.deploy(
    token1.address, deployer.address, 100,
    token2.address, user1.address, 200
  );
  await tokenSwap.deployed();

  console.log("TokenSwap address:", tokenSwap.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

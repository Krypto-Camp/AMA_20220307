const { expect } = require("chai");

describe("ERC20 Token contract", function () {
	let Token1;
	let token1;
	let Token2;
	let token2;
  let TokenSwap;
  let tokenSwap;  
	let owner;
	let user1;
	let user2;

	beforeEach(async () => {
		[owner, user1, user2] = await ethers.getSigners();
		Token1 = await ethers.getContractFactory("Token1");
		token1 = await Token1.deploy();

		Token2 = await ethers.getContractFactory("Token2");
		token2 = await Token2.deploy();

    TokenSwap = await ethers.getContractFactory("TokenSwap");
    tokenSwap = await TokenSwap.deploy(
      token1.address, user1.address, 1111,
      token2.address, user2.address, 2222
    );
    await tokenSwap.deployed();

  });

	describe("Token1 & Token2 Deployment", function(){
		it("Should check the owner balance and total supply.", async function(){
			const ownerBalance = await token1.balanceOf(owner.address);
			expect(await token1.totalSupply()).to.equal(ownerBalance);
      // console.log(ownerBalance);
		})

		it("Should mint the right supply and transfer to other account.", async function(){
			await token1.mint(user1.address,100);
			const user1Balance = await token1.balanceOf(user1.address);
			expect(user1Balance).to.equal(100);

      await token1.connect(user1).transfer(user2.address, 70);
			const user1Balance1 = await token1.balanceOf(user1.address);
			expect(user1Balance1).to.equal(30);
			const user2Balance1 = await token1.balanceOf(user2.address);
			expect(user2Balance1).to.equal(70);

			await token2.mint(user2.address,200);
			const user2Balance = await token2.balanceOf(user2.address);
			expect(user2Balance).to.equal(200);
      
      await token2.connect(user2).transfer(user1.address, 99);
			const user1Balance2 = await token2.balanceOf(user1.address);
			expect(user1Balance2).to.equal(99);
			const user2Balance2 = await token2.balanceOf(user2.address);
			expect(user2Balance2).to.equal(101);
    })


		it("Should swap to both smart contract", async function(){
			totalApprove = 10000;
			await token1.mint(user1.address,1111);
			console.log("user1 balance of token1 after swap: ", await token1.balanceOf(user1.address));
			await token2.mint(user2.address,2222);
			console.log("user2 balance of token2 after swap: ", await token2.balanceOf(user2.address));

			console.log("----------------------------------------------------------------");
      // await expect(tokenSwap.connect(owner).swap()).to.be.revertedWith("Not authorized");

			await token1.connect(user1).approve(user1.address, totalApprove);
			await token1.connect(user1).approve(tokenSwap.address, totalApprove);

			await token2.connect(user2).approve(user2.address, totalApprove);
			await token2.connect(user2).approve(tokenSwap.address, totalApprove);

			await tokenSwap.connect(user1).swap();
			console.log("user1 balance of token2 after swap: ", await token2.balanceOf(user1.address));
			console.log("user2 balance of token1 after swap: ", await token1.balanceOf(user2.address));
    })

	});

});
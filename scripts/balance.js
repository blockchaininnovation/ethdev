const { ethers, network } = require("hardhat");

async function main() {

    // 使用するアカウントのアドレス
    const userAddress = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266";

    const balanceInWei = await ethers.provider.getBalance(userAddress);
    const balanceInEth = ethers.formatEther(balanceInWei);
    console.log("balance of " + userAddress + ": " + balanceInEth + " [eth]");
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });

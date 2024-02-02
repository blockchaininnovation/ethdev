const { ethers, network } = require("hardhat");

async function main() {
    // 既にデプロイされたLockコントラクトのアドレス
    const deployedLockAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

    // 使用するアカウントのアドレス
    const userAddress = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266";
    // const userAddress = "0x70997970C51812dc3A010C7d01b50e0d17dc79C8";

    // Lockコントラクトのインターフェースを取得
    const Lock = await ethers.getContractFactory("Lock");

    // 既存のコントラクトのインスタンスを取得
    const lock = await Lock.attach(deployedLockAddress);

    // 指定したアドレスのSignerを取得
    const signer = await ethers.getSigner(userAddress);

    // 指定したアドレスでwithdraw関数を実行
    try {
        console.log("Attempting to withdraw with specified address...");
        await lock.connect(signer).withdraw();
        console.log("Withdrawal successful.");
    } catch (error) {
        console.error("Failed to withdraw:", error.message);
    }
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });

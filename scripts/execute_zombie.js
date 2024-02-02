const { ethers } = require("hardhat");

async function main() {
    const deployedContractAddress = "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0";

    // コントラクトのインターフェースを取得
    const ZombieFeeding = await ethers.getContractFactory("ZombieFeeding");

    // デプロイ済みコントラクトのインスタンスを取得
    const zombieFeeding = await ZombieFeeding.attach(deployedContractAddress);
    
    // イベント取得
    // zombieFactory.on("NewZombie", (zombieId, name, dna) => {
    //     console.log(`New Zombie created: Id=${zombieId}, Name=${name}, DNA=${dna}`);
    // });

    // await zombieFactory.createRandomZombie("aiueo");
    await zombieFeeding.createRandomZombie("ABCDEFG");
    
    const zombiesCount = 2;

    // すべてのZombieを出力
    for (let i = 0; i < zombiesCount; i++) {
        const zombie = await zombieFeeding.zombies(i);
        console.log(`Zombie ${i}:`, zombie);
    }
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error("Error:", error);
        process.exit(1);
    });

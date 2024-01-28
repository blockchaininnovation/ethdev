const { ethers } = require("hardhat");

async function main() {
    const deployedContractAddress = "0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9";

    // コントラクトのインターフェースを取得
    const ZombieFactory = await ethers.getContractFactory("ZombieFactory");

    // デプロイ済みコントラクトのインスタンスを取得
    const zombieFactory = await ZombieFactory.attach(deployedContractAddress);
    
    // イベント取得
    zombieFactory.on("NewZombie", (zombieId, name, dna) => {
        console.log(`New Zombie created: Id=${zombieId}, Name=${name}, DNA=${dna}`);
    });

    await zombieFactory.createRandomZombie("aiueo");
    await zombieFactory.createRandomZombie("ABCDEFG");
    
    const zombiesCount = 13;

    // すべてのZombieを出力
    for (let i = 0; i < zombiesCount; i++) {
        const zombie = await zombieFactory.zombies(i);
        console.log(`Zombie ${i}:`, zombie);
    }
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error("Error:", error);
        process.exit(1);
    });

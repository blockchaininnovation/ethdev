// pragma solidity ^0.4.19;
pragma solidity >=0.4.19;

contract ZombieFactory {
    event NewZombie(uint zombieId, string name, uint dna);

    uint dnaDigits = 16;
    uint dnaModulus = 10 ** dnaDigits;

    struct Zombie {
        string name;
        uint dna;
    }

    Zombie[] public zombies;

    mapping(uint => address) public zombieToOwner;
    mapping(address => uint) ownerZombieCount;

    // function _createZombie(string _name, uint _dna) internal {
    function _createZombie(string memory _name, uint _dna) internal {
        // uint id = zombies.push(Zombie(_name, _dna)) - 1;

        zombies.push(Zombie(_name, _dna));
        uint id = zombies.length - 1;
        zombieToOwner[id] = msg.sender;
        ownerZombieCount[msg.sender]++;
        // NewZombie(id, _name, _dna);
        emit NewZombie(id, _name, _dna);
    }

    // function _generateRandomDna(string _str) private view returns (uint) {
    function _generateRandomDna(
        string memory _str
    ) private view returns (uint) {
        // uint rand = uint(keccak256(_str));
        uint rand = uint(keccak256(bytes(_str)));

        return rand % dnaModulus;
    }

    // function createRandomZombie(string _name) public {
    function createRandomZombie(string calldata _name) public {
        // require(ownerZombieCount[msg.sender] == 0);

        // _name = "aeae";

        uint randDna = _generateRandomDna(_name);
        randDna = randDna - (randDna % 100);
        _createZombie(_name, randDna);
    }
}

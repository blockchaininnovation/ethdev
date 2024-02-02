// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
import "hardhat/console.sol";

contract Sample {
    int[] public states;

    constructor() {}

    function doSomething1(string calldata a) public {
        // do something
    }

    function doSomething2(string memory a) public {
        a = "abc";
        // do something
    }

    function doSomething3() public {
        int[] storage arr = states;
        // do something
    }

    function doSomething4() public {
        int[] memory arr = new int[](3);
        // do something
    }
}

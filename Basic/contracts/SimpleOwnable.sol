// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

contract SimpleOwnable {
    address public owner;

    constructor(){
        owner = msg.sender;
    }

    modifier onlyOwner(){
        require(owner == msg.sender, "You're not the owner");
        _;
    }

    function setOwner(address _newOwner) external onlyOwner{
        require(_newOwner != address(0), "Invalid address"); //sanity check
        owner = _newOwner;
    }
}
  

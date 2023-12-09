
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
contract UnitToken is ERC20Burnable, Ownable {
    constructor() ERC20("THOR", "TH") {
        mint(msg.sender, 10000);
    }

    function mint(address to, uint256 amount) public {
        _mint(to, amount * (10**18));
    }
    
    function burn(uint256 value) public override {
        _burn(msg.sender, value);
    }
}
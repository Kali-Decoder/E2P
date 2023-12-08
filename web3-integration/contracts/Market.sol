// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";

contract EnergyMarket {
    using SafeERC20 for IERC20;

    address public seller;
    IERC20 public energyToken;

    enum UserRole{
        USER,COMPANY
    }
    struct UserProfile {
        uint id;
        uint256 sellUnit;
        uint256 buyUnit;
        bool isRegistered;
    }

    mapping(address => UserProfile) public userProfiles;

    event EnergySold(address indexed buyer, uint256 amount);
    event EnergyBought(address indexed seller, address indexed buyer, uint256 amount);
    event Deposit(address indexed user, uint256 amount);
    event Withdraw(address indexed user, uint256 amount);

    uint userID;
    constructor(address _energyToken) {
        energyToken = IERC20(_energyToken);
    }

    modifier onlyRegisteredUser() {
        require(userProfiles[msg.sender].isRegistered, "User not registered");
        _;
    }

    function registerUser() external {
        userID++;
        require(!userProfiles[msg.sender].isRegistered, "User already registered");
        userProfiles[msg.sender].isRegistered = true;
        userProfiles[msg.sender].id=userID;
    }


    function sellEnergy(uint256 amount) external  {
        require(energyToken.balanceOf(address(this)) >= amount, "Insufficient energy balance");
        
        energyToken.safeTransfer(msg.sender, amount);
        emit EnergySold(msg.sender, amount);
    }

    function buyEnergy(address sellerAddr, uint256 amount) external onlyRegisteredUser {
        require(amount > 0, "Amount must be greater than 0");
        require(userProfiles[sellerAddr].isRegistered, "Seller not registered");

        energyToken.safeTransferFrom(msg.sender, address(this), amount);
        userProfiles[sellerAddr].sellUnit += amount;

        energyToken.safeTransfer(sellerAddr, amount);
        userProfiles[msg.sender].buyUnit += amount;

        emit EnergyBought(sellerAddr, msg.sender, amount);
    }

    function getEnergyUnitBalance() external view returns (uint256) {
        return energyToken.balanceOf(address(this));
    }

    function getUserSellBalance() external view onlyRegisteredUser returns (uint256) {
        return userProfiles[msg.sender].sellUnit;
    }
     function getUserBuyBalance() external view onlyRegisteredUser returns (uint256) {
        return userProfiles[msg.sender].buyUnit;
    }
}

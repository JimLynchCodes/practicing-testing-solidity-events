// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract BlockChat {

  event MessageSpoken(string message, uint messageCount);

  uint messageCount;

  function saySomething(string calldata message) external returns (string memory) {

    messageCount++;

    emit MessageSpoken(message, messageCount);

    return 'thank you for that beautiful message.';
  }

}

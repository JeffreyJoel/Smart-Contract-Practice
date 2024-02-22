// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;

contract ArrayShifting {
    uint8[] public arrayOfNumbers = [1, 2, 3, 4, 5];

    function shiftArray(uint8 _index) external {
        require(arrayOfNumbers.length >= _index, "not a valid index");

        for (uint i = _index; i < arrayOfNumbers.length; i++) {
            arrayOfNumbers[i] = arrayOfNumbers[i + 1];
        }
        arrayOfNumbers.pop();
    }
}

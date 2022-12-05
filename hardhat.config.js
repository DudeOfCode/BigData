/** @type import('hardhat/config').HardhatUserConfig */
require('dotenv').config();
require("@nomiclabs/hardhat-ethers");
const API_URL = process.env.API_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
// PRIVATE_KEY = '0x4dbd3a651326474d886261b9ebcabd270c334ff3a296972c740dffb2223ba110'
// API_URL = 'https://polygon-mumbai.g.alchemy.com/v2/6VKSkrkRMXtqp1eQHln_n_lEAgvLwsDn'

module.exports = {
  solidity: "0.8.17",
  networks: {
    matic: {
      url: API_URL,
      accounts: [`${PRIVATE_KEY}`]
    },
  },
};

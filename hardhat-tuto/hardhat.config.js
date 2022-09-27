require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */

const account =
  "ebc0d6f571962c8755c34e7194cc09b5d89f7dd68115456492987bf7640d7b78";

module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/PQFwIBzK185Ab9azn8FXU4uHPgA4HZk-",
      accounts: [account],
    },
  },
};

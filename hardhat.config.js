require("@nomicfoundation/hardhat-toolbox");
require('hardhat-ethernal');

// ETHERNAL_API_TOKEN=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJlYmFzZVVzZXJJZCI6InpqeUJzZ25qNnhQclFkM0lZUDlGbUVnUmhvazEiLCJhcGlLZXkiOiIzODg2OFdYLTY3Wk03MkgtSDJGWERCUy0xWVZTOFowXHUwMDAxIiwiaWF0IjoxNzA2NzQ0NDI4fQ.p-p8DgJLXsyJb-6CEzZlPiKd8biMNtNAd_O8FsEq61M

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  networks: {
    hardhat: {
      chainId: 1337,
      initialBaseFeePerGas: 0
    },
  },
};


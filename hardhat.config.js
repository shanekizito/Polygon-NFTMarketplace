require("@nomiclabs/hardhat-waffle");
const fs=require('fs')
const privateKey=fs.readFileSync(".secret").toString()

const projectId="459f0859605144798142bbe845fc641b"

module.exports = {
  networks: {
    hardhat:{
      chainId : 1337
    },
    mumbai:{
      url:`https://polygon-mumbai.infura.io/v3/${projectId}`,
      accounts: []
    },
    mainnet:{
      url:`https://polygon-mainnet.infura.io/v3/${projectId}`,
      accounts: []
    }
  },
  solidity: "0.8.4",
};

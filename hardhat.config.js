require('@nomiclabs/hardhat-waffle')
require('@nomiclabs/hardhat-etherscan')
require('dotenv').config()

const { API_URL, PRIVATE_KEY, ETHERSCAN_API } = process.env

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: '0.8.4',
  defaultNetwork: 'rinkeby',
  networks: {
    rinkeby: {
      url: API_URL,
      accounts: [PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: ETHERSCAN_API,
  },
}

# NFT ERC721 Collection

# STEPS FOR CREATING COLLECTION

- Step 1 - Upload pictures in pinata with the metadata.json file.
- Step 2 - (Optional) - Upload hidden folder with hidden image and metadata. (Change image url link in the metadata.json file.
- Step 3 - Signup in the polygon scan [CLICK HERE](https://polygonscan.com/register) and copy the api key token.
- Step 4 - Clone the repository .
- Step 5 - npm i -g truffle. 
- Step 6 - truffle dashboard and go to the localhost:24012 url.
- Step 7 - Connect the wallet to the desired network where you want to list the NFT Collection. 
- Step 8 - In new terminal cd smart-contract > yarn
- Step 9 - Rename the .env.example to .env
- Step 10 - Change COLLECTION_URI_PREFIX=ipfs://KEY and BLOCK_EXPLORER_API_KEY= APIKEY
- Step 11 - Run command yarn rename-contract NEW_CONTRACT_NAME
- Step 12 - In CollectionConfig.ts file change contractName, tokenName,tokenSymbol, maxSupply and hiddenMetadataUri accordingly.Change different prices also .
- Step 13 - Run command yarn deploy --network truffle
- Step 14 - Confirm transaction from the browser localhost:24012 and then metamask.
- Step 15 - Copy deployed contract address from terminal and paste it in the contractAddress in CollectionConfig.ts
- Step 16 - Now to verify contract run yarn verify CONTRACTADDRESS --network truffle and Repeat step 14.
- Step 17 - In new terminal now go to minting dapp folder by cd minting-dapp
- Step 18 - Run command yarn to install dependencies. 
- Step 19 - Run yarn dev-server command and go the localhost:8080
- Step 20 - Go to the second terminal where you are in the smart contract directory.
- Step 21 - To open whitelist run command yarn whitelist-open --network truffle and Repeat step 14.
- Step 22 - Go to whitelist.json file and add address of your wallet in the first field.
- Step 23 - Go to the localhost URL and mint through the same address and refresh to see the change in supply. 
- Step 24 - To close whitelist run command yarn whitelist-close --network truffle and Repeat step 14.
- Step 25 - To open Presale run command yarn presale-open --network truffle and Repeat step 14.
- Step 26 - Go to the localhost URL and mint through the any address and refresh to see the change in supply. 
- Step 27 - To close Presale run command yarn presale-close --network truffle and Repeat step 14.
- Step 28 - To open sale run command yarn public-sale-open --network truffle and Repeat step 14.
- Step 29 - Go to the localhost URL and mint through the any address and refresh to see the change in supply. 
- Step 30 - To close sale run command yarn public-sale-close --network truffle and Repeat step 14.
- Step 31 - To reveal the NFT's run command yarn reveal --network truffle
- Step 32 - To withdraw funds go to your contract address from the explorer and connect wallet and click on Withdraw function at the last .
Example - https://rinkeby.etherscan.io/address/0xad2A79880dad4fe5320347a3e851788432E1f305#writeContract

### Software
- [Visual Studio Code](https://code.visualstudio.com/) (with the [Solidity](https://marketplace.visualstudio.com/items?itemName=JuanBlanco.solidity) extension)
- [NodeJs](https://nodejs.org/) (with the [Yarn package manager](https://yarnpkg.com/getting-started/install))

### Services
- Etherscan free API key _(optional: used for the automated contract verificiation, as well as retrieving the current values for gas cost estimation)_

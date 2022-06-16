import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import { ethereumTestnet, ethereumMainnet } from '../lib/Networks';
import { openSea } from '../lib/Marketplaces';
import whitelistAddresses from './whitelist.json';

const CollectionConfig: CollectionConfigInterface = {
  testnet: ethereumTestnet,
  mainnet: ethereumMainnet,
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: 'NewTestAA',
  tokenName: 'New TestAA',
  tokenSymbol: 'NTA',
  hiddenMetadataUri: 'ipfs://QmdqVxvjnr4MgJBAziC5FB1qb11h8oArUxaxxwmc8tB7tC/hidden.json',
  maxSupply: 8,
  whitelistSale: {
    price: 0.05,
    maxMintAmountPerTx: 1,
  },
  preSale: {
    price: 0.07,
    maxMintAmountPerTx: 2,
  },
  publicSale: {
    price: 0.1,
    maxMintAmountPerTx: 5,
  },
  contractAddress: "0xad2A79880dad4fe5320347a3e851788432E1f305",
  marketplaceIdentifier: 'my-nft-token',
  marketplaceConfig: openSea,
  whitelistAddresses: whitelistAddresses,
};

export default CollectionConfig;

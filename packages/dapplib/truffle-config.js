require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz kiwi october slab chapter deny radar purpose grace drink flip spirit'; 
let testAccounts = [
"0x1a08b46a9584999e0acaeff5fe0a3cfef7773f69c4509597607d045e1e3fc70a",
"0xcdc2d90f30a0d94b9115487c79afbe739ddf79397a6898bf7fb45f4f87dd5e6b",
"0x44cfccda2516bc39e0ba574cf995d25d9b3f7b9ad9af9a8a7c3db43ee951b0a9",
"0x516e2edc3d1b7cd60fc5082356a301e6543144c88d6af8fb56fb239d07d54a9d",
"0x3baab94f4a453d6282a2cfc766fcd2558c308a8fba8b6f3b40fb38f3e73c9643",
"0x858622f603a475ddeb73b8732b9efe6bb68b9af219e4bda843658e9eb8c0eb0a",
"0x825e75297edfdc3a103338567e13a9b5cda910cbba054aa17c2d95098ad1c8ea",
"0xd60a26060fd89c202daf4accd72c9492dfcc6dd1b35522568cc59a799aec4968",
"0x84ecdbd511251ad6eacdbd3e6c9bf9c07410e1aa577f99d7b02f0f8945e8fffb",
"0x7834c94704d6cf1c5ebc8aed742fa974b9efa854da046a948c7ded6fb4c5ecb9"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};



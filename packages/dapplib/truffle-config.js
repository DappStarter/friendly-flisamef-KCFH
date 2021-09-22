require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid nation flock system egg develop remain snow harvest only forget slight'; 
let testAccounts = [
"0xa2688440f45e3a367e732ac010403fb0507da6a3ab1475a9341962e8952b482f",
"0xdc79ad318059353ac97a7e81e3f9276a374f441da05af1b8bba08a6e26b063b5",
"0x1c4d8124eaaf2cce3ce66b24f6c376f8593f51924d44c053c4a03a1bad353362",
"0x090c51dea16b4e22eec0093d93ce1f89ea5fe98aa5e86f3c6f3464c914b2d340",
"0xaae362c6e0685562223f7c47be16e004f007dfa541da69a934e559782ee9ed61",
"0x4c4047f97ac4c94c8dd8a065eb9068cff447c746bc32f15f8c4605db50f29616",
"0x6319899c9cc79ef393d240e0eb9dd5011964bd304dc42479010f63af633a1e9a",
"0xd8fec9293816fabdadb5ec02517802ae10244505b85a292ec3cc44233f870eac",
"0x729d994f3576ac6844423d14819c6899acbce6efa5d3bdfb5121b2d3d171ff2c",
"0xbd9a3eb714f897bd4df529ee2d3f86208933904bc865f10c4874719d4a621ed2"
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



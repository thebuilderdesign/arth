import Maker, { USD, DAI } from 'arthcoin.js';
import McdPlugin, { MATIC, BAT, MARTH } from 'arth-plugin-mcd';
import trezorPlugin from '@makerdao/dai-plugin-trezor-web';
import ledgerPlugin from '@makerdao/dai-plugin-ledger-web';
import walletLinkPlugin from '@makerdao/dai-plugin-walletlink';
import walletConnectPlugin from '@makerdao/dai-plugin-walletconnect';
import configPlugin from '@makerdao/dai-plugin-config';
import networkConfig from './references/config';
import { networkNameToId } from './utils/network';
// import { getQueryParamByName } from './utils/dev';

import maticAddresses from './references/contracts/matic';
import { createCurrency } from '@makerdao/currency';
import { POS_DAI } from 'arth-plugin-mcd/dist';

let _maker;

const otherNetworksOverrides = [
  {
    network: 'matic',
    contracts: maticAddresses
  }
].reduce((acc, { network, contracts }) => {
  for (const [contractName, contractAddress] of Object.entries(contracts)) {
    if (!acc[contractName]) acc[contractName] = {};
    acc[contractName][network] = contractAddress;
  }
  return acc;
}, {});

export function getMaker() {
  if (_maker === undefined) throw new Error('Maker has not been instatiated');
  return _maker;
}

const cdpTypes = [
  { currency: POS_DAI, ilk: 'POS_DAI-A' }
  // { currency: BAT, ilk: 'BAT-A' }
];

console.log(MATIC.symbol);

export async function instantiateMaker({
  rpcUrl,
  network,
  testchainId,
  backendEnv
}) {
  const addressOverrides = ['matic'].some(
    networkName => networkName === network
  )
    ? otherNetworksOverrides
    : {};

  const mcdPluginConfig = {
    cdpTypes,
    prefetch: false,
    addressOverrides
  };
  const walletLinkPluginConfig = {
    rpcUrl: networkConfig.rpcUrls[networkNameToId(network)]
  };

  const config = {
    log: false,
    plugins: [
      trezorPlugin,
      ledgerPlugin,
      [walletLinkPlugin, walletLinkPluginConfig],
      walletConnectPlugin,
      [McdPlugin, mcdPluginConfig]
    ],
    smartContract: {
      addressOverrides
    },
    provider: {
      url: rpcUrl,
      type: 'HTTP'
    },
    web3: {
      pollingInterval: network === 'testnet' ? 100 : null
    },
    token: {
      erc20: [
        {
          address: {
            matic: '0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063'
          },
          currency: createCurrency('POS_DAI')
        }
      ]
    },
    multicall: true
  };

  // Use the config plugin, if we have a testchainConfigId
  if (testchainId) {
    delete config.provider;
    config.plugins.push([configPlugin, { testchainId, backendEnv }]);
  } else if (!rpcUrl) {
    // if (config.provider.type === 'HTTP')
    rpcUrl = networkConfig.rpcUrls[networkNameToId(network)];
    console.log(rpcUrl);
    // else if (config.provider.type === 'WEBSOCKET')
    //   rpcUrl = networkConfig.wsRpcUrls[networkNameToId(network)];
    // else throw new Error(`Unsupported provider type: ${config.provider.type}`);
    if (!rpcUrl) throw new Error(`Unsupported network: ${network}`);
    config.provider.url = rpcUrl;
  }

  const maker = await Maker.create('http', config);

  // for debugging
  window.maker = maker;

  return maker;
}

export { USD, DAI, MATIC, BAT, MARTH };

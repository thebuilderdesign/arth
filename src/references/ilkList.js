import { POS_DAI, } from 'arth-plugin-mcd';

export default [
  {
    slug: 'posdai-a', // URL param
    symbol: 'POS_DAI-A', // how it's displayed in the UI
    key: 'POS_DAI-A', // the actual ilk name used in the vat
    gem: 'POS_DAI', // the actual asset that's being locked
    currency: POS_DAI, // the associated dai.js currency type
    networks: ['cronos']
  },
  // {
  //   slug: 'eth-b',
  //   symbol: 'MATIC-B',
  //   key: 'MATIC-B',
  //   gem: 'MATIC',
  //   currency: MATIC
  // },
  // {
  //   slug: 'rep-a',
  //   symbol: 'REP-A',
  //   key: 'REP-A',
  //   gem: 'REP',
  //   currency: REP
  // },
  // {
  //   slug: 'zrx-a',
  //   symbol: 'ZRX-A',
  //   key: 'ZRX-A',
  //   gem: 'ZRX',
  //   currency: ZRX
  // },
  // {
  //   slug: 'omg-a',
  //   symbol: 'OMG-A',
  //   key: 'OMG-A',
  //   gem: 'OMG',
  //   currency: OMG
  // },
  // {
  //   slug: 'dgd-a',
  //   symbol: 'DGD-A',
  //   key: 'DGD-A',
  //   gem: 'DGD',
  //   currency: DGD,
  //   networks: ['kovan', 'mainnet'],
  //   decimals: 9
  // }
  // {
  //   slug: 'dgd-a',
  //   symbol: 'DGD-A',
  //   key: 'DGD-A',
  //   gem: 'DGD',
  //   currency: DGD,
  //   decimals: 9
  // }
];

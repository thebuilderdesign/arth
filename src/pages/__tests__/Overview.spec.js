import React from 'react';
import * as navi from 'react-navi';
import { waitForElement, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MARTH, MATIC } from 'arth-plugin-mcd';
import Overview from '../Overview';
import { renderWithVaults } from '../../../test/helpers/render';
import { instantiateMaker } from '../../maker';
import styled from 'styled-components';

jest.mock('react-navi');
navi.useCurrentRoute.mockReturnValue({
  url: { search: '?network=testnet', pathname: '/test' }
});
navi.Link = styled.a``;

const ILK = 'MATIC-A';
const VAULT1_ETH = '6';
const VAULT1_ART = '80.1234567';
const VAULT2_ETH = '1';
const VAULT2_ART = '25';
const VIEWED_ADDRESS = '0x16fb96a5fa0427af0c8f7cf1eb4870231c8154b6';

let maker;

beforeAll(async () => {
  maker = await instantiateMaker({ network: 'testnet' });
  await maker
    .service('mcd:cdpManager')
    .openLockAndDraw(ILK, MATIC(VAULT1_ETH), MARTH(VAULT1_ART));

  await maker
    .service('mcd:cdpManager')
    .openLockAndDraw(ILK, MATIC(VAULT2_ETH), MARTH(VAULT2_ART));
});

afterEach(cleanup);

test('render overview page and display calculated vault values', async () => {
  const { getByText, getAllByText } = await renderWithVaults(
    <Overview viewedAddress={VIEWED_ADDRESS} />,
    VIEWED_ADDRESS
  );

  await waitForElement(() => getByText('Overview'));

  // Total collateral locked
  getByText('$1050.00 USD');
  // Total ARTH debt
  getByText(/105.\d{1,2} ARTH/);
  // Vault1 ARTH debt
  getByText(/80.\d{1,2} ARTH/);
  // Current ratio
  getByText(/11\d\d.\d\d%/);
  // Deposited
  getByText('6.00 MATIC');
  // Available to withdraw
  getByText('5.20 MATIC');
  // Privacy policy
  getByText('privacy policy');

  // Manage vault buttons link to correct vault
  const [vault2, vault1] = getAllByText('Manage Vault');
  expect(vault1.closest('a')).toHaveAttribute(
    'href',
    '/borrow/1?network=testnet'
  );
  expect(vault2.closest('a')).toHaveAttribute(
    'href',
    '/borrow/2?network=testnet'
  );
}, 15000);

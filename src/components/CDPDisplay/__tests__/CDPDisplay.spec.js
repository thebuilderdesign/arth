import React from 'react';
import {
  cleanup,
  fireEvent,
  within,
  wait,
  waitForElement
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MARTH, MATIC } from 'arth-plugin-mcd';
import { mineBlocks } from '@makerdao/test-helpers';

import CDPDisplay from '../';
import { renderWithAccount } from '../../../../test/helpers/render';
import { instantiateMaker } from '../../../maker';
import { SidebarProvider } from '../../../providers/SidebarProvider';
import SidebarBase from 'components/SidebarBase';
import * as navi from 'react-navi';

const { click, change } = fireEvent;
jest.mock('react-navi');
jest.mock('mixpanel-browser', () => ({
  init: jest.fn(),
  track: jest.fn()
}));

const ILK = 'MATIC-A';
const VAULT1_ETH = '5';
const AMOUNT = 210;

let maker;
let web3;

beforeAll(async () => {
  maker = await instantiateMaker({ network: 'testnet' });
  web3 = maker.service('web3');
  await maker
    .service('mcd:cdpManager')
    .openLockAndDraw(ILK, MATIC(VAULT1_ETH), MARTH(AMOUNT));
});

afterEach(cleanup);

test('Vault Display page and actions', async () => {
  navi.useCurrentRoute.mockReturnValue({ url: { pathname: '/borrow' } });
  const {
    getByText,
    getAllByText,
    getByTestId,
    getByRole,
    findByText,
    debug // eslint-disable-line no-unused-vars
  } = await renderWithAccount(
    <SidebarProvider>
      <CDPDisplay cdpId="1" />
      <SidebarBase />
    </SidebarProvider>
  );

  await findByText('MATIC-A Vault #1');
  await findByText('Opened a new Vault with id #', {}, { timeout: 15000 });

  /**Wallet Balances */
  const getBalancesEl = () =>
    getByText('Wallet Balances').parentElement.parentElement;
  const getEthBal = () =>
    within(getBalancesEl()).getByText('MATIC').nextElementSibling.textContent;
  const getEthUsdValue = () =>
    within(getBalancesEl()).getByText('MATIC').nextElementSibling
      .nextElementSibling.textContent;
  const getDaiBal = () =>
    within(getBalancesEl()).getByText('ARTH').nextElementSibling.textContent;
  const getDaiUsdValue = () =>
    within(getBalancesEl()).getByText('ARTH').nextElementSibling
      .nextElementSibling.textContent;

  expect(getEthBal()).toContain('89.');
  expect(getEthUsdValue()).toBe('$13.5K');
  expect(getDaiBal()).toContain('210.');
  expect(getDaiUsdValue()).toBe('$210.00');

  /**Deposit */
  click(getByText('Deposit'));
  await findByText(/would you like to deposit/);

  // wait for proxy check to complete
  await mineBlocks(web3, 5);

  // MATIC locked before
  const [, depositLabel] = getAllByText('MATIC locked');
  expect(depositLabel.nextElementSibling.textContent).toBe('5.00 MATIC');

  // submit deposit
  change(getByRole('textbox'), { target: { value: '2.33' } });
  const [, depSidebarBtn] = getAllByText('Deposit');

  await wait(() => {
    expect(depSidebarBtn).not.toHaveAttribute('disabled');
  });
  click(depSidebarBtn);

  //check event history
  const depEvent = await findByText('2.33', {}, { timeout: 15000 });
  expect(depEvent.parentElement.textContent).toBe(
    'Deposited 2.33 MATIC into Vault'
  );

  // check updated balances
  expect(getEthBal()).toContain('87.');
  expect(getEthUsdValue()).toBe('$13.1K');

  /**Generate */
  click(getByText('Generate'));
  await findByText(/would you like to generate/);

  // amount to generate before
  const generateLabel = getByText('Available to generate');
  expect(generateLabel.nextElementSibling.textContent).toBe('522.99 ARTH');

  // submit generate
  change(getByRole('textbox'), { target: { value: '25' } });
  const [, genSidebarBtn] = getAllByText('Generate');
  click(genSidebarBtn);

  //check event history
  const genEvent = await findByText('25.00', {}, { timeout: 15000 });
  expect(genEvent.parentElement.textContent).toBe(
    'Generated 25.00 new ARTH from Vault'
  );

  // check updated balances
  expect(getDaiBal()).toContain('235.');
  expect(getDaiUsdValue()).toBe('$235.00');

  /**Pay back */
  click(getByText('Pay back'));
  await findByText(/would you like to pay back/);

  // Outstanding ARTH debt before
  const [, debtLabel] = getAllByText('Outstanding ARTH debt');
  expect(debtLabel.nextElementSibling.textContent).toBe('235.00 ARTH');

  // must unlock ARTH first
  await waitForElement(() => getByTestId('allowance-toggle'));
  const allowanceBtn = getByTestId('allowance-toggle').children[1];
  await wait(() => {
    expect(allowanceBtn).not.toHaveAttribute('disabled');
  });
  click(allowanceBtn);
  await findByText('ARTH unlocked');

  // submit pay back
  change(getByRole('textbox'), { target: { value: '1.23' } });
  const [, pbSidebarBtn] = getAllByText('Pay back');

  // wait for hasProxy check to complete
  await wait(() => {
    expect(pbSidebarBtn).not.toHaveAttribute('disabled');
  });
  click(pbSidebarBtn);

  //check event history
  const pbEvent = await findByText('1.23', {}, { timeout: 15000 });
  expect(pbEvent.parentElement.textContent).toBe('Repaid 1.23 ARTH to Vault');

  // check updated balances
  expect(getDaiBal()).toContain('233.');
  expect(getDaiUsdValue()).toBe('$233.77');

  /**Withdraw */
  click(getByText('Withdraw'));
  await findByText(/would you like to withdraw/);

  // amount to withdraw before
  expect(getByText('Able to withdraw').nextElementSibling.textContent).toBe(
    '4.99 MATIC'
  );

  // submit withdraw
  change(getByRole('textbox'), { target: { value: '2' } });
  const [, wdSidebarBtn] = getAllByText('Withdraw');
  click(wdSidebarBtn);

  //check event history
  const wdEvent = await findByText(/Withdrew/, {}, { timeout: 15000 });
  expect(wdEvent.textContent).toBe('Withdrew 2.00 MATIC from Vault');

  // check updated balances
  expect(getEthBal()).toContain('89.');
  expect(getEthUsdValue()).toBe('$13.4K');
}, 45000);

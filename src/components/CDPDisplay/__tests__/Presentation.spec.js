import React, { Fragment } from 'react';
import * as navi from 'react-navi';
import Presentation from '../Presentation';
import { cleanup, fireEvent, waitForElement } from '@testing-library/react';
import {
  renderWithMaker,
  renderWithProviders
} from '../../../../test/helpers/render';
import { createCurrency, createCurrencyRatio } from '@makerdao/currency';
import { MATIC, USD, MARTH } from 'arth-plugin-mcd';
import * as math from 'arth-plugin-mcd/dist/math';
import BigNumber from 'bignumber.js';
import styled from 'styled-components';

jest.mock('mixpanel-browser', () => ({
  init: jest.fn(),
  track: jest.fn()
}));

jest.mock('react-navi');
navi.useCurrentRoute.mockReturnValue({
  url: { search: '?network=testnet', pathname: '/test' }
});
navi.Link = styled.a``;

const LOL = createCurrency('LOL');
const ILK = 'LOL-A';

afterEach(cleanup);

const account = {
  address: '0xtest'
};
const mockOwnerAddress = '0xtest';

const liquidationRatio = createCurrencyRatio(USD, MARTH)(1.5);
const collateralValue = USD(74.852);
const debtValue = MARTH(120);

const mockVault = {
  id: 9000,
  debtValue,
  vaultType: ILK,
  collateralAmount: LOL(10),
  collateralizationRatio: createCurrencyRatio(USD, MARTH)(180),
  liquidationPrice: createCurrencyRatio(USD, LOL)(1.5),
  collateralAvailableAmount: LOL(9.1),
  collateralAvailableValue: USD(1820),
  daiAvailable: MARTH(1213.33),
  liquidationRatio,
  liquidationPenalty: BigNumber('0.05'),
  annualStabilityFee: BigNumber('0.04999999999989363'),
  collateralValue,
  collateralTypePrice: createCurrencyRatio(USD, LOL)('200'),
  calculateLiquidationPrice: ({ collateralAmount: _collateralAmount }) =>
    math.liquidationPrice(_collateralAmount, debtValue, liquidationRatio),
  calculateCollateralizationRatio: ({ collateralValue: _collateralValue }) =>
    math
      .collateralizationRatio(_collateralValue, debtValue)
      .times(100)
      .toNumber()
};

test('basic rendering', () => {
  const showSidebar = jest.fn(() => {});
  const { getByText } = renderWithProviders(
    <Presentation
      account={account}
      showSidebar={showSidebar}
      vault={mockVault}
      cdpOwner={mockOwnerAddress}
    />
  );
  getByText('9.10 LOL');
  getByText('1820.00 USD');
  getByText('120.00 ARTH');
  getByText('1213.33 ARTH');

  fireEvent.click(getByText('Deposit'));
  expect(showSidebar).toBeCalledWith({
    type: 'deposit',
    props: { vault: mockVault }
  });
});

test('render liquidation price correctly when no debt', () => {
  const showSidebar = jest.fn(() => {});
  const newMockVault = {
    ...mockVault,
    liquidationPrice: createCurrencyRatio(USD, LOL)(Infinity),
    collateralTypePrice: createCurrencyRatio(USD, LOL)('0')
  };
  const { getByText } = renderWithProviders(
    <Presentation
      account={account}
      showSidebar={showSidebar}
      vault={newMockVault}
      cdpOwner={mockOwnerAddress}
    />
  );
  getByText('N/A'); //liquidation price
  getByText('0.0000 USD');
});

test('reclaim banner rounds correctly when value is > 1', async () => {
  const showSidebar = jest.fn(() => {});
  const newMockVault = {
    ...mockVault,
    unlockedCollateral: new BigNumber('213.1234567890123456')
  };
  const { findByText } = renderWithProviders(
    <Presentation
      account={account}
      showSidebar={showSidebar}
      vault={newMockVault}
      cdpOwner={mockOwnerAddress}
    />
  );
  // two decimal places for values > 1
  await findByText(/213.12 LOL/);
});

test('reclaim banner rounds correctly when number is < 1', async () => {
  const showSidebar = jest.fn(() => {});
  const newMockVault = {
    ...mockVault,
    unlockedCollateral: new BigNumber('0.1234567890123456')
  };
  const { findByText } = renderWithProviders(
    <Presentation
      account={account}
      showSidebar={showSidebar}
      vault={newMockVault}
      cdpOwner={mockOwnerAddress}
    />
  );
  // four decimal places for values < 1
  await findByText(/0.1234 LOL/);
});

describe('on mobile', () => {
  let getComputedStyleOrig;

  beforeAll(() => {
    Object.defineProperty(window.document.documentElement, 'clientWidth', {
      value: 320
    });
    getComputedStyleOrig = window.getComputedStyle;
    window.getComputedStyle = () => ({ fontSize: '16px' });
  });

  afterAll(() => {
    Object.defineProperty(window.document.documentElement, 'clientWidth', {
      value: 0
    });
    window.getComputedStyle = getComputedStyleOrig;
  });

  test('render an action full-screen', async () => {
    const mockVault2 = {
      id: 9000,
      debtValue,
      collateralAmount: MATIC(10),
      collateralizationRatio: createCurrencyRatio(USD, MARTH)(180),
      liquidationPrice: createCurrencyRatio(USD, MATIC)(1.5),
      collateralAvailableAmount: MATIC(9.1),
      collateralAvailableValue: USD(1820),
      daiAvailable: MARTH(1213.33),
      liquidationRatio,
      liquidationPenalty: BigNumber('0.05'),
      annualStabilityFee: BigNumber('0.04999999999989363'),
      collateralValue,
      collateralTypePrice: createCurrencyRatio(USD, MATIC)('200'),
      calculateLiquidationPrice: ({ collateralAmount: _collateralAmount }) =>
        math.liquidationPrice(_collateralAmount, debtValue, liquidationRatio),
      calculateCollateralizationRatio: ({
        collateralValue: _collateralValue
      }) =>
        math
          .collateralizationRatio(_collateralValue, debtValue)
          .times(100)
          .toNumber()
    };
    const showSidebar = jest.fn();
    const {
      findByText,
      getByText,
      getAllByText,
      getByTestId
    } = renderWithMaker(
      <Fragment>
        <Presentation
          account={account}
          showSidebar={showSidebar}
          vault={mockVault2}
          cdpOwner={mockOwnerAddress}
        />
        <div id="portal1" />
      </Fragment>
    );
    await waitForElement(() => getAllByText('Outstanding ARTH debt'));
    fireEvent.click(getByText('Deposit'));
    await findByText(/would you like to deposit/);
    expect(showSidebar).not.toBeCalled();
    getByText('New liquidation price');
    const input = getByTestId(
      (content, element) =>
        content === 'deposit-input' && element.tagName.toLowerCase() === 'input'
    );
    fireEvent.change(input, { target: { value: '10000' } });
    getByText(/Insufficient/);
  });
});

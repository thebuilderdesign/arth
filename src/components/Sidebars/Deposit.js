import React from 'react';
import { Text, Input, Grid, Button } from '@makerdao/ui-components-core';
import Info from './shared/Info';
import InfoContainer from './shared/InfoContainer';
import useMaker from 'hooks/useMaker';
import useProxy from 'hooks/useProxy';
import useTokenAllowance from 'hooks/useTokenAllowance';
import useWalletBalances from 'hooks/useWalletBalances';
import useValidatedInput from 'hooks/useValidatedInput';
import useLanguage from 'hooks/useLanguage';
import useAnalytics from 'hooks/useAnalytics';
import {
  formatCollateralizationRatio,
  formatSymbol,
  formatter
} from 'utils/ui';
import { multiply } from 'utils/bignumber';
import { getCurrency } from 'utils/cdp';
import ProxyAllowanceToggle from 'components/ProxyAllowanceToggle';
import BigNumber from 'bignumber.js';
import { decimalRules } from '../../styles/constants';
const { long, medium } = decimalRules;

const Deposit = ({ vault, reset }) => {
  const { trackBtnClick } = useAnalytics('Deposit', 'Sidebar');
  const { lang } = useLanguage();
  const { maker } = useMaker();
  const { hasProxy } = useProxy();

  let {
    vaultType,
    collateralTypePrice,
    collateralValue,
    collateralAmount
  } = vault;

  const symbol = collateralAmount?.symbol;
  const { hasAllowance, hasSufficientAllowance } = useTokenAllowance(symbol);
  const gemBalances = useWalletBalances();
  const gemBalance = gemBalances[symbol] || 0;

  const [amount, , onAmountChange, amountErrors] = useValidatedInput(
    '',
    {
      maxFloat: gemBalance,
      minFloat: 0,
      isFloat: true,
      custom: {
        allowanceInvalid: value => !hasSufficientAllowance(value)
      }
    },
    {
      maxFloat: () =>
        lang.formatString(
          lang.action_sidebar.insufficient_balance,
          formatSymbol(symbol)
        ),
      allowanceInvalid: () =>
        lang.formatString(
          lang.action_sidebar.invalid_allowance,
          formatSymbol(symbol)
        )
    }
  );
  const valid = amount && !amountErrors && hasAllowance && hasProxy;
  const amountToDeposit = amount || BigNumber(0);

  const deposit = () => {
    const currency = getCurrency({ ilk: vaultType });
    maker
      .service('mcd:cdpManager')
      .lock(vault.id, vaultType, currency(amountToDeposit));
    reset();
  };

  const valueDiff = multiply(amountToDeposit, collateralTypePrice.toNumber());

  const liquidationPrice = vault.calculateLiquidationPrice({
    collateralAmount: collateralAmount.plus(amountToDeposit)
  });

  const collateralizationRatio = vault.calculateCollateralizationRatio({
    collateralValue: collateralValue.plus(valueDiff)
  });

  return (
    <Grid gridRowGap="m">
      <Grid gridRowGap="s">
        <Text color="darkLavender" t="h4">
          {lang.formatString(
            lang.action_sidebar.deposit_title,
            formatSymbol(symbol)
          )}
        </Text>
        <p>
          <Text t="body">
            {lang.formatString(
              lang.action_sidebar.deposit_description,
              formatSymbol(symbol)
            )}
          </Text>
        </p>
        <Input
          type="number"
          min="0"
          value={amount}
          onChange={onAmountChange}
          placeholder={`0.00 ${formatSymbol(symbol)}`}
          failureMessage={amountErrors}
          data-testid="deposit-input"
        />
      </Grid>
      <ProxyAllowanceToggle token={symbol} trackBtnClick={trackBtnClick} />
      <Grid gridTemplateColumns="1fr 1fr" gridColumnGap="s">
        <Button
          disabled={!valid}
          onClick={() => {
            trackBtnClick('Confirm', { amount });
            deposit();
          }}
        >
          {lang.actions.deposit}
        </Button>
        <Button
          variant="secondary-outline"
          onClick={() => {
            trackBtnClick('Cancel');
            reset();
          }}
        >
          {lang.cancel}
        </Button>
      </Grid>
      <InfoContainer>
        <Info
          title={lang.action_sidebar.current_account_balance}
          body={`${formatter(gemBalance, { precision: long })} ${formatSymbol(
            symbol
          )}`}
        />
        <Info
          title={lang.formatString(
            lang.action_sidebar.gem_usd_price_feed,
            formatSymbol(symbol)
          )}
          body={`${formatter(collateralTypePrice)} ARTH/${formatSymbol(
            symbol
          )}`}
        />
        <Info
          title={lang.action_sidebar.new_liquidation_price}
          body={`${formatter(liquidationPrice, {
            infinity: BigNumber(0).toFixed(medium)
          })} ARTH/${formatSymbol(symbol)}`}
        />
        <Info
          title={lang.action_sidebar.new_collateralization_ratio}
          body={formatCollateralizationRatio(collateralizationRatio)}
        />
      </InfoContainer>
    </Grid>
  );
};
export default Deposit;

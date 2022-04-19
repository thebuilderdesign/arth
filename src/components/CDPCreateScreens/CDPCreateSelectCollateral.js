import React from 'react';
import {
  Box,
  Grid,
  Table,
  Radio,
  Overflow,
  Card
} from '@makerdao/ui-components-core';
import { TextBlock } from 'components/Typography';
import { prettifyNumber, formatter, formatSymbol } from 'utils/ui';
import useCdpTypes from 'hooks/useCdpTypes';
import useLanguage from 'hooks/useLanguage';
import useAnalytics from 'hooks/useAnalytics';
import ScreenFooter from '../ScreenFooter';
import ScreenHeader from '../ScreenHeader';

const CDPCreateSelectCollateralSidebar = () => {
  const { lang } = useLanguage();
  return (
    <Box px="l" py="m">
      <Box>
        {[
          [lang.stability_fee, lang.cdp_create.stability_fee_description],
          [
            lang.liquidation_ratio,
            lang.cdp_create.liquidation_ratio_description
          ],
          [
            lang.liquidation_penalty,
            lang.cdp_create.liquidation_penalty_description
          ]
        ].map(([title, text]) => (
          <Grid mb="m" key={title} gridRowGap="xs">
            <TextBlock t="h5" lineHeight="normal">
              {title}
            </TextBlock>
            <TextBlock t="body">{text}</TextBlock>
          </Grid>
        ))}
      </Box>
    </Box>
  );
};

function IlkTableRow({
  ilk,
  checked,
  gemBalance,
  isFirstVault,
  dispatch,
  ilkData
}) {
  const { trackInputChange } = useAnalytics('SelectCollateral', 'VaultCreate');

  const { annualStabilityFee, liquidationRatio, liquidationPenalty } = ilkData;
  async function selectIlk() {
    trackInputChange('CollateralType', {
      selectedCollateral: ilk.symbol,
      isFirstVault
    });
    dispatch({
      type: 'set-ilk',
      payload: {
        gem: ilk.gem,
        symbol: ilk.symbol,
        gemBalance,
        currency: ilk.currency
      }
    });
  }

  return (
    <tr css="white-space: nowrap;" onClick={selectIlk}>
      <td>
        <Radio
          checked={checked}
          readOnly
          mr="xs"
          css={{
            appearance: 'none'
          }}
        />
      </td>
      <td>{ilk.symbol}</td>
      <td>
        {formatter(annualStabilityFee, { integer: true, percentage: true })} %
      </td>
      <td>{formatter(liquidationRatio, { percentage: true })} %</td>
      <td>{formatter(liquidationPenalty, { percentage: true })} %</td>
      <td css="text-align: right">
        {prettifyNumber(gemBalance)} {formatSymbol(ilk.gem)}
      </td>
    </tr>
  );
}

const CDPCreateSelectCollateral = ({
  selectedIlk,
  isFirstVault,
  hasAllowance,
  proxyAddress,
  balances,
  collateralTypesData,
  dispatch
}) => {
  const { trackBtnClick } = useAnalytics('SelectCollateral', 'VaultCreate');
  const { lang } = useLanguage();
  const { cdpTypes } = useCdpTypes();
  const hasAllowanceAndProxy = hasAllowance && !!proxyAddress;

  console.log('cdpTypes got', cdpTypes);
  console.log('collateralTypesData', collateralTypesData, balances);
  return (
    <Box
      maxWidth="1040px"
      css={`
        margin: 0 auto;
      `}
    >
      <ScreenHeader
        title={lang.cdp_create.select_title}
        text={lang.cdp_create.select_text}
      />
      <Grid
        gridTemplateColumns={{ s: 'minmax(0, 1fr)', l: '2fr 1fr' }}
        gridGap="m"
        my="l"
      >
        <div>
          <Card px="l" py="l">
            <Overflow x="scroll" y="visible">
              <Table
                width="100%"
                css={`
                  th,
                  td {
                    padding-right: 10px;
                  }
                `}
              >
                <thead>
                  <tr css="white-space: nowrap;">
                    <th />
                    <th>{lang.collateral_type}</th>
                    <th>{lang.stability_fee}</th>
                    <th>{lang.liquidation_ratio_shortened}</th>
                    <th>{lang.liquidation_penalty_shortened}</th>
                    <th css="text-align: right">{lang.your_balance}</th>
                  </tr>
                </thead>
                <tbody>
                  {cdpTypes.map(ilk => {
                    console.log('test', ilk.symbol, collateralTypesData);
                    return (
                      collateralTypesData &&
                      balances[ilk.gem] && (
                        <IlkTableRow
                          key={ilk.symbol}
                          checked={ilk.symbol === selectedIlk.symbol}
                          dispatch={dispatch}
                          ilk={ilk}
                          gemBalance={balances[ilk.gem]}
                          isFirstVault={isFirstVault}
                          ilkData={collateralTypesData.find(
                            x => x.symbol === ilk.symbol
                          )}
                        />
                      )
                    );
                  })}
                </tbody>
              </Table>
            </Overflow>
          </Card>
        </div>
        <Card>
          <CDPCreateSelectCollateralSidebar />
        </Card>
      </Grid>
      <ScreenFooter
        onNext={() => {
          trackBtnClick('Next', {
            selectedCollateral: selectedIlk.symbol,
            isFirstVault
          });
          dispatch({
            type: 'increment-step',
            payload: { by: hasAllowanceAndProxy ? 2 : 1 }
          });
        }}
        onBack={() => {
          trackBtnClick('Back', { isFirstVault });
          dispatch({ type: 'decrement-step' });
        }}
        canGoBack={false}
        canProgress={!!selectedIlk.symbol}
      />
    </Box>
  );
};
export default CDPCreateSelectCollateral;

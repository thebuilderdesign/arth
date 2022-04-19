import React from 'react';
import styled from 'styled-components';
import { Flex, Text } from '@makerdao/ui-components-core';
import { ReactComponent as TradeIcon } from 'images/active-trade-icon.svg';
import useLanguage from 'hooks/useLanguage';

const StyledTradeIcon = styled(TradeIcon)`
  circle {
    stroke: ${props => (props.active ? 'white' : 'gray')};
  }
`;

const TradeNav = ({ ...props }) => {
  const { lang } = useLanguage();
  return (
    <a href="#" rel="noopener noreferrer" target="_blank">
      <Flex
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        py="s"
        {...props}
      >
        <StyledTradeIcon />
        <Text t="p6" fontWeight="bold" color={'gray'}>
          {lang.navbar.trade}
        </Text>
      </Flex>
    </a>
  );
};

export default TradeNav;

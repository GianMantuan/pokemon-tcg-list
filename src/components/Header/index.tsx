import React from 'react';

import {HeaderContainer, Title, Subtitle} from './style';

type Props = {
  title: string;
  subtitle?: string;
};

function Header({title, subtitle}: Props): JSX.Element {
  return (
    <HeaderContainer>
      <Title>{title}</Title>
      {subtitle ? <Subtitle>{subtitle}</Subtitle> : null}
    </HeaderContainer>
  );
}

Header.defaultProps = {
  subtitle: false,
};

export default Header;

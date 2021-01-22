import React from 'react';
import { RightMenu } from './menu/right-menu/right-menu';
import { LeftMenu } from './menu/left-menu/left-menu';
import HeaderWrapper from './header.style';
import LogoImage from 'assets/images/logo.png';
import Search from 'features/search/search';
type Props = {
  className?: string;
};

const Header: React.FC<Props> = ({ className }) => {
  return (
    <HeaderWrapper className={className} id="layout-header">
      <LeftMenu logo={LogoImage} />
      <Search minimal={true} className="headerSearch" />
      <RightMenu />
    </HeaderWrapper>
  );
};

export default Header;

import React from 'react';
import {
  MobileHeaderWrapper,
  MobileHeaderInnerWrapper,
  LogoWrapper,
} from './header.style';
import LogoImage from 'assets/images/logo.png';

import Logo from 'layouts/logo/logo';
import LanguageSwitcher from './menu/language-switcher/language-switcher';
import useDimensions from 'utils/useComponentSize';

type MobileHeaderProps = {
  className?: string;
};

const MobileHeader: React.FC<MobileHeaderProps> = ({ className }) => {
  const [mobileHeaderRef] = useDimensions();

  return (
    <MobileHeaderWrapper>
      <MobileHeaderInnerWrapper className={className} ref={mobileHeaderRef}>
        <LogoWrapper>
          <Logo imageUrl={LogoImage} alt="shop logo" />
        </LogoWrapper>

        <LanguageSwitcher />
      </MobileHeaderInnerWrapper>
    </MobileHeaderWrapper>
  );
};

export default MobileHeader;

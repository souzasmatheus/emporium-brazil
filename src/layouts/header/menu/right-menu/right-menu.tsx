import React from 'react';
import NavLink from 'components/nav-link/nav-link';
import { HELP_MENU_ITEM } from 'site-settings/site-navigation';
import LanguageSwitcher from '../language-switcher/language-switcher';
import { HelpIcon } from 'assets/icons/HelpIcon';
import { RightMenuBox } from './right-menu.style';

export const RightMenu: React.FC = () => {
  return (
    <RightMenuBox>
      <LanguageSwitcher />
    </RightMenuBox>
  );
};

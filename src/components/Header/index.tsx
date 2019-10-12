import React, { useState } from 'react';
//@ts-ignore
import { Link } from 'gatsby';
import styled from 'styled-components';
import { Flex, Box, Text } from 'rebass';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';

import navLinks from '../../../data/NavigationLinks';
import { StyledLinkText } from '../Typography';
import LocalizedLink from '../LocalizedLink';

import locales from '../../locales/config';
import createContainer from 'constate';

import SocialLinks from '../SocialLinks/SocialLinks';

import ToggleMenuButton from '../ToggleMenuButton/ToggleMenuButton';
import { Helmet } from 'react-helmet';

const useNavigationState = () => {
  const [state, setState] = useState({
    open: false,
    scrolled: false,
  });

  const toggleNavigation = () => setState({ ...state, open: !state.open });

  const toggleScrolled = () =>
    setState({ ...state, scrolled: !state.scrolled });

  return { state, toggleNavigation, toggleScrolled };
};

export const NavigationStateContainer = createContainer(useNavigationState);

const HeaderContainer = styled.header`
  z-index: 1000;
  position: absolute;
  width: 100vw;
  max-width: 100%;
  transition: all 0.5s ease;
`;

const Header = (props: any) => {
  return (
    <HeaderContainer>
      <Flex
        style={props}
        fontSize={[2, 2, 2, 2]}
        px={[3, 5] as any}
        py={[3] as any}
        alignItems="center"
        justifyContent="space-between"
      >
        <Logo />

        <MobileNavList />
      </Flex>
    </HeaderContainer>
  );
};

const Logo = (props: any) => {
  return (
    <Box
      width={[1, 1, 1, 1 / 4]}
      css={`
        z-index: 1000;
      `}
    >
      <LocalizedLink to="/">
        <StyledLinkText fontFamily="Apercu" fontWeight="300">
          Simon Halimonov
        </StyledLinkText>
      </LocalizedLink>
    </Box>
  );
};

const SwitchLanguage = (props: any) => {
  const { t, i18n } = useTranslation();
  const locale = i18n.language;
  const isIndex = locales[locale].default ? true : false;

  return (
    <Flex as="span" flexDirection="row" alignItems="center" {...props}>
      {!isIndex ? (
        <>
          <StyledLinkText fontFamily="Apercu" mx="3">
            <Link to="/">DE</Link>
          </StyledLinkText>
          <span> — </span>
          <Text
            fontFamily="Apercu"
            mx="3"
            css={`
              opacity: 0.5;
            `}
          >
            EN
          </Text>
        </>
      ) : (
        <>
          <Text
            fontFamily="Apercu"
            mx="3"
            css={`
              opacity: 0.5;
            `}
          >
            DE
          </Text>
          <span> — </span>
          <StyledLinkText fontFamily="Apercu" mx="3">
            <Link to="/en">EN</Link>
          </StyledLinkText>
        </>
      )}
    </Flex>
  );
};

function NavList(props: any) {
  const { t, i18n } = useTranslation();

  return (
    <Flex width={[`100%`] as any}>
      {navLinks.map((link, i) => (
        <NavLink key={i} to={link.to}>
          {t(`nav.` + link.text)}
        </NavLink>
      ))}
      <SwitchLanguage />
    </Flex>
  );
}

const NavLink = ({ to, children, p, fontSize }: any) => {
  return (
    <LocalizedLink to={to}>
      <StyledLinkText
        fontFamily="Apercu"
        p={p}
        mr={0}
        textAlign={[`center`, `left`] as any}
        fontSize={fontSize}
        fontWeight="300"
        style={{ cursor: `pointer` }}
      >
        {children}
      </StyledLinkText>
    </LocalizedLink>
  );
};

const MobileNavList = (props: any) => {
  const { t, i18n } = useTranslation();
  const { state, toggleNavigation, toggleScrolled } = useNavigationState(
    NavigationStateContainer.Context
  );

  return (
    <Flex>
      <Helmet>
        <html lang={i18n.language} />
      </Helmet>
      <Box onClick={toggleNavigation}>
        <ToggleMenuButton open={state.open} />
      </Box>

      <AnimatePresence>
        {state.open && (
          <div key="header-mobile-menu">
            <motion.div
              key="header-mobile-menu-bg"
              style={{
                background: `white`,
                position: `fixed`,
                top: 0,
                right: 0,
                left: 0,
                bottom: 0,
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            <Flex
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              py={6}
              css={`
                zindex: 1000;
                position: fixed;
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
                perspective: 200px;
              `}
            >
              {navLinks.map((navLink, index) => {
                return (
                  <motion.div
                    key={`header-mobile-menu-item-${index}`}
                    onClick={toggleNavigation}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ delay: state.open ? 0.2 * index : 0 }}
                  >
                    <NavLink to={navLink.to} p={3} fontSize={[4, 5]}>
                      {t(`nav.` + navLink.text)}
                    </NavLink>
                  </motion.div>
                );
              })}
              <motion.div
                key="header-mobile-menu-language"
                onClick={toggleNavigation}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.5 }}
              >
                <SwitchLanguage mt={[3, 4, 5, 6]} />
              </motion.div>

              <motion.div
                key="header-mobile-menu-social"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <SocialLinks mt={[3, 4, 5, 6]} />
              </motion.div>
            </Flex>
          </div>
        )}
      </AnimatePresence>
    </Flex>
  );
};

export default Header;

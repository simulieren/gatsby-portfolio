import React, { useState, Fragment } from "react";
//@ts-ignore
import { Link } from "gatsby";
import styled from "styled-components";
import { Flex, Box, Text } from "rebass";
import { useTranslation } from "react-i18next";
import { useSpring, animated, useTrail } from "react-spring";

import navLinks from "../../../data/NavigationLinks";
import useWindowScrollPosition from "../../util/useWindowScrollPosition";
import useWindowSize from "../../util/useWindowSize";
import { StyledLinkText } from "../Typography";
import LocalizedLink from "../LocalizedLink";

import locales from "../../locales/config";
import createContainer from "constate";
import {
  MailIcon,
  LinkedInIcon,
  GitHubIcon,
  CodepenIcon,
  GitlabIcon
} from "../Icons";

const useNavigationState = () => {
  const [state, setState] = useState({
    open: false,
    scrolled: false
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
    <Box width={[1, 1, 1, 1 / 4]} css={{ zIndex: 1000 }}>
      <LocalizedLink to="/">
        <StyledLinkText fontFamily="Apercu">Simon Halimonov</StyledLinkText>
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
          <Text fontFamily="Apercu" mx="3" css={{ opacity: 0.5 }}>
            EN
          </Text>
        </>
      ) : (
        <>
          <Text fontFamily="Apercu" mx="3" css={{ opacity: 0.5 }}>
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
          {t("nav." + link.text)}
        </NavLink>
      ))}
      <SwitchLanguage />
    </Flex>
  );
}

const NavLink = ({ to, children, p, fontSize }: any) => (
  <StyledLinkText
    fontFamily="Apercu"
    p={p}
    mr={0}
    textAlign={[`center`, `left`] as any}
    fontSize={fontSize}
  >
    <LocalizedLink to={to}>{children}</LocalizedLink>
  </StyledLinkText>
);

const MobileNavList = (props: any) => {
  const { t, i18n } = useTranslation();

  const time = 200;
  const { state, toggleNavigation, toggleScrolled } = useNavigationState(
    NavigationStateContainer.Context
  );

  const navBg = useSpring({
    to: {
      opacity: state.open ? 1 : 0
    },
    from: { opacity: 1 },
    duration: state.open ? time : (time * navLinks.length) / 4,
    config: {
      duration: state.open ? time : (time * navLinks.length) / 4
    },
    delay: state.open ? 0 : time * navLinks.length
  });

  const trail = useTrail(navLinks.length, {
    to: { opacity: state.open ? 1 : 0, x: state.open ? 0 : 100 },
    from: { opacity: 0, x: 100 },
    reverse: !state.open
  });

  const switchLanguage = useSpring({
    to: {
      opacity: state.open ? 1 : 0,
      transform: state.open ? "translateY(100)" : "translateY(0)"
    },
    from: { opacity: 1, transform: "translateY(100)" },
    delay: state.open ? time * navLinks.length + 5 : 0
  });

  const pointerEvents = { pointerEvents: state.open ? `all` : `none` };

  return (
    <Flex>
      <Text
        p={3}
        fontFamily="Apercu"
        onClick={toggleNavigation}
        textAlign="right"
        css={{
          zIndex: 1000
        }}
      >
        MENU
      </Text>

      <animated.div
        style={{
          background: `white`,
          position: `fixed`,
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
          ...navBg,
          ...pointerEvents
        }}
      />

      <Flex
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        py={6}
        css={{
          position: `fixed`,
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          perspective: `200px`,
          ...pointerEvents
        }}
      >
        {trail.map((props, index) => {
          return (
            <animated.div
              onClick={toggleNavigation}
              style={{
                opacity: props.opacity,
                transform: props.x.interpolate(
                  x => `translateY(${x * 4}%) rotate3d(1, 1, 1,${x * 2}deg)`
                )
              }}
              key={index}
            >
              <NavLink to={navLinks[index].to} p={3} fontSize={[4, 5]}>
                {t("nav." + navLinks[index].text)}
              </NavLink>
            </animated.div>
          );
        })}

        <animated.div
          onClick={toggleNavigation}
          style={{ ...pointerEvents, ...switchLanguage }}
        >
          <SwitchLanguage mt={[3, 4, 5, 6]} />
        </animated.div>

        <animated.div style={{ ...pointerEvents, ...switchLanguage }}>
          <SocialLinks mt={[3, 4, 5, 6]} />
        </animated.div>
      </Flex>
    </Flex>
  );
};

export const SocialLinks = props => {
  return (
    <Flex mt="3" flexDirection={["row"]} {...props}>
      <Box
        p="2"
        as="a"
        target="_blank"
        rel="noopener"
        href="mailto:hello@simonhalimonov.de"
      >
        <MailIcon stroke={props.color} />
      </Box>
      <Box
        p="2"
        as="a"
        target="_blank"
        rel="noopener"
        href="https://www.linkedin.com/in/simon-halimonov-745431181/"
      >
        <LinkedInIcon stroke={props.color} />
      </Box>
      <Box
        p="2"
        as="a"
        target="_blank"
        rel="noopener"
        href="https://github.com/simulieren"
      >
        <GitHubIcon stroke={props.color} />
      </Box>
      <Box
        p="2"
        as="a"
        target="_blank"
        rel="noopener"
        href="https://gitlab.com/simulieren"
      >
        <GitlabIcon stroke={props.color} />
      </Box>
      <Box
        p="2"
        as="a"
        target="_blank"
        rel="noopener"
        href="https://codepen.io/simulieren"
      >
        <CodepenIcon stroke={props.color} />
      </Box>
    </Flex>
  );
};

export default Header;

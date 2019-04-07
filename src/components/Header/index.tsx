import React, { useState, useContext, Fragment } from "react";
//@ts-ignore
// import { Link } from "gatsby"
import { AniLink } from "gatsby-plugin-transition-link";
import { Spring, Trail, animated } from "react-spring";
import styled from "styled-components";
import { Flex, Box, Text } from "rebass";
import { useTranslation } from "react-i18next";

import navLinks from "../../../data/NavigationLinks";
import useWindowScrollPosition from "../../util/useWindowScrollPosition";
import useWindowSize from "../../util/useWindowSize";
import { StyledLinkText } from "../Typography";
import LocalizedLink from "../LocalizedLink";

import locales from "../../locales/config";

const navContext = React.createContext({
  open: false,
  scrolled: false
});

const transitionSettings = {
  cover: true,
  bg: `rebeccapurple`,
  direction: `up`
};

const HeaderContainer = styled.header`
  position: fixed;
  width: 100vw;
  transition: all 0.5s ease;

  &.scrolled {
    background: white;
  }
`;

const Header = (props: any) => {
  const { x, y } = useWindowScrollPosition();
  const size = useWindowSize();
  const scrolled = y > 20;

  return (
    <HeaderContainer className={scrolled ? `scrolled` : ``}>
      <Spring
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
        config={{ duration: 500 }}
      >
        {props => (
          <Flex
            style={props}
            fontSize={[2, 2, 2, 2]}
            px={[3, 5, 6, 6] as any}
            py={[3, 4, 4] as any}
          >
            <Logo />
            {size.width > 640 ? (
              <NavList scrolled={scrolled} />
            ) : (
              <MobileNavList scrolled={scrolled} />
            )}
          </Flex>
        )}
      </Spring>
    </HeaderContainer>
  );
};

const Logo = (props: any) => {
  const context = useContext(navContext);
  const [x, y] = useState(context.open);
  const handleClick = () => {
    context.open = false;
    y();
  };

  return (
    <Box onClick={handleClick} width={[1, 1, 1, 1 / 4]} css={{ zIndex: 1000 }}>
      <LocalizedLink animate {...transitionSettings} to="/">
        <StyledLinkText fontFamily="Apercu">Simon Halimonov</StyledLinkText>
      </LocalizedLink>
    </Box>
  );
};

// FIX THIS
const SwitchLanguage = (props: any) => {
  const { t, i18n } = useTranslation();
  // const locale = i18n.language;
  // const isIndex = locales[locale].default ? true : false;

  return (
    <>
      <AniLink {...transitionSettings} to="/">
        DE
      </AniLink>
      <AniLink {...transitionSettings} to="/en">
        EN
      </AniLink>
    </>
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
    mr={[0, 3, 4, 5] as any}
    textAlign={[`center`, `left`] as any}
    fontSize={fontSize}
  >
    <LocalizedLink animate {...transitionSettings} to={to}>
      {children}
    </LocalizedLink>
  </StyledLinkText>
);

const MobileNavList = (props: any) => {
  const time = 200;
  const context = useContext(navContext);
  const [x, y] = useState(context.open);
  const handleClick = () => {
    context.open = !context.open;
    y();
  };

  const pointerEvents = { pointerEvents: context.open ? `all` : `none` };

  return (
    <Flex width={[1 / 2]}>
      <Text
        p={3}
        width="100%"
        fontFamily="Apercu"
        onClick={handleClick}
        textAlign="right"
        css={{
          position: `fixed`,
          top: 0,
          right: 0,
          width: `50%`,
          zIndex: 1000
        }}
      >
        MENU
      </Text>

      <Spring
        delay={context.open ? 0 : time * (navLinks.length / 1.5)}
        config={{
          duration: context.open ? time : (time * navLinks.length) / 4
        }}
        from={{ transform: `translateY(100%)` }}
        to={{ transform: context.open ? `translateY(0%)` : `translateY(100%)` }}
      >
        {props => (
          <animated.div
            style={{
              background: `white`,
              position: `fixed`,
              top: 0,
              right: 0,
              left: 0,
              bottom: 0,
              ...props,
              ...pointerEvents
            }}
          />
        )}
      </Spring>

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
        <Trail
          items={navLinks}
          reverse={!context.open}
          keys={item => item.text}
          from={{ opacity: 0, x: 0 }}
          to={{ opacity: context.open ? 1 : 0, x: context.open ? 0 : 100 }}
        >
          {link => props => (
            <animated.div
              onClick={handleClick}
              style={{
                opacity: props.opacity,
                transform: `translateY(${props.x *
                  4}%) rotate3d(1, 1, 1,${props.x * 2}deg)`
              }}
            >
              <NavLink to={link.to} p={3} fontSize={[4, 5]}>
                {link.text}
              </NavLink>
            </animated.div>
          )}
        </Trail>
      </Flex>
    </Flex>
  );
};

export default Header;

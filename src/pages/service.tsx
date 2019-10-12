import React, { useContext, Fragment } from 'react';
import Helmet from 'react-helmet';
import { Box, Flex } from 'rebass';
import { useTranslation } from 'react-i18next';

import Layout from '../components/Layout';

import config from '../../data/SiteConfig';
import {
  P,
  SectionOverline,
  DotPattern,
  SectionHeading,
  ListItem,
} from '../components/Typography';
import { AnimationStateContainer } from '../context/animationContext';
import Intro from '../components/Intro';
import { Section } from '../components/Grid';
import { TransitionLink } from '../components/TransitionLink';

import { LocaleContext } from '../context/LocaleContext';
import { changeLanguage } from '../util/changeLanguage';
import get from 'lodash/get';

const ServicePage = (props: any) => {
  const { t, i18n } = useTranslation();
  const [state, setState] = useContext(LocaleContext);

  const locale: string | undefined = get(props, `pageContext.locale`);
  if (locale && locale !== i18n.language) {
    changeLanguage(locale, i18n);
    setState(locale);
  }

  return (
    <>
      <Helmet title={t(`service.headline`)} />
      <Intro
        bg="
            radial-gradient(rgba(255,255,255,0), rgba(255,255,255,1)),
            linear-gradient(rgba(0,0,255,0.1), rgba(0,0,255,0.4))
            "
        overline={t(`homepage.overline`)}
        headline={t(`service.headline`)}
      />

      <Section py={[3, 4, 5]}>
        <Box width={[1, 1 / 5]}>
          <SectionOverline>01</SectionOverline>
        </Box>
        <Box width={[1, 4 / 5, 3 / 5]}>
          <SectionHeading color="#000">
            {t(`service.section.1.headline`)}
          </SectionHeading>
          <P>{t(`service.section.1.text`)}</P>
        </Box>
      </Section>
      <Section py={[3, 4, 5]}>
        <Box width={[1, 1 / 5]}>
          <SectionOverline>02</SectionOverline>
        </Box>
        <Box width={[1, 4 / 5, 3 / 5]}>
          <SectionHeading color="#000">
            {t(`service.section.2.headline`)}
          </SectionHeading>
          <P>{t(`service.section.2.text.1`)}</P>
          <P>{t(`service.section.2.text.2`)}</P>
        </Box>
      </Section>
      <Section py={[3, 4, 5]}>
        <Box width={[1, 1 / 5]}>
          <SectionOverline>{t(`skills`)}</SectionOverline>
        </Box>
        <Box width={[1, 2 / 5]}>
          <SectionHeading color="#000" fontSize={[4, 5]} mb="3">
            Design
          </SectionHeading>
          <ListItem as="li">Digital Product Design</ListItem>
          <ListItem as="li">Responsive Webdesign</ListItem>
          <ListItem as="li">User Experience Design</ListItem>
          <ListItem as="li">User Interface Design</ListItem>
          <ListItem as="li">Interaction Design</ListItem>
          <ListItem as="li">Wireframing</ListItem>
          <ListItem as="li">Design System</ListItem>
          <ListItem as="li">Design Prototyping</ListItem>
          <ListItem as="li">Design Styleguides</ListItem>
          <ListItem as="li">Newsletter Design</ListItem>
        </Box>
        <Box width={[1, 2 / 5]}>
          <SectionHeading color="#000" fontSize={[4, 5]} mb="3">
            Development
          </SectionHeading>
          <ListItem as="li">Frontend Development</ListItem>
          <ListItem as="li">React.js Development</ListItem>
          <ListItem as="li">Wordpress CMS</ListItem>
          <ListItem as="li">Performance Optimization</ListItem>
          <ListItem as="li">Mobile Optimization</ListItem>
          <ListItem as="li">User Interface Animation</ListItem>
          <ListItem as="li">Technical Prototyping</ListItem>
          <ListItem as="li">Living Styleguide</ListItem>
          <ListItem as="li">Mobile-First RWD</ListItem>
          <ListItem as="li">Responsive Newsletter Development</ListItem>
        </Box>
      </Section>
      <Section py={[3, 4, 5]}>
        <Box width={[1, 1 / 5]}>
          <SectionOverline>.</SectionOverline>
        </Box>
        <Box width={[1, 4 / 5, 3 / 5]}>
          <SectionHeading color="#000">
            {t(`service.section.3.headline`)}
          </SectionHeading>
          <P>{t(`service.section.3.text`)}</P>
        </Box>
      </Section>

      <Flex py={[3, 4, 5]} p={[3]} flexDirection={[`column`, `row`]}>
        <Box width={[1, 1 / 12]}>
          <SectionOverline>01</SectionOverline>
        </Box>
        <Box width={[1, 2 / 12]}>
          <SectionHeading color="#000" fontSize={[4, 5]}>
            {t(`service.section.4.headline`)}
          </SectionHeading>
        </Box>
        <Box width={[1, 4 / 12]}>
          <P>{t(`service.section.4.text.1`)}</P>
        </Box>
        <Box width={[1, 4 / 12]}>
          <ListItem as="li">{t(`service.section.4.text.2`)}</ListItem>
          <ListItem as="li">{t(`service.section.4.text.3`)}</ListItem>
        </Box>
      </Flex>

      <Flex py={[3, 4, 5]} p={[3]} flexDirection={[`column`, `row`]}>
        <Box width={[1, 1 / 12]}>
          <SectionOverline>02</SectionOverline>
        </Box>
        <Box width={[1, 2 / 12]}>
          <SectionHeading color="#000" fontSize={[4, 5]}>
            {t(`service.section.5.headline`)}
          </SectionHeading>
        </Box>
        <Box width={[1, 4 / 12]}>
          <P>{t(`service.section.5.text.1`)}</P>
        </Box>
        <Box width={[1, 4 / 12]}>
          <ListItem as="li">{t(`service.section.5.text.2`)}</ListItem>
          <ListItem as="li">{t(`service.section.5.text.3`)}</ListItem>
          <ListItem as="li">{t(`service.section.5.text.4`)}</ListItem>
        </Box>
      </Flex>

      <Flex py={[3, 4, 5]} p={[3]} flexDirection={[`column`, `row`]}>
        <Box width={[1, 1 / 12]}>
          <SectionOverline>03</SectionOverline>
        </Box>
        <Box width={[1, 2 / 12]}>
          <SectionHeading color="#000" fontSize={[4, 5]}>
            {t(`service.section.6.headline`)}
          </SectionHeading>
        </Box>
        <Box width={[1, 4 / 12]}>
          <P>{t(`service.section.6.text.1`)}</P>
        </Box>
        <Box width={[1, 4 / 12]}>
          <ListItem as="li">{t(`service.section.6.text.2`)}</ListItem>
          <ListItem as="li">{t(`service.section.6.text.3`)}</ListItem>
        </Box>
      </Flex>

      <Flex py={[3, 4, 5]} p={[3]} flexDirection={[`column`, `row`]}>
        <Box width={[1, 1 / 12]}>
          <SectionOverline>04</SectionOverline>
        </Box>
        <Box width={[1, 2 / 12]}>
          <SectionHeading color="#000" fontSize={[4, 5]}>
            {t(`service.section.7.headline`)}
          </SectionHeading>
        </Box>
        <Box width={[1, 4 / 12]}>
          <P>{t(`service.section.7.text.1`)}</P>
        </Box>
        <Box width={[1, 4 / 12]}>
          <ListItem as="li">{t(`service.section.7.text.2`)}</ListItem>
          <ListItem as="li">{t(`service.section.7.text.3`)}</ListItem>
          <ListItem as="li">{t(`service.section.7.text.4`)}</ListItem>
        </Box>
      </Flex>
    </>
  );
};

export default ServicePage;

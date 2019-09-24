import React, { useContext, Fragment } from 'react';
import Helmet from 'react-helmet';
import { Box, Heading, Text } from 'rebass';
import { useTranslation } from 'react-i18next';
import get from 'lodash/get';

import config from '../../data/SiteConfig';
import { SectionOverline, SectionHeading } from '../components/Typography';
import { Section } from '../components/Grid';
import { LocaleContext } from '../context/LocaleContext';
import { changeLanguage } from '../util/changeLanguage';

import NoteList from '../components/NoteList/NoteList';

const NotesPage = (props: any) => {
  const { t, i18n } = useTranslation();
  const [state, setState] = useContext(LocaleContext);

  const locale: string | undefined = get(props, `pageContext.locale`);
  if (locale && locale !== i18n.language) {
    changeLanguage(locale, i18n);
    setState(locale);
  }

  return (
    <>
      <div className="notes-container">
        <Helmet title={`${t(`notes.title`)} | ${config.siteTitle}`} />
        <Section py={[3, 4, 5]}>
          <Heading
            color="#00f"
            fontFamily="Cardo"
            width={[1, 4 / 5]}
            as="h1"
            fontSize={[5, 6, 8]}
            fontWeight="400"
            style={{ fontStyle: `italic` }}
          >
            Notes{` `}
            <Text
              as="span"
              fontWeight="300"
              fontFamily="Apercu"
              fontSize={[4, 5, 7]}
              style={{ fontStyle: `normal` }}
            >
              and{` `}
            </Text>
            Links
          </Heading>
        </Section>
        <Section py={[3, 4, 5]}>
          <Box width={[1, 1 / 5]}>
            <SectionOverline>01</SectionOverline>
          </Box>
          <Box width={[1, 4 / 5, 3 / 5]}>
            <NoteList />
          </Box>
        </Section>
      </div>
    </>
  );
};

export default NotesPage;

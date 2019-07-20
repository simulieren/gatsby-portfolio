import React, { useContext, Fragment } from "react";
import Helmet from "react-helmet";
import { useTranslation } from "react-i18next";

import Layout from "../components/Layout";

import config from "../../data/SiteConfig";
import ProjectSection from "../components/sections/ProjectSection";
import { LocaleContext } from "../context/LocaleContext";
import { changeLanguage } from "../util/changeLanguage";
import get from "lodash/get";

import { Section } from "../components/Grid";
import { Box } from "rebass";
import { SectionHeading } from "../components/Typography";

const WorkPage = (props: any) => {
  const { t, i18n } = useTranslation();
  const [state, setState] = useContext(LocaleContext);

  const locale: string | undefined = get(props, "pageContext.locale");
  if (locale && locale !== i18n.language) {
    changeLanguage(locale, i18n);
    setState(locale);
  }

  return (
    <>
      <Helmet title={`${t("work.headline")} | ${config.siteTitle}`} />

      <Section mb={[4, 5]} pt={[5, 5, 6]}>
        <Box width={1}>
          <SectionHeading>{t("work.headline")}</SectionHeading>
        </Box>
      </Section>
      <ProjectSection />
    </>
  );
};

export default WorkPage;

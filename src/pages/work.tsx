import React, { useContext } from "react";
import Helmet from "react-helmet";
import { useTranslation } from "react-i18next";
import get from "lodash/get";

import Layout from "../layout";

import config from "../../data/SiteConfig";
import ProjectSection from "../components/sections/ProjectSection";

import { changeLanguage } from "../util/changeLanguage";
import { Section } from "../components/Grid";
import { Box } from "rebass";
import { SectionHeading } from "../components/Typography";

const WorkPage = (props: any) => {
  const { t, i18n } = useTranslation();

  const locale: string | undefined = get(props, "pageContext.locale");
  if (locale && locale !== i18n.language) changeLanguage(locale, i18n);

  return (
    <Layout>
      <Helmet title={`${t("work.headline")} | ${config.siteTitle}`} />

      <Section mb={[4, 5]} pt={[4, 5, 6]}>
        <Box width={1}>
          <SectionHeading>{t("work.headline")}</SectionHeading>
        </Box>
      </Section>
      <ProjectSection />
    </Layout>
  );
};

export default WorkPage;

import React, { useContext } from "react";
import Helmet from "react-helmet";
import { useTranslation } from "react-i18next";
import get from "lodash/get";

import Layout from "../layout";

import config from "../../data/SiteConfig";
import ProjectSection from "../components/sections/ProjectSection";

import { changeLanguage } from "../util/changeLanguage";

const WorkPage = (props: any) => {
  const { t, i18n } = useTranslation();

  const locale: string | undefined = get(props, "pageContext.locale");
  if (locale && locale !== i18n.language) changeLanguage(locale, i18n);

  return (
    <Layout>
      <Helmet title={`${t("work.headline")} | ${config.siteTitle}`} />
      <ProjectSection />
    </Layout>
  );
};

export default WorkPage;

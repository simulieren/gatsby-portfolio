import React, { useContext } from "react";
import Helmet from "react-helmet";
import { useTranslation } from "react-i18next";

import Layout from "../layout";

import config from "../../data/SiteConfig";
import ProjectSection from "../components/sections/ProjectSection";

const WorkPage = (props: any) => {
  const { t, i18n } = useTranslation();

  return (
    <Layout>
      <Helmet title={`${t("work.headline")} | ${config.siteTitle}`} />
      <ProjectSection />
    </Layout>
  );
};

export default WorkPage;

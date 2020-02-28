import React, { useContext } from "react";
import { useTranslation } from "react-i18next";

import { PortfolioCarousel } from "../PortfolioSlider/PortfolioSlider";
import { Box } from "rebass";

const ProjectSection = (props: any) => {
  const { t, i18n } = useTranslation();

  const visit = t("button.visit");

  return (
    <Box
      bg="white"
      css={`
        position: relative;
        z-index: 1;
      `}
    >
      <PortfolioCarousel
        images={["sn_01", "sn_02", "sn_03", "sn_04"]}
        overline="Design + Development"
        tags={["UX", "UI", "Development"]}
        title="Snaatch App"
        background="rgba(233, 208, 143, 0.5)"
        link="https://snaatch.it/"
        linkText={visit}
      />

      <PortfolioCarousel
        images={["ph_01", "ph_02", "ph_03", "ph_04", "ph_05", "ph_06"]}
        overline="Design + Development"
        tags={["UX", "UI", "Development"]}
        title="Philonomist Landingpage"
        background="rgba(235, 229, 241, 0.3)"
        link="https://www.philonomist.com/en/enterprise-subscription"
        linkText={visit}
      />

      <PortfolioCarousel
        images={["ms_01", "ms_02", "ms_03", "ms_04", "ms_05"]}
        overline="Design + Development"
        tags={["UX", "UI", "Development"]}
        title="MyStudiolo Landingpage and App"
        background="rgba(251, 226, 219, 0.5)"
        link="https://mystudiolo.com/"
        linkText={visit}
      />

      <PortfolioCarousel
        images={["mk_01", "mk_02", "mk_03", "mk_04"]}
        overline="Design + Development"
        tags={["UX", "UI", "Development"]}
        title="MultiKulti Markt"
        background="rgba(255, 223, 223, .5)"
        link="https://multikulti-markt.de/"
        linkText={visit}
      />

      <PortfolioCarousel
        images={["of_01", "of_02", "of_03"]}
        overline="Design + Development"
        tags={["UX", "UI", "Development"]}
        title="Origami Films"
        link="http://origami-films.com/"
        linkText={visit}
        background="rgba(209, 143, 231, .2)"
      />

      <PortfolioCarousel
        images={["sc_01", "sc_02", "sc_03"]}
        overline="Design + Development"
        tags={["UX", "UI", "Development"]}
        title="SuperCode"
        link="https://www.super-code.de/"
        linkText={visit}
        background="rgba(61, 215, 172, 0.2)"
      />

      <PortfolioCarousel
        images={["bk_01", "bk_02", "bk_03"]}
        overline="Design + Development"
        tags={["UX", "UI", "Development"]}
        title="beka GmbH"
        link="https://www.beka.de/"
        linkText={visit}
        background="rgba(17, 95, 148, .2)"
      />

      <PortfolioCarousel
        images={["wp_01", "wp_02", "wp_03"]}
        overline="Design + Development"
        tags={["UX", "UI", "Development"]}
        title="Wordpress Theme Elle"
        link="http://themes.simonhalimonov.de/"
        linkText={visit}
        background="rgba(220, 202, 230, .4)"
      />

      <PortfolioCarousel
        images={["af_01", "af_02", "af_03"]}
        overline="Design + Development"
        tags={["UX", "UI", "Development"]}
        title="alle freiheit"
        link="http://film.allefreiheit.de/"
        linkText={visit}
        background="rgba(176, 39, 28, .15)"
      />
    </Box>
  );
};

export default ProjectSection;

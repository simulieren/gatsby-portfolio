import React, { useContext } from "react";
import { useTranslation } from "react-i18next";

import { PortfolioCarousel } from "../PortfolioSlider/PortfolioSlider";

const ProjectSection = (props: any) => {
  const { t, i18n } = useTranslation();

  console.log(i18n.language);

  return (
    <>
      <PortfolioCarousel
        images={["mk_01", "mk_02", "mk_03", "mk_04"]}
        overline="Design + Development"
        tags={["UX", "UI", "Development"]}
        title="MultiKulti Markt"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
        dolores alias quibusdam asperiores explicabo, laborum natus
        accusantium blanditiis cum quia?"
        background="rgba(255, 223, 223, .5)"
      />

      <PortfolioCarousel
        images={["of_01", "of_02", "of_03"]}
        overline="Design + Development"
        tags={["UX", "UI", "Development"]}
        title="Origami Films"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
        dolores alias quibusdam asperiores explicabo, laborum natus
        accusantium blanditiis cum quia?"
        background="rgba(209, 143, 231, .2)"
      />

      <PortfolioCarousel
        images={["sc_01", "sc_02", "sc_03"]}
        overline="Design + Development"
        tags={["UX", "UI", "Development"]}
        title="SuperCode"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
        dolores alias quibusdam asperiores explicabo, laborum natus
        accusantium blanditiis cum quia?"
        background="rgba(61, 215, 172, 0.2)"
      />

      <PortfolioCarousel
        images={["bk_01", "bk_02", "bk_03"]}
        overline="Design + Development"
        tags={["UX", "UI", "Development"]}
        title="beka GmbH"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
        dolores alias quibusdam asperiores explicabo, laborum natus
        accusantium blanditiis cum quia?"
        background="rgba(17, 95, 148, .2)"
      />

      <PortfolioCarousel
        images={["wp_01", "wp_02", "wp_03"]}
        overline="Design + Development"
        tags={["UX", "UI", "Development"]}
        title="Wordpress Theme Elle"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
        dolores alias quibusdam asperiores explicabo, laborum natus
        accusantium blanditiis cum quia?"
        background="rgba(220, 202, 230, .4)"
      />

      <PortfolioCarousel
        images={["tc_01", "tc_02", "tc_03"]}
        overline="Design + Development"
        tags={["UX", "UI", "Development"]}
        title="TechnoCargo"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
        dolores alias quibusdam asperiores explicabo, laborum natus
        accusantium blanditiis cum quia?"
        background="rgba(149, 187, 93, .3)"
      />

      <PortfolioCarousel
        images={["af_01", "af_02", "af_03"]}
        overline="Design + Development"
        tags={["UX", "UI", "Development"]}
        title="alle freiheit"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
        dolores alias quibusdam asperiores explicabo, laborum natus
        accusantium blanditiis cum quia?"
        background="rgba(176, 39, 28, .15)"
      />
    </>
  );
};

export default ProjectSection;

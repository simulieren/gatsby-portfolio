import React from 'react';
import { useTranslation } from 'react-i18next';
import Intro from '../Intro';
import DotCanvas from '../DotCanvas';

export const IntroSection = (props: any) => {
  const { t, i18n } = useTranslation();

  return (
    <Intro
      bg="
            radial-gradient(rgba(255,255,255,0), rgba(255,255,255,1)),
            linear-gradient(rgba(0,0,255,0.1), rgba(0,0,255,0.4))
            "
      overline={t(`homepage.overline`)}
      headline={t(`homepage.headline`)}
    >
      <DotCanvas
        style={{ position: `absolute`, top: 0, left: 0, zIndex: -1 }}
      />
    </Intro>
  );
};

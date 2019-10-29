import React from 'react';
import { Flex, Box } from 'rebass';
import { useTranslation } from 'react-i18next';

import { Section } from '../Grid';
import { SectionOverline } from '../Typography';

export const ClientLogos = () => {
  const { t, i18n } = useTranslation();

  return (
    <Section py={[3, 4, 5]}>
      <SectionOverline textAlign="center" width={`100%`}>
        {t(`clients.references`)}
      </SectionOverline>
      <Flex
        alignItems="center"
        justifyContent="center"
        width="100%"
        flexWrap="wrap"
      >
        <Box
          as="img"
          width={[1 / 6, 1 / 4, 1 / 3]}
          p={[3, 4]}
          my={[3, 4]}
          style={{ maxHeight: 110 }}
          src="/logo/philonomist.svg"
          alt="Philonomist"
        />
        <Box
          as="img"
          width={[1 / 6, 1 / 4, 1 / 3]}
          p={[3, 4]}
          my={[3, 4]}
          style={{ maxHeight: 110 }}
          src="/logo/mystudiolo.svg"
          alt="MyStudiolo"
        />
        <Box
          as="img"
          width={[1 / 6, 1 / 4, 1 / 3]}
          p={[3, 4]}
          my={[3, 4]}
          style={{ maxHeight: 110 }}
          src="/logo/howfm.svg"
          alt="How FM"
        />
        <Box
          as="img"
          width={[1 / 6, 1 / 4, 1 / 3]}
          p={[3, 4]}
          my={[3, 4]}
          style={{ maxHeight: 110 }}
          src="/logo/multikulti.svg"
          alt="MultiKulti Markt"
        />
        <Box
          as="img"
          width={[1 / 6, 1 / 4, 1 / 3]}
          p={[3, 4]}
          my={[3, 4]}
          style={{ maxHeight: 110 }}
          src="/logo/supercode.svg"
          alt="SuperCode"
        />
        <Box
          as="img"
          width={[1 / 6, 1 / 4, 1 / 3]}
          p={[3, 4]}
          my={[3, 4]}
          style={{ maxHeight: 110 }}
          src="/logo/jungleprogram.svg"
          alt="JungleProgram"
        />
      </Flex>
    </Section>
  );
};

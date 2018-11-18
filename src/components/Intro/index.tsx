import React from 'react'
import { Box, Heading } from 'rebass'
import { Caps } from '../Typography'
import { relative } from 'path'

import { SpringFadeIn, SpringFadeInUp } from '../Animations/Animations'

const Intro = props => {
  return (
    <Box
      as="section"
      px={[3, 4, 5]}
      pt={[6, 6, 7]}
      css={{
        minHeight: '100vh',
        background: props.bg,
        backgroundSize: 'cover',
        backgroundPosition: 'top center',
        position: 'relative',
        zIndex: 1
      }}
    >
      <Box px={[0, 4, 5]}>
        <SpringFadeIn config={{ duration: 1000 }}>
          <Caps as="div" fontSize={3} mt={0} mb={[4, 5, 5]}>
            {props.overline}
          </Caps>
        </SpringFadeIn>
        <SpringFadeIn delay={600} config={{ duration: 1000 }}>
          <Heading color="#00f" fontFamily="Spectral" width={[1, 4 / 5]} as="h1" fontSize={[5, 6, 8]} mb={[5, 6]}>
            {props.headline}
          </Heading>
        </SpringFadeIn>
      </Box>

      <SpringFadeInUp delay={800} config={{ duration: 1000 }}>
        {props.children}
      </SpringFadeInUp>
    </Box>
  )
}

export default Intro

import React, { Component } from 'react'
import { Box } from 'rebass'
import { AniLink } from 'gatsby-plugin-transition-link'

import { Caps, P, SectionOverline, StyledButton, DotPattern } from '../../components/Typography'

class About extends Component {
  render() {
    return (
      <div>
        <h1>Edit About component or pages/about.jsx to include your information.</h1>

        <AniLink>
          <StyledButton>Mehr erfahren</StyledButton>
        </AniLink>

        <DotPattern fill="#00f" />
      </div>
    )
  }
}

export default About

import React, { Component } from 'react'
import { Link } from 'gatsby'
import { Box, Text } from 'rebass'
import { AniLink } from 'gatsby-plugin-transition-link'

import { SectionOverline, P, StyledLinkText } from '../Typography'
import { Section } from '../Grid'

class Footer extends Component {
  render() {
    const { config } = this.props
    const url = config.siteRss

    return (
      <footer className="footer">
        <Section py={4}>
          <Box width={[1, 1 / 3]}>
            <SectionOverline textAlign="left">Kontakt</SectionOverline>
            <Text fontFamily="Apercu" fontSize={2}>
              Simon Halimonov <br />
              Marktstraße 8 <br />
              50968 Köln <br /> <br />
              <a href="mailto:hello@simonhalimonov.de">
                <StyledLinkText>hello@simonhalimonov.de</StyledLinkText>
              </a>
            </Text>
          </Box>
          <Box width={[1, 1 / 3]}>
            <SectionOverline textAlign="left">Social Media</SectionOverline>
            <div className="notice-container">
              <Link to={url}>
                <button>RSS Abonnieren</button>
              </Link>
            </div>
          </Box>
          <Box width={[1, 1 / 3]}>
            <SectionOverline textAlign="left">Rechtliches</SectionOverline>
            <Text fontFamily="Apercu" fontSize={2}>
              <a href="mailto:hello@simonhalimonov.de">
                <StyledLinkText>Impressum und AGB</StyledLinkText>
              </a> <br/>
              
              <a href="mailto:hello@simonhalimonov.de">
                <StyledLinkText>Datenschutz</StyledLinkText>
              </a>
            </Text>
          </Box>
        </Section>
      </footer>
    )
  }
}

export default Footer

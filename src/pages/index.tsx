import React from 'react'
import Helmet from 'react-helmet'
import { Flex, Box, Text, Heading, Button } from 'rebass'
import { graphql } from 'gatsby'
import { AniLink } from 'gatsby-plugin-transition-link'
import Img from 'gatsby-image'

import Layout from '../layout'
import SEO from '../components/SEO/SEO'
import config from '../../data/SiteConfig'

import PostListing from '../components/PostListing/PostListing'
import Intro from '../components/Intro'
import TextListItem from '../components/TextListItem'
import { Caps, P, SectionOverline } from '../components/Typography'
import { Section } from '../components/Grid'
import Card from '../components/Card'
import DotCanvas from '../components/DotCanvas/index'
import BlackHolep5 from '../components/Canvas/BlackHolep5'
import BlackHole from '../components/Canvas/BlackHole'
import Circlep5 from '../components/Canvas/Circlep5'

class Index extends React.Component {
  render() {
    const postEdges = this.props.data.allMarkdownRemark.edges
    const imageEdges = this.props.data.allFile.edges
    console.log(imageEdges)

    const images = imageEdges.map(img => img.node.childImageSharp.fluid)
    console.log(images)

    return (
      <Layout>
        <Helmet title={config.siteTitle} />
        <SEO />

        <Intro
          bg="
            radial-gradient(rgba(255,255,255,0), rgba(255,255,255,1)),
            linear-gradient(rgba(0,0,255,0.1), rgba(0,0,255,0.4))
            "
          overline="Digital Product Design & Frontend Development"
          headline="Ich gestalte und entwickle digitale Produkte."
        >
          <Section px={[3, 4, 5]} py={[3, 4, 5]}>
            <Box width={[1, 1, 1, 1 / 5]}>
              <SectionOverline>Arbeit</SectionOverline>
            </Box>

            <Box width={[1, 1 / 2, 1 / 2, 1 / 4]}>
              <Heading as="h3" fontSize={3} fontFamily="Apercu" fontWeight="400" mt={1} color="#00f" mb={3}>
                Referenzen
              </Heading>
              <TextListItem category={'DESIGN'} headline={'beka.de'} />
              <TextListItem category={'DESIGN'} headline={'lekkerland.de'} />
              <TextListItem category={'DESIGN'} headline={'eizo.de'} />
              <TextListItem category={'DESIGN'} headline={'covestro.de'} />
            </Box>
            <Box width={[1, 1 / 2, 1 / 2, 1 / 4]}>
              <Heading as="h3" fontSize={3} fontFamily="Apercu" fontWeight="400" mt={1} color="#00f" mb={3}>
                Projekte
              </Heading>
              <TextListItem category={'DESIGN + DEVELOPMENT'} headline={'Origami Films'} />
              <TextListItem category={'DESIGN + DEVELOPMENT'} headline={'StreetstyleCon'} />
              <TextListItem category={'DESIGN + DEVELOPMENT'} headline={'MultiKulti Markt'} />
              <TextListItem category={'DESIGN + DEVELOPMENT'} headline={'Futur.ist'} />
            </Box>
            <Box width={[1, 1 / 2, 1 / 2, 1 / 4]}>
              <Heading as="h3" fontSize={3} fontFamily="Apercu" fontWeight="400" mt={1} color="#00f" mb={3}>
                Artikel
              </Heading>
              <PostListing postEdges={postEdges} type="blog" headlineFontSize={4} />
            </Box>
          </Section>
        </Intro>

        <DotCanvas style={{ position: 'fixed', top: 0, zIndex: -1, height: '100vh' }} />

        <Section py={[3, 4, 5]} pt={6}>
          <Box width={[1, 1 / 5]}>
            <SectionOverline>Mission</SectionOverline>
          </Box>
          <Box width={[1, 4 / 5, 2 / 5]}>
            <Heading as="h3" fontSize={[5, 6]} fontFamily="Spectral" mt={0}>
              Digitaler Fokus
            </Heading>
            <P>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque ratione veniam nobis, expedita
              impedit earum, minima, ex quo amet quis assumenda nam. Nesciunt officiis sit aperiam suscipit odit nihil
              distinctio.
            </P>
            <P>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque ratione veniam nobis, expedita
              impedit earum, minima, ex quo amet quis assumenda nam. Nesciunt officiis sit aperiam suscipit odit nihil
              distinctio.
            </P>
          </Box>
          <Box width={2/5}>
            <Circlep5/>
          </Box>
        </Section>

        <Section
          justifyContent={'center'}
          flexDirection={'column'}
          py={[3, 4, 5]}
          pt={6}
          css={{ overflow: 'hidden', minHeight: '80vh', position: 'relative' }}
          bg={'hsla(240, 100%, 70%, 1)'}
        >
          <Box color="#fff" width={[1 / 2]} css={{ zIndex: 1 }}>
            <SectionOverline color="#fff" textAlign={'left'}>Teaching</SectionOverline>
            <Heading as="h3" fontSize={[5, 6]} fontFamily="Spectral" mt={0}>
              Ich unterrichte beim Digital Career Institute
            </Heading>
            <P>Seit dem Dezember 2018 habe ich über 100 Teilnehmer zum Thema Webdevelopment unterrichtet. Ich habe zusammen mit anderen Dozenten am Curriculum gearbeitet und den Schülern das Programmieren beigebracht.</P>
            <P>Von HTML, CSS und JavaScript bis zu React.js, Node.js und MongoDB habe ich die Schüler zum Fullstack JavaScript Developer ausgebildet.</P>
          </Box>

          <Img
            style={{ minHeight: '100%', width: '100%', position: 'absolute', right: 0, opacity: '0.75', mixBlendMode: 'multiply' }}
            fluid={images[2]}
          />
        </Section>

        <Section py={[3, 4, 5]} bg={'rgba(255,255,255,0.9)'}>
          <Box width={[1, 1 / 5]}>
            <SectionOverline>Hire me</SectionOverline>
          </Box>
          <Box width={[1, 4 / 5, 2 / 5]}>
            <Heading as="h4" fontSize={[5, 6]} fontFamily="Spectral" mt={0} mb={4}>
              So kann ich helfen
            </Heading>
            <Heading as="h4" fontSize={[3]} fontFamily="Apercu" fontWeight="400" mt={0} mb={5}>
              <Text as="span" mr={3} fontSize={[6, 7]} fontFamily="Spectral" fontWeight="900" lineHeight={1} color={'#00f'} css={{fontStyle: 'italic', float: 'left'}}>1.</Text> Ich plane, konzipiere, gestalte und realisiere ihr digitales Vorhaben.
            </Heading>
            <Heading as="h4" fontSize={[3]} fontFamily="Apercu" fontWeight="400" mt={0} mb={5}>
              <Text as="span" mr={3} fontSize={[6, 7]} fontFamily="Spectral" fontWeight="900" lineHeight={1} color={'#00f'} css={{fontStyle: 'italic', float: 'left'}}>2.</Text> Ich unterstütze ihr Team mit meinen Kompetenzen bei ihrem Projekt.
            </Heading>
            <Heading as="h4" fontSize={[3]} fontFamily="Apercu" fontWeight="400" mt={0} mb={5}>
              <Text as="span" mr={3} fontSize={[6, 7]} fontFamily="Spectral" fontWeight="900" lineHeight={1} color={'#00f'} css={{fontStyle: 'italic', float: 'left'}}>3.</Text> Ich gebe ihrem Team einen Workshop um euch auf das nächste Level zu bringen.
            </Heading>
            <Heading as="h4" fontSize={[3]} fontFamily="Apercu" fontWeight="400" mt={0} mb={5}>
              <Text as="span" mr={3} fontSize={[6, 7]} fontFamily="Spectral" fontWeight="900" lineHeight={1} color={'#00f'} css={{fontStyle: 'italic', float: 'left'}}>4.</Text> Ich spreche bei ihrem Event über aktuelle Themem im Bereich Design und Development.
            </Heading>

            <AniLink>
              <Button>Mehr erfahren</Button>
            </AniLink>
          </Box>
        </Section>

        <Section py={[3, 4, 5]}>
          <Box width={[1, 1 / 5]}>
            <SectionOverline>Blog</SectionOverline>
          </Box>
          <Box width={[1, 4 / 5, 3 / 5]}>
            <PostListing postEdges={postEdges} type="blog" />
          </Box>
        </Section>

        <Section py={[3, 4, 5]}>
          <Box width={[1, 1 / 5]}>
            <SectionOverline>Notes</SectionOverline>
          </Box>
          <Box width={[1, 4 / 5, 3 / 5]}>
            <PostListing postEdges={postEdges} type="note" />
          </Box>
        </Section>

        
        <Card>
          <Heading>HELLO</Heading>
        </Card>
      </Layout>
    )
  }
}

export default Index

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(limit: 100, sort: { fields: [fields___date], order: DESC }) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            category
            type
            title
            tags
            cover
            date
            link
          }
        }
      }
    }
    allFile(filter: { extension: { regex: "/(jpg)/" } }) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 2560) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`

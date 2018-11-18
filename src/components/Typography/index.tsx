import React from 'react'
import styled from 'styled-components'
import { Text, Heading } from 'rebass'
import './fonts/index.css'
import 'typeface-spectral'

export const Caps = props => (
  <Text
    as="span"
    {...props}
    fontFamily="Apercu"
    css={{
      fontSize: '12px',
      textTransform: 'uppercase',
      letterSpacing: '0.2em'
    }}
  />
)

export const P = props => (
  <Text as="p" fontSize={[3]} fontFamily="Apercu" {...props}>
    {props.children}
  </Text>
)

export const SectionOverline = props => (
  <Caps as="h2" fontSize={2} textAlign={["left","left", "left", "right"]} mr={4} color={props.color || 'rgba(0,0,255,0.5)'} {...props}>
    {props.children}
  </Caps>
)


export const StyledLinkText = styled(Text)`
  position: relative; 
  transition: all .2s ease;
  display: inline-block;

  &:hover {
    color: #00f;
    transform: translateY(-4px)
  }

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    right: 0;
    background: #00f;
    transform: scaleX(0) translateY(0px);
    transition: transform .2s ease;
    will-change: transform;
  }

  &:hover::after {
    transform: scaleX(1) translateY(4px);
  }
`

export const StyledLinkHeading = styled(Heading)`
  position: relative; 
  transition: all .2s ease;
  display: inline-block;

  &:hover {
    color: #00f;
  }
`
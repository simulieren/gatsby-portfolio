import React from 'react';
import styled from 'styled-components';
import { Text, Heading, TextProps } from 'rebass';
import './fonts/index.css';
import 'typeface-spectral';

//@ts-ignore
import { DotPattern } from './DotPattern.js';

export { DotPattern };

interface ITextProps extends TextProps {
  children: any;
}

export const Caps = (props: ITextProps) => (
  <Text
    as="span"
    {...props}
    fontFamily="Apercu"
    css={{
      fontSize: `12px`,
      textTransform: `uppercase`,
      letterSpacing: `0.2em`,
    }}
  />
);

export const P = (props: ITextProps) => (
  <Text as="p" fontSize={[3]} fontFamily="Apercu" {...props} />
);

export const SectionOverline = (props: any) => (
  <Caps
    as="h2"
    fontSize={2}
    textAlign={[`left`, `left`, `left`, `right`]}
    mr={4}
    color={props.color || `rgba(0,0,255,0.5)`}
    {...props}
  />
);

export const StyledLinkText = styled(Text)<{ inverted?: boolean }>`
  position: relative;
  transition: all 0.2s ease;
  display: inline-block;

  &:hover {
    color: ${props => (props.inverted ? `#fff` : `#00f`)};
    transform: translateY(-4px);
  }

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    right: 0;
    background: ${props => (props.inverted ? `#fff` : `#00f`)};
    transform: scaleX(0) translateY(0px);
    transition: transform 0.2s ease;
    will-change: transform;
  }

  &:hover::after {
    transform: scaleX(1) translateY(4px);
  }
`;

export const StyledLinkHeading = styled(Heading)`
  position: relative;
  transition: all 0.2s ease;
  display: inline-block;

  &:hover {
    color: #00f;
  }
`;

const RightArrowSVG = () => (
  <svg
    version="1.1"
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    viewBox="0 0 14 10"
    enableBackground="new 0 0 14 10"
    xmlSpace="preserve"
  >
    <g>
      <polygon
        fill="#231F20"
        points="8.8,0.4 7.8,1.5 10.5,4.2 0.6,4.2 0.6,5.8 10.5,5.8 7.8,8.5 8.8,9.6 13.4,5 	"
      />
    </g>
  </svg>
);

const Button: React.ComponentType<{ children?: React.ReactNode }> = props => {
  return (
    <div className="button no-arrow-effect do-hover" {...props}>
      {props.children}
      <span className="arrow">
        <RightArrowSVG />
      </span>
      <span className="fill">
        <span className="text">
          {props.children}
          <span className="arrow">
            <RightArrowSVG />
          </span>
        </span>
      </span>
    </div>
  );
};
export const StyledButton = styled(Button)<{
  inverted?: boolean;
  size?: string;
}>`
  font-family: 'Apercu', sans-serif;
  color: ${props => (props.inverted ? `#fff` : `#00f`)};
  border: 0.125rem solid ${props => (props.inverted ? `#fff` : `#00f`)};
  height: 3.125rem;
  text-align: center;
  font-size: 0.875rem;
  line-height: 2.875rem;
  display: block;
  width: ${props => (props.size ? props.size : `16.25rem`)};
  white-space: no-wrap;
  position: relative;
  overflow: hidden;
  font-weight: 400;
  font-style: normal;

  &:hover .fill {
    width: 100%;
  }

  .fill {
    left: 0;
    position: absolute;
    height: 110%;
    border-top: solid 0.25rem ${props => (props.inverted ? `#fff` : `#00f`)};
    border-bottom: solid 0.25rem ${props => (props.inverted ? `#fff` : `#00f`)};
    top: -0.25rem;
    bottom: -0.25rem;
    background-color: ${props => (props.inverted ? `#fff` : `#00f`)};
    overflow: hidden;
    width: 0;
    transition: width 0.4s;

    .text {
      top: 0;
      left: 0;
      height: 100%;
      position: absolute;
      color: ${props => (props.inverted ? `#00f` : `#fff`)};
      text-align: center;
      font-size: 0.875rem;
      line-height: 2.875rem;
      display: block;
      width: ${props => (props.size ? props.size : `16.25rem`)};
      white-space: no-wrap;

      .arrow * {
        fill: ${props => (props.inverted ? `#00f` : `#fff`)};
      }
    }
  }

  .arrow {
    width: 0.875rem;
    height: 0.625rem;
    display: inline-block;
    position: relative;
    margin-left: 0.25rem;
    transform-style: flat;
    transform: translateX(0);
    transform-origin: 50% 50%;
    transition: transform 0.4s;

    * {
      fill: ${props => (props.inverted ? `#fff` : `#00f`)};
    }
  }
`;

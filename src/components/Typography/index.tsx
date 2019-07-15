import React from "react";
import styled from "styled-components";
import { Text, Heading, TextProps } from "rebass";
import "./fonts/index.css";
import "typeface-spectral";

//@ts-ignore
import { DotPattern } from "./DotPattern.js";

export { DotPattern };

interface ITextProps extends TextProps {
  children: any;
}

export const Caps = (props: ITextProps) => (
  <Text
    as="span"
    {...props}
    fontFamily="Apercu"
    css={`
      fontsize: 12px;
      texttransform: uppercase;
      letterspacing: 0.2em;
    `}
  />
);

export const P = (props: ITextProps) => (
  <Text as="p" fontSize={[3]} fontFamily="Apercu" mt="0" {...props} />
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

export const SectionHeading = (props: any) => (
  <Heading as="h3" fontSize={[5, 6]} fontFamily="Spectral" mt={0} {...props} />
);

export const StyledLinkText = styled(Text)<{
  inverted?: boolean;
  color?: string;
}>`
  position: relative;
  transition: all 0.2s ease;
  display: inline-block;
  line-height: 1.5;

  &:hover {
    color: ${props => (props.inverted ? `#fff` : props.color || `#00f`)};
    transform: translateY(-4px);
  }

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    right: 0;
    background: ${props => (props.inverted ? `#fff` : props.color || `#00f`)};
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

export const RightArrowSVG = () => (
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

const Button = (props: any) => {
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
  inverted?: any;
  size?: string;
}>`
  font-family: "Apercu", sans-serif;
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

export const ListItem = styled(P)`
  font-family: Apercu, sans-serif;
  position: relative;
  padding-left: 2em;
  margin-top: 0px;
  margin-bottom: 0.5em;
  list-style: none;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0.75em;
    height: 1px;
    background: #ddd;
    width: 1.5em;
  }
`;

export const H1 = (props: any) => (
  <Heading as="h1" fontFamily="Apercu" mb="4" fontSize="6" {...props}>
    {props.children}
  </Heading>
);

export const H2 = (props: any) => (
  <Heading as="h2" fontFamily="Apercu" mb="4" fontSize="5" {...props}>
    {props.children}
  </Heading>
);

export const H3 = (props: any) => (
  <Heading
    as="h3"
    fontFamily="Apercu"
    my={[4, 5]}
    fontSize="3"
    style={{ textTransform: "uppercase", letterSpacing: ".2em" }}
    {...props}
  >
    {props.children}
  </Heading>
);

export const BodyText = (props: any) => (
  <Text
    as="p"
    fontFamily="Apercu"
    lineHeight="1.7"
    fontSize={[3, 4]}
    style={{ wordSpacing: ".1em" }}
    mb="4"
    {...props}
  >
    {props.children}
  </Text>
);

export const Caption = (props: any) => (
  <Text
    as="span"
    fontFamily="Apercu"
    fontWeight="bold"
    style={{ textTransform: "uppercase", fontStyle: "normal" }}
    fontSize={[2]}
    letterSpacing="0.1em"
    {...props}
  >
    {props.children}
  </Text>
);
